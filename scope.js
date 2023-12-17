

if(true){
    let a=10
    const b=20
    var c=30        
}
//console.log(a);
//console.log(b);
console.log(c);     //but here we get 30 that's why we don't want to use var 


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}