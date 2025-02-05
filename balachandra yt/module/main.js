
//  import myfun from "./working.js";
//  import { nextfun } from "./working.js";
import * as dh from "./working.js";
import { newObj } from "./working.js";
import { subscriber } from "./working.js";
 console.log(dh.default())
console.log(dh.nextfun())
const me = new subscriber("vijay")
console.log(me.email())
const anotheruser = new subscriber("Raghu")
console.log(anotheruser.email())

//forEach is a method which is used to get all the data from the Json file. for data from the working file to main. it act's like a loop.
// newObj.forEach((newObj)=>{
//     console.log(newObj)
// });
//console.clear()//
const filtterPost = newObj.filter((newObj) => {
return newObj.userId === 2;
})
console.log(filtterPost)

const mapsfilter = filtterPost.map((newObj)=>{
    return newObj.id;
})
console.log(mapsfilter)