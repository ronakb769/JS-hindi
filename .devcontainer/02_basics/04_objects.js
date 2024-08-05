//const tinderUser = new Object(); //singleton object

const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email : "ronakb769@gmail.com",
    fullname : {
        userfullname : {
            firstName : "Rounak",
            lastName : "Bajaj"
        }
    }
}

// console.log(regularUser);
//console.log(regularUser.fullname.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

//const obj4 = Object.assign({},obj1,obj2,obj3);

const obj4 = {...obj1, ...obj2, ...obj3}
//console.log(obj4);

const users = [
    {
        id: 1,
        email : "r@gmail.com"
    },
    {
        id: 2,
        email : "a@gmail.com"
    },
    {
        id: 3,
        email : "f@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLogged"));


const course = {
    courseName : "js_Hindi",
    price: 999,
    courseInstructor: "Rounak"
}

//course.courseInstructor

const {courseInstructor:instructor} = course;

console.log(instructor);

