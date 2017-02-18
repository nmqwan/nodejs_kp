let nv={name:"quan",age:10};
// console.log(nv);
// console.log(nv.name);
function NhanVien(ten,tuoi){
  this.ten=ten;
  this.tuoi=tuoi;
  this.xinChao=()=>{console.log(this.ten)};
}
let q=new NhanVien("quan",123);
// console.log(q.ten);
// q.xinChao();

function TamGiac(a,b,c){
  this.a=a;
  this.b=b;
  this.c=c;
  this.chuVi=()=>this.a+this.b+this.c;
}
// let t= new TamGiac(4,7,2);
// console.log(t.chuVi());

function DoanThang(x1,x2,y1,y2){
  this.x1=x1;
  this.x2=x2;
  this.y1=y1;
  this.y2=y2;
  this.canhHuyen=()=>{
    let canh1=this.x1-this.x2;
    let canh2=this.y1-this.y2;
    return Math.sqrt(canh1*canh1 + canh2*canh2);
  }
}
let dt= new DoanThang(0,0,0,1);
// console.log(dt.canhHuyen());

// _____________________________________________________
function Person(name,age){
  this.name=name;
  this.age=age;
  this.addAge=()=>this.age++;
}
let p = new Person("quan",1);
// console.log(p);
// p.addAge();
// console.log(p);
// _____________________________________________________________
