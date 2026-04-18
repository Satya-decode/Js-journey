//singleton
//object.create

//object literals

const mySym = Symbol("key1")


const JsUser = {
    name:"Marco",
    age: 24,
    [mySym]: "myKey1",
    location: "Lucknow",
    email:"marco123@gmail.com",
    isLoggedIn: false,
    lastloggedInDays:["Monday", "Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.mySym)
console.log( typeof JsUser.mySym)



