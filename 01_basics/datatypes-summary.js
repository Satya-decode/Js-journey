// Primitive

// 7 types: String,Number,Boolean, Null, undefined,Symbol, BigInt

const score = 125
const scoreValue  = 365.25

const isLoggedIn = false
const outsideTemp = null
let userName;

//console.log(id === anotherId);

const bigNumber = 2548636256974512653n

// Non Primitive

// Arrays, Objects, Functions

const SuperHeroes = ["Shredder", "Loki","Cobra"];

let myObj = {
    name: "himani",
    age:25,
}

const myFunction = function(){
    console.log("Hello Mickey");
    
}

//console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myClassName = "Kalua"
let anotherName = myClassName
anotherName = "S.K"

console.log(myClassName);
console.log(anotherName);

let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "kalue@google.com"


console.log(userOne);
console.log(userTwo);




