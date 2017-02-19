class Person {
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }
  xinChao(){
    console.log(`Xin Chao ${this.name}  ${this.age}`);
  }
}

class nguoi extends Person {
  constructor(name,age,hobby){
    super(name,age);
    this.hobby=hobby;
  }
    agePlus(){
      this.age++;
    }
    xinChao(){
      console.log(`Hi ${this.name} ${this.age} ${this.hobby}`);
    }
}
let p1 = new nguoi("quan",1,"abc");
p1.agePlus();
p1.xinChao();
