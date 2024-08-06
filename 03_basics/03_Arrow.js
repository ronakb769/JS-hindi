const user = {
     username : "Rounak",
     price : 999,

     welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
     }
   
}

// user.welcomeMessage();
// user.username = "Sam"
// user.welcomeMessage();

//console.log(this);

// function chai(){
//     let username = "Rounak";
//     console.log(this.username)
// }

// chai();

// const chai =  function(){
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}

//  chai()


//explicit retrun is necessary when use this bracket {}
// const addTwo = (num1, num2) => {
    //     return num1 + num2
    // }
    
    // not need to write return keyword implicit return 
    // const addTwo = (num1, num2) =>  num1 + num2
    
    // const addTwo = (num1, num2) => ( num1 + num2 )
    
    const addTwo = (num1, num2) => ({username: "hitesh"})
    
    
    console.log(addTwo(3, 4))
    

    // const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()