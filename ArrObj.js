function Person(name,age,salary){
  this.name=name;
  this.age=age;
  this.salary=salary;
  this.agePlus= ()=>  this.age++;
  this.xinChao=()=>console.log("xinChao : "+this.name + " "+ this.age +"  "+this.salary);
}
let p1=new Person("4QWAN",1,110);
let p2=new Person("2Quan",10,100);
let p3=new Person("3QUAN",20,120);

let arr=[p1,p2,p3];
arr.forEach((e,i)=>{e.xinChao()})

// TODO: DUYỆT MẢNG V2 <TRẢ VỀ KẾT BOOLEAN NẾU THEO ĐIỀU KIỆN KHAI BÁO> .
// TODO: TẤT CẢ THỎA MẢNG ==> TRUE , ELSE ==>FLASE;
let bol80= arr.every((e,i)=>e.salary>100);
console.log("arr.every :"+bol80);

// TODO: DUYỆT MẢNG V2 <TRẢ VỀ KẾT BOOLEAN NẾU THEO ĐIỀU KIỆN KHAI BÁO> .
// TODO: MỘT PHẦN TỬ THỎA MẢNG ==> TRUE , ELSE ==> FALSE
let some100 = arr.some((e,i)=>e.salary>100);
console.log("arr.some : "+some100);

// TODO: SEARCH :find , findIndex  =>return first item
let find90= arr.find((e)=>e.salary==100);
let findIndex110= arr.findIndex((e)=>e.salary==110);
console.log("arr.find : "+JSON.stringify(find90));
console.log("arr.findIndex : "+JSON.stringify(findIndex110));

// TODO:  filter : TRẢ VỀ MẢNG THEO ĐK
let older11 = arr.filter((e,i)=>e.age>=10);
console.log("filter : "+  JSON.stringify(older11));

// TODO: sort :
let arrInt=[5,2,8,5,3,8];
console.log("sort : "+arrInt.sort());
console.log("sort OBJ :"+
  JSON.stringify(
    arr.sort((e1,e2)=>{
        // if (e1.salary>e2.salary) return 1;
        // if (e1.salary<e2.salary) return -1;
        // if (e1.salary==e2.salary) return 0;
        // TODO: HOẶC
      return  e1.salary-e2.salary;
    })
  )
);
// TODO: TẠO 1 MẢNG TỪ MẢNG SẲN CÓ VỚI XỬ LÝ PHẦN TỬ THEO DK
let map1 =arrInt.map((e,i)=>e*2);
console.log("arrInt.map"+JSON.stringify(map1));
