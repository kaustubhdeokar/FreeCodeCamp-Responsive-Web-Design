let firstName = 'fname'
let lastName = 'lName'
let twitter = '/twitterhandle'

let person = { 
    firstName : firstName,
    lastName : lastName,
    twitter : twitter,
    insta : "/instahandle",

    email:function(){
        return firstName+"_"+lastName+"@company.com"
    }

}


console.log(person)
console.log(person.email())