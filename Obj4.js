let person={
  name:"quan",
  age:1,
  show:function(who){
    console.log(this.name +" "+ this.age+" "+ who)
  }
}

console.log(person);
person.show(person.name+" "+ person.age);
