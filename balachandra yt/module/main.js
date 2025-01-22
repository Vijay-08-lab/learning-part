
//  import myfun from "./working.js";
//  import { nextfun } from "./working.js";
import * as dh from "./working.js";
import { subscriber } from "./working.js";
 console.log(dh.default())
console.log(dh.nextfun())
const me = new subscriber("vijay")
console.log(me.email())
const anotheruser = new subscriber("Raghu")
console.log(anotheruser.email())
