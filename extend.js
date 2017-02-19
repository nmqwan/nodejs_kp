class Person {
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }
  xinChao(){
    console.log(`Xin Chao ${this.name}`);
  }
}

class nguoi extends Person {

}
let p1 = new nguoi("quan",1);
p1.xinChao();
