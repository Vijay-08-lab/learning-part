const myObject = [{
    name:"Vijay",
    rank : 10,
    id: 001,
},]
const newobject = {
    name: "sandeep",
    rank: 5,
    id:004,
}
myObject.push(newobject)
console.log(myObject)
myObject.forEach((obj)=>{
    if(obj.name === "sandeep"){
        delete obj.rank
        
    }
    
})
console.log(myObject)

