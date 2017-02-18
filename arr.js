// TODO: -------------------------ARRAY----------------
let arr=[1,2,3,4,5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
arr.push("Hello");

// arr.pop(); lấy ra và xóa phần tử cuối
// arr.shift() lấy ra và xóa phần tử đầu
// arr.unshift("Hi"); thêm phần tử đầu

// TODO: xóa phần tử tại vị trí nhất định
// arr.sqlice(1,1); xóa phần từ tại vị trí và số lượng phần tử sau vị trí đó,(index,numItem)
// return arr mảng đã xóa

// TODO: for
// TODO: arr.forEach((element,index)=>{
// TODO:   console.log(element+" "+ index);
// TODO: });

// TODO: print arr
// console.log(arr.join("::"));

// TODO: thêm item tại vị trí

let  addToIndex=(arr,index,values)=>{
  let kq=[];
  for (let i = 0; i < arr.length; i++) {
    if (index!=i) {
        kq.push(arr[i]);
    }else{
      kq.push(arr[i]);
      kq.push(values);
    }
  }
  return kq;
}


console.log(addToIndex(arr,2,"quan").join("::"));
