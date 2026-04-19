//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "568bxs"
tinderUser.name = "Micky"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regularUser = {
    email: "somebody@gmail.com",
    fullname:{
        userfullname :{
            firstname:"Michael",
            lastname:"Phillips"
        }
    }
    }

    //console.log(regularUser.fullname.userfullname.firstname);

    const obj1 = {1: "a",2: "b"}
    const obj2 = {1: "c",4: "d"}

    //const obj3 = Object.assign({},obj1, obj2)

    const obj3 = {...obj1, ...obj2}
    //console.log(obj3);

    //console.log(tinderUser);

    //console.log(Object.keys(tinderUser));
    //console.log(Object.values(tinderUser));
    //console.log(Object.entries(tinderUser));

    const movie = {
        moviename:"Dhurandhar",
        collection: "1526",
        mainLead:"Hamza",
        negativeLead:"Rehman",
        releasedate:"April 2, 2026"
    }

    //movie.mainLead

    const {mainLead} = movie

    console.log(mainLead);
    
    
    
    
    
    

