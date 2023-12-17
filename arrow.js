const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

function f1(){
    let username="Rathin"
    console.log(this.username);
}
//f1()

// function chai(){
    //     let username = "hitesh"
    //     console.log(this.username);
    // }
    
    // chai()
    
    // const chai = function () {
    //     let username = "hitesh"
    //     console.log(this.username);
    // }
    
    // const chai =  () => {
    //     let username = "hitesh"
    //     console.log(this);
    // }
    // chai()
    
    //arrow function..............................//
    // ()=>{

    // }

    //u can hold the function in a variable
    //explicit return type
    // const a=(num1,num2)=>{
    //     return num1+num2
    // }

    //inplicit return type
   // const a=(num1,num2)=> (num1+num2)       //if we write in parenthesis then return statment is not required

   // console.log(a(1,2));
   
    //return a object
    const a=()=> ({username:"rathin"})
    console.log(a());
