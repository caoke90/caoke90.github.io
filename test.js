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
        this.grid=1;
        this.angle=0;
        this.isNode=true;

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
    color16(){//十六进制颜色随机
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
    constructor(a,b){
        super()
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


class Game extends Node{

    constructor(){
        super()

        //交互
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
        const line=new ccRect(Point(35,40),70,80)
        this.world.add(line)

        this.slumpObject=[]
        for(let k=0;k<100;k++){
            const circle=new ccCircle(Point(0|Math.random()*55+5,0|Math.random()*60+5),0|Math.random()*2+1)
            this.world.add(circle)
            this.slumpObject.push(circle)
        }

        this.slumpObject[0].velocity=Point(1,1)
        this.calculate(function (cur,next,direct,dist) {
            const point=Point.multiply(direct,(cur.radius+next.radius-dist)/dist);
            next.point=Point.add(next.point,point);

        })


        this.slumpObject.forEach(function (sp,i) {
            sp.add(new ccText(i,Point(0,0)))
        })


    }
    calculate(callback){
        this.slumpObject.sort((a,b)=>{
            return this._sort(a.point,b.point)
        })
        //发生了碰撞
        for(let i=0;i<this.slumpObject.length;i++){
            const cur=this.slumpObject[i];
            for(let l=i-1;l>0;l--){
                const next=this.slumpObject[l]
                //不在范围内
                if(cur.point.x-next.point.x>cur.radius+next.radius){
                    break;
                }
                const direct=Point.sub(next.point,cur.point)
                const dist=direct.norm()
                if(dist<=cur.radius+next.radius){
                    const point=Point.multiply(direct,(cur.radius+next.radius-dist)/dist);
                    // next.point=Point.add(next.point,point)
                    callback(cur,next,direct,dist)
                }
            }
            for(let r=i+1;r<this.slumpObject.length;r++){
                const next=this.slumpObject[r]
                //不在范围内
                if(next.point.x-cur.point.x>cur.radius+next.radius){
                    break;
                }
                const direct=Point.sub(next.point,cur.point)
                const dist=direct.norm()
                if(dist<=cur.radius+next.radius){
                    const point=Point.multiply(direct,(cur.radius+next.radius-dist)/dist);
                    // next.point=Point.add(next.point,point)
                    callback(cur,next,direct,dist)
                }
            }
        }
    }
    slump(){
        for(let i=0;i<this.slumpObject.length;i++){
            const cur=this.slumpObject[i]
            // cur.velocity=Point.multiply(cur.velocity,0.99)
            cur.point=Point.add(cur.point,cur.velocity)
            if(cur.point.x<0){
                cur.velocity.x=-cur.velocity.x;
            }
            if(cur.point.x>70){
                cur.velocity.x=-cur.velocity.x;
            }
            if(cur.point.y<0){
                cur.velocity.y=-cur.velocity.y;
            }
            if(cur.point.y>80){
                cur.velocity.y=-cur.velocity.y;
            }
        }

        this.calculate(function (cur,next,direct,dist) {
            //左碰撞和右碰撞
            if((direct.x>=0&&cur.velocity.x>0)||(direct.y>=0&&cur.velocity.y>0)||(direct.x<=0&&cur.velocity.x<0)||(direct.y<=0&&cur.velocity.y<0)){
                const vec1=Line.pointProjLine(cur.velocity,Point(0,0),direct)
                cur.velocity=Point.sub(cur.velocity,vec1)
                next.velocity=Point.add(next.velocity,vec1);
            }

        })
        this.calculate(function (cur,next,direct,dist) {
            const point = Point.multiply(direct, (cur.radius + next.radius - dist) / dist);
            next.point = Point.add(next.point, point);
        })
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
    //按照x和y大小排序
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
