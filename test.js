
var cc={}
cc.canvas=document.getElementById("myCanvas")
cc.ctx=cc.canvas.getContext("2d");


class Node{
    constructor(){

        this.children=[]
        this.parent=null;
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
        for(let i=0;i<this.children.length;i++){
            this.children[i].render()
        }
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
        const ctx=cc.ctx;
        ctx.rect(this.point.x-this.width/2,cc.height-this.point.y-this.height/2,this.width,this.height);
        ctx.strokeStyle="#72dd38";
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
        const ctx=cc.ctx;
        ctx.beginPath();
        ctx.moveTo(this.a.x,cc.height-this.a.y);
        ctx.lineTo(this.b.x,cc.height-this.b.y);
        ctx.strokeStyle=this.strokeStyle;
        ctx.stroke();
    }
}
class ccText extends Node{
    constructor(text,point){
        super()
        this.text=text
        this.point=point
    }
    render(){
        const ctx=cc.ctx;
        ctx.font="10px Arial";
        ctx.textAlign=this.textAlign||"center";
        ctx.textBaseline=this.textBaseline||"middle";
        ctx.fillText(this.text,this.point.x,cc.height-this.point.y);
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
        const ctx=cc.ctx;
        ctx.beginPath();
        ctx.arc(this.point.x,cc.height-this.point.y,this.radius,this.startingAngle,this.endingAngle);
        ctx.stroke();
    }
}
class Page extends Node{
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
    constructor(){
        super()
        cc.width=this.translate('100vw');
        cc.height=this.translate('100vh');

        cc.canvas.width=cc.width;
        cc.canvas.height=cc.height;
        cc.rect=cc.canvas.getBoundingClientRect();
        //交互
        const handle=(e)=> {
            let type=e.type;
            console.log(type)
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
    async init(){
        const cellW=18;
        this.cellW=cellW;
        //行
        const wCen=(parseInt(cc.width/cellW)>>1)*2;
        const hCen=(parseInt(cc.height/cellW)>>1)*2;
        const width=this.width=wCen*cellW;
        const height=this.height=hCen*cellW;
        console.log(wCen,hCen)

        for(let i=0;i<=wCen;i++){
            const line=new ccLine(Point(i*cellW,0),Point(i*cellW,height))
            if(i===wCen/2){
                line.strokeStyle='#dd4a41'
            }else{
                line.strokeStyle='#ddd'
                const text=new ccText(i-wCen/2,Point(i*cellW,(hCen/2)*cellW))
                text.strokeStyle='#dddb6f'
                text.textBaseline='top';
                this.add(text)
            }
            this.add(line)


        }
        for(let i=0;i<=hCen;i++){
            const line=new ccLine(Point(0,i*cellW),Point(width,i*cellW))
            if(hCen/2===i){
                line.strokeStyle='#dd4a41'
            }else{
                line.strokeStyle='#ddd'

                const text=new ccText(i-hCen/2,Point(width/2,(i)*cellW))
                text.strokeStyle='#dddb6f'
                text.textAlign="right";
                this.add(text)
            }
            this.add(line)
        }


    }
    render(){
        cc.ctx.clearRect(0,0,cc.width,cc.height)
        super.render()

    }
    touchstart([position]){

        const relaPoint=Point(Math.round(position.x/this.cellW)*this.cellW,Math.round(position.y/this.cellW)*this.cellW)
        if(!this.line){
            this.line=new ccLine(relaPoint,relaPoint);
            this.line.strokeStyle="#dd6dd0";
            this.add(this.line)

            const text=new ccText(`${(relaPoint.x-this.width/2)/this.cellW},${(relaPoint.y-this.height/2)/this.cellW}`,relaPoint)
            this.add(text)
            this.text2=new ccText(`${(relaPoint.x-this.width/2)/this.cellW},${(relaPoint.y-this.height/2)/this.cellW}`,relaPoint)
            this.add(this.text2)

            // const circle=new ccCircle(relaPoint,5)
            // this.add(circle)
            // this.circle2=new ccCircle(relaPoint,5)
            // this.add(this.circle2)
        }

    }
    touchmove([position]){

        const relaPoint=Point(Math.round(position.x/this.cellW)*this.cellW,Math.round(position.y/this.cellW)*this.cellW)
        if(this.line){
            this.line.b=relaPoint;
            // this.circle2.point=relaPoint;

            this.text2.text=`${(relaPoint.x-this.width/2)/this.cellW},${(relaPoint.y-this.height/2)/this.cellW}`;
            this.text2.point=relaPoint;


        }

    }
    touchend([position]){

        if(this.line){
            this.line=null;
        }
    }
}
cc._time=0;
cc.queue=[];
cc.wait=function(second){
    return new Promise((res,rej)=>{
        cc.queue.push({callback:res,time:second+cc._time})
    })
}
//page
const page=new Page();
page.init()

function step(timestamp) {
    cc._time+=18;
    cc.queue=cc.queue.filter(function (item) {
        if(cc._time>item.time){
            item.callback()
            return false;
        }else {
            return true;
        }
    })
    page.render();
    window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);


