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
}
class Axeis extends Node{
    constructor(){
        super();
        this.point=Point(0,0);
        this.grid=1;
        this.angle=0;
        this.isAxeis=true;
    }
    show(){
        for(let x=0;x<=75;x++){
            const line=new ccLine(Point(x,0),Point(x,133))
            line.strokeStyle='#f5f6f7'
            this.add(line)
        }

        for(let y=0;y<=133;y++){
            const line=new ccLine(Point(0,y),Point(75,y))
            line.strokeStyle='#f5f6f7'
            this.add(line)
        }
    }
    WorldToScreenGrid(grid){
        grid=this.grid*grid;
        if(this.parent&&this.parent.isAxeis){
            grid= this.parent.WorldToScreenGrid(grid)
        }
        return grid;
    }
    WorldToScreenPoint(pos){
        pos=Point.add(Point.rotate(Point.multiply(pos,this.grid),this.angle),this.point)

        if(this.parent&&this.parent.isAxeis){
            pos= this.parent.WorldToScreenPoint(pos)
        }

        return pos;
    }
    ScreenToWorldPoint(pos){
        if(this.parent&&this.parent.isAxeis){
            pos=this.parent.ScreenToWorldPoint(pos)
        }
        return Point.divide(Point.rotate(Point.sub(pos,this.point),-this.angle),this.grid);
    }
}
class ccRect extends Axeis{
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

        ctx.strokeStyle="#72dd38";
        ctx.stroke();

    }
}
class ccLine extends Axeis{
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
        ctx.strokeStyle=this.strokeStyle;
        ctx.stroke();
    }
}
class ccText extends Axeis{
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
        const point=this.WorldToScreenPoint(Point(0,0));

        ctx.fillText(this.text,point.x,cc.height-point.y);
    }
}
class ccCircle extends Axeis{
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
        ctx.strokeStyle=this.strokeStyle||'#dd4c3c';
        ctx.stroke();
    }
}

class Game extends Axeis{

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
                    cc.height-(e.y-cc.rect.top)
                )])
            }else if(e.type==='touchstart'||e.type==='touchmove'||e.type==='touchend'){
                const arr=[]
                for(let i=0;i<e.touches.length;i++){
                    const item=e.touches[i];
                    arr.push(Point(
                        item.pageX-cc.rect.left,
                        cc.height-(item.pageY-cc.rect.top)
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

        this.world=new Axeis();
        this.world.grid=10;
        this.add(this.world)
        this.progress=new Step(this.runArr,(step,time)=>{
            this[step](step,time);
            cc.ctx.clearRect(0,0,cc.width,cc.height);
            this.render()
        })
        this.progress.run();

    }

    initAxes(){
        // this.show()
        this.world.show()

        this.progress.waitSecondAndGo();

        // this.rect={
        //     top:10,left:-10,bottom:-10,right:10
        // }
        // this.direct='right';

        this.slumpObject=[]
        for(let k=0;k<100;k++){
            const circle=new ccCircle(Point(0|Math.random()*75,0|Math.random()*133),0|Math.random()*3+1)
            this.world.add(circle)
            this.slumpObject.push(circle)
        }
        this.slumpObject=this.slumpObject.sort((a,b)=>{
            return this._sort(a.point,b.point)
        })
        this.slumpObject.forEach(function (sp,i) {
            sp.add(new ccText(sp.point.x+','+sp.point.y,Point(0,0)))
        })
        const rect=new ccRect(Point(2,2),2,2)

        this.world.add(rect)

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
    slump(){
        for(let i=0;i<this.slumpObject.length;i++){
            const cur=this.slumpObject[i]
            if(cur.point.y>10){
                cur.point.y-=0.5
            }
        }

        for(let i=0;i<this.slumpObject.length;i++){
            const cur=this.slumpObject[i]
            for(let k=0;k<this.slumpObject.length;k++){
                if(i===k){
                    continue;
                }
                const next=this.slumpObject[k]
                const dist=Point.dist(cur.point,next.point)
                const num=cur.radius+next.radius-dist
                if(num>0){
                    const point=Point.multiply(Point.sub(next.point,cur.point),(cur.radius+next.radius-num/2)/(dist));
                    next.point=Point.add(cur.point,point)


                }
            }
        }

        this.slumpObject.forEach(function (cur) {

            if(cur.point.y<9){
                cur.point.y+=0.5
            }
            if(cur.point.x<0){
                cur.point.x+=0.5
            }
            if(cur.point.x>75){
                cur.point.x-=0.5
            }
        })
        this.progress.waitSecondAndGo(0.05,'slump')
    }
    toggle(){
        if(this.direct=='right'){
            if(this.circle.point.x<this.rect.right){
                this.circle.point.x+=1
            }else{
                this.rect.top-=1;
                this.direct='bottom'
            }

        }else if(this.direct=='bottom'){
            if(this.circle.point.y>this.rect.bottom){
                this.circle.point.y-=1
            }else{
                this.rect.right-=1
                this.direct='left'
            }

        }else if(this.direct=='left'){
            if(this.circle.point.x>this.rect.left){
                this.circle.point.x-=1
            }else{
                this.rect.bottom+=1
                this.direct='top'
            }
        }else if(this.direct=='top'){
            if(this.circle.point.y<this.rect.top){
                this.circle.point.y+=1
            }else{
                this.rect.left+=1
                this.direct='right'
            }
        }
        if(this.circle.point.x==0&&this.circle.point.y==0){
            return;
        }
        console.log(this.circle.point)
        // this.world.grid=this.world.grid+this.addNum;
        // this.world.angle+=0.3;
        // this.world2.angle-=0.3;
        // if(this.world.grid>100){
        //     this.addNum=-2;
        // }
        // if(this.world.grid<20){
        //     this.addNum=2;
        // }
        this.progress.waitSecondAndGo(0.1,'toggle')
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
}
new Game().init()

