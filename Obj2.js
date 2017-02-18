
function Diem(x,y) {
  this.x=x;
  this.y=y;
}
function DThang(a,b) {
  this.a=a;
  this.b=b;

  this.chieuDai=()=>{
     c1= this.a.x-this.b.x;
     c2= this.a.y - this.b.y;
    return Math.sqrt(c1*c1 + c2*c2);
  }

}

function TamGiac(a,b,c){
  this.a=a;
  this.b=b;
  this.c=c;
  this.chuVi=()=>{
       ab= new DThang(this.a,this.b);
       bc= new DThang(this.b,this.c);
       ac= new DThang(this.a,this.c);
      return ab.chieuDai()+bc.chieuDai()+ac.chieuDai();
  }
}

let diema=new Diem(1,1);
let diemb=new Diem(0,1);
let diemc=new Diem(1,0);
let dThang= new DThang(diema,diemb);
let TGiac= new TamGiac(diema,diemb,diemc);
console.log(TGiac.chuVi());
