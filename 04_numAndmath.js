const num=400
console.log(num);

const a=new Number(400)
console.log(a);

console.log(a.toString());      //change into string
console.log(a.toFixed(2));

const x=100.8945
console.log(x.toPrecision(4));

const a1=1000000
console.log(a1.toLocaleString());

//=============MATH======================//
const a2=-4
console.log(Math.abs(a2));      //abs means -ve -->>+ve value
console.log(Math.round(89.98));
console.log(Math.ceil(89.2));
console.log(Math.floor(89.03));
console.log(Math.min(1,2,3,4));


console.log(Math.random());         //values are lie b/w 0-1
console.log((Math.random()*10) + 1);        //here 1-10
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)