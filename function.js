function Myname(){
    console.log("R");
    console.log("a");
    console.log("t");
    console.log("h");
    console.log("i");
    console.log("n");    
}
//Myname  //refernce
Myname()

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username){        //by defualt value==>>username="xyz" for escaping the undefind case
    if(!username){  //username===undefind
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

// function cartPrice(num1){
//     return num1
// }
// console.log(cartPrice(12));
function cartPrice(...num1){            //...=rest operator
    return num1
}

console.log(cartPrice(12,3,4,3,2));

function p(v1,v2,...num1){
    return num1     //see it
}
console.log(p(1,2,3,4,5));  //o/p=>3,4,5

//pass a object

// user={
//     name:"Rathin",
//     price:122
// }
function objectHandle(anyObj){
    console.log(`My user name is ${anyObj.name} and price iss ${anyObj.price}`)
}
// objectHandle(user)
objectHandle({name:"ss",price:133})