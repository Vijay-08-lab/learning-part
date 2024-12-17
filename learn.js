/*
let name = "vijay";
let reverseletter = name.split('').reverse().join('')
console.log(reverseletter)
let fruits = ['apple','banana','grapes']
let choose = fruits[1]
let reversedfr = choose.split('').reverse().join('')
console.log(reversedfr)


let age = 19;
condition = age <18 ? 'you are kid': age < 20 ? 'you are adult':'you are major' 
console.log(condition)


// print a number in a string ?

let text = ''
 for (let i = 0; i < 5; i++ )
 {
     if ( i === 3)
     break
     text = text +i;
     
 }
 console.log(text)
 */
// task create a function and make the string value 'vijay' in properCase ?
let name = 'GOOGLE'; // first i am declearing a string value in a variable as name in uppercase.
function getInProperCase(name){ // next i am creating a function called getpropercase and assing a parameter inside the function
return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(); // first i use return method to retun the output to the function. and first i choose the value and use mehtod charAt() for selecting the particular letter to uppercase. and then i used slice method to select the remaining letters and make the remaining letter to lowercase i use toLowerCase() method in javascript.   
}
console.log(getInProperCase(name))

let ids = 'boorks'
const properCase = (ids) => { // so here is am using arrow fucntion you can use this function by calling a const variable properCase to use the function.
    return ids.charAt(0).toUpperCase() + ids.slice(1).toLowerCase()
}
console.log(properCase(ids))