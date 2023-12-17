"use strict";   //treat all js code as newer version

//alert(3+3)    //we are using nodejs not browser

//console.log(3+3);

let name="rathin"
let age=19
let loggedIn=true

//no -->2 to power 53
//bigint datatype

//string=""
//boolean=t/f
//null=standalone value 
//and also datatype in js
//symbol==>unique

//object

// console.log(typeof "rathin");
// console.log(typeof null);       //null is a object
// console.log(typeof undefined);

//type casting
let a="19ab"
console.log(typeof a);
//string to no
let b=Number(a)
console.log(typeof b);
console.log(b);

let x=12
//console.log(typeof a);
//no to string
let y=String(x)
console.log(typeof y);
console.log(y);


//---------OPERATIONS-----------------//
let p=9
let q=-p
console.log(q);

// console.log(2+2);
// console.log(2*2);
// console.log(2**2);  //power
// console.log(2/2);
// console.log(2%2);

let str1="heloo"
let str2=" India"
let str3=str1+str2;
// console.log(str3);

console.log(1+"2");
console.log("1"+2);
console.log(("1"+2+2));
console.log(1+2+"2");

//tricky conversion but nhi krnh chaihe..

// console.log(true);//true
// console.log(+true);//1
// console.log(+"");//0

// console.log("2">1);
// console.log("002">1);

// console.log(null>0);
// console.log(null==0);
// console.log(null>=0);


//===================================================//
//there are 2 types of data type in js----1.Primitve ,2.Non-primitive

/*Primitive Data Type (Call by Value) => 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt.

1) The data type of null is an object.
2) The data type of String is a string.
3) The data type of Boolean is Boolean.
4) The data type of Undefined is undefined.
5) The data type of Symbol is a symbol.
6) The data type of Number is number.
7) The data type of BigInt is BigInt.

And the Data Types of Non primitive data type is Function ,object.*/

const a1=Symbol('124')
const a2=Symbol('124')
console.log(a1===a2);