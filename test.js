const canvas=document.getElementById("myCanvas");

var cc={
    canvas:canvas,
    ctx:canvas.getContext("2d"),
    translate(str){
        if(/px/.test(str)){
            return parseInt(str)
        }
        if(/vh/.test(str)){
            return parseInt(str)*window.innerHeight/100
        }
        if(/vw/.test(str)){
            return parseInt(str)*window.innerWidth/100
        }
    }
}
cc.width=canvas.width=cc.translate('100vw');
cc.height=canvas.height=cc.translate('100vh');

cc.rect=canvas.getBoundingClientRect();

class Node{
    constructor(){

        this.children=[]
        this.parent=null;
        this.isShow=true;

        this.point=Point(0,0);
        this.velocity=Point(0,0);
        this.mg=1;
        this.grid=1;
        this.angle=0;
        this.isNode=true;
        this.isStatic=false;

        this.strokeStyle=this.color16()
    }
    WorldToScreenGrid(grid){
        grid=this.grid*grid;
        if(this.parent&&this.parent.isNode){
            grid= this.parent.WorldToScreenGrid(grid)
        }
        return grid;
    }
    WorldToScreenPoint(pos){
        pos=Point.add(Point.rotate(Point.multiply(pos,this.grid),this.angle),this.point)

        if(this.parent&&this.parent.isNode){
            pos= this.parent.WorldToScreenPoint(pos)
        }

        return pos;
    }
    WorldToWorldPoint(pos){
        return Point.add(Point.rotate(Point.multiply(pos,this.grid),this.angle),this.point);
    }
    ScreenToWorldPoint(pos){
        if(this.parent&&this.parent.isNode){
            pos=this.parent.ScreenToWorldPoint(pos)
        }
        return Point.divide(Point.rotate(Point.sub(pos,this.point),-this.angle),this.grid);
    }
    add(node){
        if(!node.parent){
            node.parent=this;
            this.children.push(node);
        }
    }
    remove(node){
        this.children=this.children.filter((nd)=>{
            if(node===nd){
                node.parent=null;
            }
            return node!==nd
        })
    }
    render(){
        if(!this.isShow){return false;}
        for(let i=0;i<this.children.length;i++){
            this.children[i].render()
        }
        return true;
    }
    color16(){//????????????????????????
        const r = Math.floor(Math.random()*256);
        const g = Math.floor(Math.random()*256);
        const b = Math.floor(Math.random()*256);
        const color = '#'+r.toString(16)+g.toString(16)+b.toString(16);
        return color;
    }
}

class ccRect extends Node{
    constructor(point,width,height){
        super()
        this.isRect=true;
        this.point=point;
        this.width=width;
        this.height=height;
    }
    render(){
        if(!super.render()){return;}
        const ctx=cc.ctx;
        const arr=[
            this.WorldToScreenPoint(Point(-this.width/2,this.height/2)),
            this.WorldToScreenPoint(Point(this.width/2,this.height/2)),
            this.WorldToScreenPoint(Point(this.width/2,-this.height/2)),
            this.WorldToScreenPoint(Point(-this.width/2,-this.height/2)),
        ]
        ctx.beginPath();
        ctx.moveTo(arr[0].x,cc.height-arr[0].y);
        ctx.lineTo(arr[1].x,cc.height-arr[1].y);
        ctx.lineTo(arr[2].x,cc.height-arr[2].y);
        ctx.lineTo(arr[3].x,cc.height-arr[3].y);
        ctx.closePath();

        ctx.strokeStyle=this.strokeStyle||this.color16();
        ctx.stroke();

    }
}
class ccLine extends Node{
    constructor(a,b,point){
        super()
        this.isLine=true;
        this.a=a;
        this.b=b;

    }
    render(){
        if(!super.render()){return;}
        const ctx=cc.ctx;
        const a=this.WorldToScreenPoint(this.a);
        const b=this.WorldToScreenPoint(this.b);
        ctx.beginPath();
        ctx.moveTo(a.x,cc.height-a.y);
        ctx.lineTo(b.x,cc.height-b.y);
        ctx.strokeStyle=this.strokeStyle||this.color16();
        ctx.stroke();
    }
}
class ccText extends Node{
    constructor(text,point){
        super()
        this.text=text
        this.point=point||Point(0,0)
    }
    render(){
        if(!super.render()){return;}
        const ctx=cc.ctx;
        ctx.font="10px Arial";
        ctx.textAlign=this.textAlign||"center";
        ctx.textBaseline=this.textBaseline||"middle";
        ctx.strokeStyle=this.strokeStyle||this.color16();

        const point=this.WorldToScreenPoint(Point(0,0));
        ctx.fillText(this.text,point.x,cc.height-point.y);
    }
}
class ccCircle extends Node{
    constructor(point,radius,startingAngle,endingAngle){
        super()
        this.isCirle=true;
        this.point=point;
        this.radius=radius;
        this.startingAngle=startingAngle||0;
        this.endingAngle=endingAngle||2*Math.PI;

    }
    render(){
        if(!super.render()){return;}
        const ctx=cc.ctx;
        const point=this.WorldToScreenPoint(Point(0,0));
        ctx.beginPath();
        ctx.arc(point.x,cc.height-point.y,this.WorldToScreenGrid(this.radius),this.startingAngle,this.endingAngle);
        ctx.strokeStyle=this.strokeStyle||this.color16();
        ctx.stroke();
    }
}
class userCircle extends ccCircle{
    constructor(point,radius,startingAngle,endingAngle){
        super(point,radius,startingAngle,endingAngle);
        const line=new ccLine(Point(0,0),Point.multiply(this.velocity,(this.radius/2*3)/this.velocity.norm()))
        this.add(line)
        this.line=line;
    }
    render(){
        this.line.b=Point.multiply(this.velocity,(this.radius/4*5)/this.velocity.norm());
        super.render()
    }
}

class Game extends Node{

    constructor(){
        super()

        //??????
        const handle=(e)=> {
            let type=e.type;
            if(type==='mousedown'){
                type='touchstart';
            }
            if(type==='mousemove'){
                type='touchmove';
            }
            if(type==='mouseup'){
                type='touchend';
            }
            if(type==='touchcancel'){
                type='touchend';
            }
            if(e.type==='mousedown'||e.type==='mousemove'||e.type==='mouseup'){

                this[type]([Point(
                    e.x-cc.rect.left,
                    cc.rect.bottom-e.y
                )])
            }else if(e.type==='touchstart'||e.type==='touchmove'||e.type==='touchend'){
                const arr=[]
                for(let i=0;i<e.touches.length;i++){
                    const item=e.touches[i];
                    arr.push(Point(
                        item.pageX-cc.rect.left,
                        cc.rect.bottom-item.pageY
                    ))
                }
                this[type](arr)

            }

        }
        document.addEventListener('mousedown',handle)
        document.addEventListener('mousemove',handle)
        document.addEventListener('mouseup',handle)

        document.addEventListener('touchstart',handle,false)
        document.addEventListener('touchmove',handle,false)
        document.addEventListener('touchend',handle,false)
        document.addEventListener('touchcancel',handle,false)

    }
    init(){
        this.runArr=['initAxes','slump'];

        this.progress=new Step(this.runArr,(step,time)=>{
            this[step](step,time);
            cc.ctx.clearRect(0,0,cc.width,cc.height);
            this.render()
        })
        this.progress.run();


    }

    initAxes(){
        this.world=new Node();
        this.world.point=Point(cc.width/2-35*7,cc.height/2-40*7)
        this.world.grid=7;
        this.add(this.world)
        // this.show()
        // this.world.show()

        this.progress.waitSecondAndGo();

        // for(let k=0;k<100;k++){
        //     const circle=new ccRect(Point(0|Math.random()*75,0|Math.random()*133),0|Math.random()*3+1,0|Math.random()*3+1)
        //     this.world.add(circle)
        // }
        // const circle=new ccRect(Point(35,40),70,80)
        // this.world.add(circle)

        this.slumpObject=[]
        for(let k=0;k<100;k++){
            const r=0|Math.random()*3+1;
            const sp=new userCircle(Point(0|Math.random()*55+5,0|Math.random()*60+5),r)
            this.world.add(sp)
            sp.mg=r*r;
            this.slumpObject.push(sp)
            sp.add(new ccText(k,Point(0,0)))
        }
        const line1=new ccLine(Point(0,0),Point(0,80))
        this.world.add(line1)
        this.slumpObject.push(line1)

        const line2=new ccLine(Point(0,0),Point(70,0))
        this.world.add(line2)
        this.slumpObject.push(line2)

        const line3=new ccLine(Point(0,80),Point(70,70))
        this.world.add(line3)
        this.slumpObject.push(line3)

        const line4=new ccLine(Point(70,0),Point(70,80))
        this.world.add(line4)
        this.slumpObject.push(line4)

        const line=new ccLine(Point(-15,15),Point(15,-15))
        this.world.add(line)
        line.point=Point(40,30)
        line1.isStatic=true;
        line2.isStatic=true;
        line3.isStatic=true;
        line4.isStatic=true;
        line.isStatic=true;
        this.slumpObject.push(line)

        this.slumpObject[0].velocity=Point(1,1)


        this.slumpObject.sort( (sp1,sp2)=> {
            return this._sort(sp1.point,sp2.point)
        })
        this.geli()
        console.log('geli')

    }
    geli(){
        let index=0;
        this.calculate((cur,next) =>{
            const direct=Point.sub(cur.point,next.point);
            const dist=direct.norm()
            const point=Point.multiply(direct,(cur.radius+next.radius+0.1-dist)/dist);
            cur.point=Point.add(cur.point,point);
            index++;
        })
        if(index!==0){
            this.geli()
        }

    }
    calculate(callback){
        //???????????????
        for(let i=0;i<this.slumpObject.length;i++){
            const cur=this.slumpObject[i];
            for(let k=0;k<this.slumpObject.length;k++){
                if(i!==k){
                    const next=this.slumpObject[k]
                    const point=this.isCollision(cur,next)
                    if(point){
                        callback(cur,next,point)
                        break;
                    }
                }

            }
        }
    }
    isCollision(left,right){
        let cur=left,next=right;
        //?????????
        if(cur.isCirle&&next.isCirle){
            const dist=Point.sub(next.point,cur.point).norm()
            if(dist<cur.radius+next.radius){
                return Point.divide(Point.add(Point.multiply(cur.point,next.radius),Point.multiply(next.point,cur.radius)),cur.radius+next.radius);
            }
        }
        if(cur.isCirle&&next.isLine){
            const p=cur.point
            const s=next.WorldToWorldPoint(next.a)
            const t=next.WorldToWorldPoint(next.b)
            if(Line.dis_point_segment(p,s,t)<cur.radius){
                if(Math.cmp(Point.dot(Point.sub(p,s),Point.sub(t,s)))<0){
                    if(Point.sub(p,s).norm()<cur.radius){
                        return s;
                    }
                }
                if(Math.cmp(Point.dot(Point.sub(p,t),Point.sub(s,t)))<0){
                    if(Point.sub(p,t).norm()<cur.radius){
                        return t;
                    }
                }
                if(Math.abs(Point.det(Point.sub(s,p),Point.sub(t,p))/Point.dist(s,t))<cur.radius){
                    return Line.pointProjLine(p,s,t)
                }
            }
        }
        //???????????????
        if(cur.isRect&&next.isRect){
            if(
                Math.abs(cur.point.x - next.point.x) < (cur.width+next.width)/2 //????????????
                &&
                Math.abs(cur.point.y - next.point.y) < (cur.height+next.height)/2 //????????????
            ){
                return true;
            }
        }
        //????????????
        if((left instanceof ccCircle&&right instanceof ccRect)||(right instanceof ccCircle&&left instanceof ccRect)){
            if(right instanceof ccCircle){
                cur=right;next=left;
            }
            if(
                Math.abs(cur.point.x - next.point.x) < cur.radius + next.width/2 //????????????
                &&
                Math.abs(cur.point.y - next.point.y) < cur.radius + next.height/2 //????????????
            ){
                return true;
            }
        }
        return false;
    }
    slump(){


        this.calculate(function (user,next,point) {
            const direct=Point.sub(point,user.point);

            //??????????????????
            if(Point.dot(direct,Point.sub(user.velocity,next.velocity))>0){
                if(user.isCirle&&next.isCirle){
                    const m1=user.mg;
                    const m2=next.mg;
                    const x1=Line.pointProjLine(user.velocity,Point(0,0),direct);
                    const y1=Point.sub(user.velocity,x1);

                    const x2=Line.pointProjLine(next.velocity,Point(0,0),direct);
                    const y2=Point.sub(next.velocity,x2);

                    user.velocity=Point.add(Point.divide(Point.add(Point.multiply(m1-m2,x1),Point.multiply(2*m2,x2)),m1+m2),y1);
                    next.velocity=Point.add(Point.divide(Point.add(Point.multiply(m2-m1,x2),Point.multiply(2*m1,x1)),m1+m2),y2);

                }
                if(user.isCirle&&next.isStatic){
                    const x1=Line.pointProjLine(user.velocity,Point(0,0),direct);
                    const y1=Point.sub(user.velocity,x1);
                    user.velocity=Point.add(Point(-x1.x,-x1.y),y1);
                }
            }


        })
        // this.line.angle+=Math.PI/90;

        // let vec=Point(0,0)
        // this.slumpObject.forEach((sp,i)=>{
        //     vec=Point.add(vec,sp.velocity)
        // })
        // console.log(vec)
        //????????????
        for(let i=0;i<this.slumpObject.length;i++){
            const cur=this.slumpObject[i]
            // cur.velocity=Point.multiply(cur.velocity,0.99)
            cur.point=Point.add(cur.point,cur.velocity)
            // if(cur.point.x<0){
            //     cur.velocity.x=-cur.velocity.x;
            // }
            // if(cur.point.x>70){
            //     cur.velocity.x=-cur.velocity.x;
            // }
            // if(cur.point.y<0){
            //     cur.velocity.y=-cur.velocity.y;
            // }
            // if(cur.point.y>80){
            //     cur.velocity.y=-cur.velocity.y;
            // }
        }
        this.progress.waitSecondAndGo(0.05,'slump')
    }

    touchstart([pos]){
        console.log(pos)
        console.log(this.world.ScreenToWorldPoint(pos))
        // console.log(this.world2.ScreenToWorldPoint(pos))
    }
    touchmove([pos]){

    }
    touchend([pos]){

    }
    //??????x???y????????????
    _sort(a,b){
        if(a.x== b.x&&a.y== b.y){
            return 0
        }
        if(a.x== b.x){
            return a.y> b.y?1:-1
        }
        return a.x> b.x?1:-1

    }
}
const game=new Game()
game.init()
game.render()
