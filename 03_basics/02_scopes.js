//let c =  300
let a = 300
if(true)
{
    let a = 10;
    const b = 20;
    //console.log("INNER",a);
    
}


//console.log(a)
//console.log(b)
// console.log(c)


function one(){
    const username = "Rounak"

    function two(){
        const website = "youtube"
        console.log("username", username);
        
    }
    //console.log("website",website); ---Error due to scope
    two();
}

//one()

// if(true){
//     const username = "Rounak";
//     if(username === "Rounak")
//     {
//         const website = " youtube";
//         console.log(username + website);
//     }
//     //console.log(website);
// }

//console.log(username);




//+++++++++++++++++++++++++INTERESTING+++++++++++++++++++++

console.log(addOne(5));


function addOne(num){
return num+1;
}


console.log(addTwo(6));

const addTwo = function(num){
    return num+2;
}



