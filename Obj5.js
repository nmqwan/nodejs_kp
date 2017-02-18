function Person(name,age){
  this.name=name;
  this.age=age;
  this.agePlus= ()=>  this.age++;

  this.xinChao=()=>console.log(this.name + " "+ this.age);
}

let p1=new Person("QWAN",1);
// console.log(p1);
// p1.agePlus()
// console.log(p1);
// p1.xinChao();

class nguoi {
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }
  agePlus(){
    this.age++;
  }
  xinChao(){
    console.log("xinChao : "+this.name+" "+this.age);
  }

}
let ng=new nguoi("quan",100);
// TODO: THÊM THUỘC TÍNH MỚI
ng.salary=190;
ng.showSalary=function(){console.log("showSalary : "+this.salary)};
ng.showSalary();
// console.log(ng);
// ng.agePlus();
// ng.xinChao();

// TODO: THÊM 1 THUỘC TÍNH CHO CLASS
nguoi.prototype.showInfo = function () {
  console.log("showInfo : "+this.name + "  "+this.age);
};
ng.showInfo();

// TODO: ALIAS
let p3 = Object.assign({},ng);
console.log("alias : "+p3.name);
