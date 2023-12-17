let d=new Date()
console.log(d);
console.log(d.toString());

console.log(d.toDateString());
console.log(d.toLocaleDateString());
console.log(d.toJSON());
console.log(d.toUTCString());

let myD=new Date(2023,0,5)      //array hai isliye 0 se ho raha hai
console.log(myD.toLocaleDateString());

let d1=new Date("2023-09-25")
console.log(d1.toLocaleDateString());