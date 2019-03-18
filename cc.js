//计算几何误差修正
Math.EPS=0.00000001;
//判断x的符号
Math.cmp=function(x) {
    if(Math.abs(x)<Math.EPS)return 0;
    if(x>0){
        return 1;
    }else{
        return -1;
    }
}
//矩阵类
class Matrix {
    //将一个数组构建成一个矩阵，行Row、列Column
    constructor(data,Row,Column){
        this.data=data||[];
        this.Row=Row;//行
        this.Column=Column;//竖
    }
    //根据行、列返回矩阵元素
    getItem(r,c){
        return this.data[r*this.Column+c]||0;
    }
    //根据行、列设置矩阵元素
    setItem(r,c,item){
        this.data[r*this.Column+c]=item;
    }
    //换行
    swapRow(r1,r2){
        for(let c=0;c<this.Column;c++){
            const cache=this.getItem(r1,c)
            this.setItem(r1,c,this.getItem(r2,c))
            this.setItem(r2,c,cache);
        }
    }
    oneRowEach(r,callback){
        for(let c=0;c<this.Column;c++){
            callback(this.getItem(r,c),r,c)
        }
    }
    //按行遍历矩阵元素,返回元素item，行r，列c
    rowEach(callback){
        for(let r=0;r<this.Row;r++){
            for(let c=0;c<this.Column;c++){
                callback(this.getItem(r,c),r,c)
            }
        }
    }
    //按竖遍历矩阵元素,返回元素item，行r，列c
    columnEach(callback){
        for(let c=0;c<this.Column;c++){
            for(let r=0;r<this.Row;r++){
                callback(this.getItem(r,c),r,c)
            }
        }
    }
    //行循环
    oneRowMap(r,callback){
        this.oneRowEach(r,(item,r,c)=> {
            this.setItem(r,c,callback(item,r,c));
        })
    }
    //按行map矩阵元素
    rowMap(callback){
        this.rowEach((item,r,c)=> {
            this.setItem(r,c,callback(item,r,c));
        })
    }
    //相加
    add(matrix){
        if(matrix instanceof Matrix&& this.Row === matrix.Row && this.Column === matrix.Column){
            const nMatrix=new Matrix([],this.Row,this.Column)
            this.rowEach(function (item,r,c) {
                nMatrix.setItem(r,c,item+matrix.getItem(r,c))
            })
            return nMatrix;
        }else{
            throw '方法plus 参数错误';
        }
    }
    //相减
    sub(matrix){
        if(matrix instanceof Matrix&& this.Row === matrix.Row && this.Column === matrix.Column){
            const nMatrix=new Matrix([],this.Row,this.Column)
            this.rowEach(function (item,r,c) {
                nMatrix.setItem(r,c,item-matrix.getItem(r,c))
            })
            return nMatrix;
        }else{
            throw '方法minus 参数错误';
        }
    }
    //相乘
    multiply(obj){
        if(obj instanceof Matrix){
            return this.multiplyMatrix(obj)
        }else if(typeof obj=='number'){
            return this.multiplyNumber(obj)
        }else{
            throw 'multiply 输入的参数类型错误';
        }
    }
    //矩阵与数相乘,返回一个新的矩阵
    multiplyNumber(number){
        const nMatrix=new Matrix([],this.Row,this.Column)
        this.rowEach((item,r,c)=> {
            nMatrix.setItem(r,c,item*number)
        })
        return nMatrix;
    }
    //矩阵与矩阵相乘 矩阵A的行必须与矩阵B的列数相等
    multiplyMatrix(matrix){
        if(this.Row!==matrix.Column){
            throw '矩阵A的行必须与矩阵B的列数相等';
        }
        const nMatrix=new Matrix([],this.Row,matrix.Column)
        for(let r=0;r<this.Row;r++){
            for(let mc=0;mc<matrix.Column;mc++){
                let num=0;
                for(let c=0;c<this.Column;c++){
                    num=num+this.getItem(r,c)*matrix.getItem(c,mc)
                }
                nMatrix.setItem(r,mc,num)
            }
        }
        return nMatrix;

    }
    //复制生成一个新的矩阵
    clone(){
        return new Matrix([].concat(this.data),this.Row,this.Column)
    }
    //转换成字符图形
    toString(){
        let str='[';
        for(let r=0;r<this.Row;r++){
            str=str+'\n'
            for(let c=0;c<this.Column;c++){
                if(r==this.Row-1&&c==this.Column-1){
                    str=str+this.getItem(r,c);
                }else{
                    str=str+this.getItem(r,c)+',';
                }
            }
        }
        str=str+'\n]'
        return str;
    }
}

/*Gauss 消元
传入一个矩阵，传出结果
*/
function Gauss(matrix){
    let l=[];//是否为自由元
    let ans=[];//存储解
    const n=matrix.Column-1;//解的个数
    let res=0,r=0;
    for(let i=0;i<matrix.Column;i++){
        for(let j=r;j<matrix.Row;j++){
            if(Math.abs(matrix.getItem(j,i))>Math.EPS){
                if(j!==r){
                    //行交换位置
                    for(let k=i;k<=n;k++){
                        const temp1=matrix.getItem(j,k)
                        const temp2=matrix.getItem(r,k)
                        matrix.setItem(j,k,temp2)
                        matrix.setItem(r,k,temp1)
                    }
                }
                break;
            }
        }
        // console.log(matrix.toString(),r,i)
        if(Math.abs(matrix.getItem(r,i)<Math.EPS)){
            ++res;
            console.log('continue')
            continue;
        }
        //方程相减，消除元
        for(let j=0;j<matrix.Row;j++){
            if(j!==r&&Math.abs(matrix.getItem(j,i))>Math.EPS){
                let tmp=matrix.getItem(j,i)/matrix.getItem(r,i);
                for(let k=i;k<=n;k++){
                    const item=matrix.getItem(j,k)-tmp*matrix.getItem(r,k)
                    matrix.setItem(j,k,item)
                }

            }
        }
        l[i]=true;
        r++;
    }
    //输出答案
    for(let i=0;i<n;i++){
        if(l[i]){
            for(let j=0;j<n;j++){
                if(Math.abs(matrix.getItem(j,i))>0){
                    ans[i]=matrix.getItem(j,n)/a.getItem(j,i)
                }
            }
        }
    }
    return ans;
}
//将一个矩阵转换成上三角矩阵
function upperMatrix(oriMatrix) {
    const matrix=oriMatrix.clone();
    let r=0;

    //生成上三角矩阵
    for(let i=0;i<matrix.Row;i++){
        //循环行
        for(let j=r;j<matrix.Row;j++){
            if(Math.abs(matrix.getItem(j,i))>Math.EPS){
                if(j!==r){
                    //行交换位置
                    matrix.swapRow(j,r)
                }

                break;
            }
        }
        if(Math.abs(matrix.getItem(r,i)<Math.EPS)){
            continue;
        }
        //方程相减，消除元
        for(let j=0;j<matrix.Row;j++){
            if(j!==r&&Math.abs(matrix.getItem(j,i))>Math.EPS){
                let tmp=matrix.getItem(j,i)/matrix.getItem(r,i);
                for(let k=i;k<matrix.Column;k++){
                    const item=matrix.getItem(j,k)-tmp*matrix.getItem(r,k)
                    matrix.setItem(j,k,item)
                }
            }
        }
        r++;
    }

    return matrix
}

//求矩阵的逆
function Inverse(matrix){
    if(matrix.Row!==matrix.Column){
        throw '矩阵的行与列需要相等';
    }
    const N=matrix.Row;
    //方程矩阵A
    const A = new Matrix([],N,2*N);
    for(let r=0;r<N;r++){
        for(let c=0;c<N;c++){
            A.setItem(r,c,matrix.getItem(r,c))
        }
    }
    for(let r=0;r<N;r++){
        for(let c=N;c<N*2;c++){
            if(r===c-N){
                A.setItem(r,c,1)
            }else{
                A.setItem(r,c,0)
            }
        }
    }
    //换成上三角矩阵
    const B=upperMatrix(A)

    //左边转成单位矩阵
    for(let i=0;i<N;i++){
        if(Math.abs(B.getItem(i,i))!==1){
            for(let k=N;k<2*N;k++){
                B.setItem(i,k,B.getItem(i,k)/B.getItem(i,i))
            }
            B.setItem(i,i,1)
        }
    }
    //输出结果
    const C = new Matrix([],N,N);
    C.rowMap(function (item,r,c) {
        return B.getItem(r,c+N);
    })
    return C;
}
//欧几里得算法 求两个数a、b的最大公约数
function gcd(a,b){
    return b===0?a:gcd(b,a%b)
}
//分数类 分子，分母
class Fraction{
    constructor(num=0,den=1){
        if(den<0){
            num=-num;
            den=-den;
        }
        if(den===0){
            throw '分母不能为0'
        }
        let g=gcd(Math.abs(num),den)
        this.num=num/g;
        this.den=den/g;
    }
    //加
    add(o){
        return new Fraction(this.num*o.den+this.den*o.num,this.den*o.den)
    }
    //减
    sub(o){
        return new Fraction(this.num*o.den-this.den*o.num,this.den*o.den)
    }
    //乘
    multiply(o){
        return new Fraction(this.num*o.num,this.den*o.den);
    }
    //除
    divide(o){
        return new Fraction(this.num*o.den,this.den*o.num);
    }
    //小于
    lessThan(o){
        return this.num*o.den<this.den*o.num;
    }
    //等于
    equal(o){
        return this.num*o.den===this.den*o.num;
    }
}

//点类
function Point(x,y) {
    if(this instanceof Point){
        if(Math.cmp(x.toFixed(2)-x)==0){
            x=Number(x.toFixed(2));
        }
        if(Math.cmp(y.toFixed(2)-y)==0){
            y=Number(y.toFixed(2));
        }
        this.x=x;
        this.y=y;
    }else{

        return new Point(x,y)
    }
}
//向量的模长
Point.prototype.norm=function(){
    return Math.sqrt(this.x*this.x+this.y*this.y);
}
// 加
Point.add=function(a,b){
    return new Point(a.x+b.x,a.y+b.y)
}
// 减
Point.sub=function(a,b){
    return new Point(a.x-b.x,a.y-b.y);
}
// 等于
Point.equals=function(a,b){
    return Math.cmp(a.x-b.x)===0&&Math.cmp(a.y-b.y)===0;
}
//乘 向量与数字
Point.multiply=function(a,b){
    if(a instanceof Point&&typeof b=='number'){
        return Point(a.x*b,a.y*b)
    }
    if(b instanceof Point&&typeof a=='number'){
        return Point(a*b.x,a*b.y)
    }
}
//除 向量与数字
Point.divide=function(a,b){
    return Point(a.x/b,a.y/b)
}
//向量的叉积
Point.det=function (a,b) {
    return a.x*b.y-a.y*b.x;
}
//向量的点积
Point.dot=function (a,b) {
    return a.x*b.x+a.y*b.y;
}
//两个点的距离
Point.dist=function (a,b) {
    return Point.sub(a,b).norm()
}
//逆时针旋转,a为弧度
Point.rotate=function (p,A) {
    const tx=p.x;
    const ty=p.y;
    return Point(tx*Math.cos(A)-ty*Math.sin(A),tx*Math.sin(A)+ty*Math.cos(A))
}

//计算几何线段类
function Line(a,b) {
    if(this instanceof Line){
        this.a=a;
        this.b=b;
    }else{
        if(a instanceof Point&&b instanceof Point){
            return new Line(a,b)
        }else{
            throw 'Line 参数错误'
        }
    }
}
//点p到线段s、t的距离
Line.dis_point_segment=function(p,s,t){
    if(Math.cmp(Point.dot(Point.sub(p,s),Point.sub(t,s)))<0){
        return Point.sub(p,s).norm()
    }
    if(Math.cmp(Point.dot(Point.sub(p,t),Point.sub(s,t)))<0){
        return Point.sub(p,t).norm()
    }
    return Math.abs(Point.det(Point.sub(s,p),Point.sub(t,p))/Point.dist(s,t))
}
//点到线段的垂足
Line.pointProjLine=function(p,s,t){
    const r=Point.dot(Point.sub(t,s),Point.sub(p,s))/Point.dot(Point.sub(t,s),Point.sub(t,s))
    return Point.add(s,Point.multiply(r,Point.sub(t,s)))
}
//点是否在线段上
Line.pointOnSegment=function(p,s,t){
    return Math.cmp(Point.det(Point.sub(p,s),Point.sub(t,s)))===0&&Math.cmp(Point.det(Point.sub(p,s),Point.sub(p,t)))<=0
}
//判断线段a、b是否平行,a、b 为line
Line.parallel=function (a,b) {
    return !Math.cmp(Point.det(Point.sub(a.a,a.b),Point.sub(b.a,b.b)))
}
//判断线段a、b是否相交,返回交点
Line.lineMakePoint=function (a,b) {
    if(Line.parallel(a,b)){
        return false;
    }
    const s1=Point.det(Point.sub(a.a,b.a),Point.sub(b.b,b.a));
    const s2=Point.det(Point.sub(a.b,b.a),Point.sub(b.b,b.a));
    return Point.divide(Point.sub(Point.multiply(s1,a.b),Point.multiply(s2,a.a)),s1-s2);
}
// 将直线a沿法向量方向平移距离len得到的直线
Line.moveD=function (a,len) {
    let d=Point.sub(a.b,a.a)
    d=Point.divide(d,d.norm());
    d=Point.rotate(d,Math.PI/2);
    return Line(Point.add(a.a,Point.multiply(d,len)),Point.add(a.b,Point.multiply(d,len)))
}
