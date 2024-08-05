//singleton
//Object.create


//object literal

const mySym =  Symbol("Key1");


const jsUser = {
    name : "Rounak",
    [mySym]: "MyKey2",
    "full name" : "Rounak Bajaj",
    location : "Indore",
    age : 23,
    isLoggedIn: false,
    email : "ronakb769@gmail.com",
    lastLoggedIn:["monday","tuesday","sunday"]
}

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
//console.log(jsUser[mySym]);

jsUser.email = "ronakb769@info.com";

//Object.freeze(jsUser);
jsUser.email = "ronakb769@gmail.com"

//console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS User");
    
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User ${this.name}`);
    
}
// jsUser.greeting();
// jsUser.greetingTwo();

