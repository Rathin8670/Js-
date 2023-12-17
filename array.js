const arr=[2,23,4,4,22]
console.log(arr);

const a1=new Array(10,1,2,3,4)
//console.log(a1);

a1.push(9)
a1.shift()
console.log(a1);


//slice & splice 

const arr1=[1,2,3,4,5,6]
// console.log(arr.slice(1,3));
// console.log(arr);

// console.log(arr.splice(1,3));
// console.log(arr);
const arr2=[10,20,30,40]
const c=arr.concat(arr2)
console.log(c);

//using spread operator
const d=[...arr,...arr2]
//console.log(d);

let a=[1,2,3,[4,5,6,[10,20,40],50],55,66,77]
let a2=a.flat(Infinity)
//console.log(a1);

console.log(Array.isArray("Rathin"));       //check it if array or not
console.log(Array.from("Rathin"));    //make it array