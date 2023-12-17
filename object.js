// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const _user={
    name:"Rathin",
    email:"mondalaot@edu.in",
    location:"Kolkata",
   [mySym]: "mykey1",
   // mySym:"KKKK"
}

//access the velue
// console.log(_user.name);
// console.log(_user["name"]);
//console.log(_user[mySym]);
//console.log(typeof(mySym));
//console.log(_user);

//Object.freeze(_user)      //lock the obj no chnge be done now

// _user.gg=function(){
//     console.log("Hello  guyssss ");
// }
// console.log(_user.gg());
// console.log(`My boy, ${_user.name}`);

//==========================================//
// singleton
// Object.create
const user=new Object()
console.log(user);

const tinder={
    "a":1,"b":2         //key: value
}
// console.log(tinder);
// console.log(Object.keys(tinder));
// console.log(Object.values(tinder));

obj1={
    1:2,23:0

}
obj2={
    3:4,4:5
}
obj3={...obj1,...obj2}
console.log(obj3);