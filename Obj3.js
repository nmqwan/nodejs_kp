function Person(ten,tuoi,soduTK){
  this.ten=ten;
  this.tuoi=tuoi;
  let SD=soduTK;
  this.getSoDu=()=>SD;
  this. setSoDu=(sodu)=> SD=sodu;

}
let p= new Person("quan",1,1010)
// console.log(p.ten);
// console.log(p.tuoi);
// console.log(p.getSoDu());
// __________________________________________________________________
class NhanVien {
  constructor(ten,tuoi,sodu) {
    this.ten=ten;
    this.tuoi=tuoi;
  }
  xinChao(){
    console.log(this.ten+" "+this.tuoi);
  }
}
let nv1=new NhanVien("quan",1);
// console.log(nv1);
// nv1.xinChao();

// ____________________________________________________________________________

class Diem {
  constructor(x,y) {
    this.x=x;
    this.y=y;
  }
}


class TamGiac {
  constructor(a,b,c) {
    this.a=a;
    this.b=b;
    this.c=c;
  }
  chieuDai(aa,bb){
  let  c1= aa.x-bb.x;
  let  c2= aa.y - bb.y;
   return Math.sqrt(c1*c1 + c2*c2);
  }
  chuVi(){
    return this.chieuDai(this.a,this.b)+this.chieuDai(this.b,this.c)+this.chieuDai(this.a,this.c);
  }
}
let diema=new Diem(1,1);
let diemb=new Diem(0,1);
let diemc=new Diem(1,0);
let tg = new TamGiac(diema,diemb,diemc);
console.log(tg.chuVi());
