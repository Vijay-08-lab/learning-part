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

// Array //

// task is to get the last index of array value to be print
const myArray = [];
myArray[0] = 'Banana';
myArray[1] = 200;
myArray[2] = true;

console.log(myArray.length) // i print the total array length.
console.log(myArray[1]) // it print the value in the 200 which is stored in the index value of array 1
console.log(myArray[myArray.length -1]) // by subracting the length value with the one you can able to get the last because the array will always calculate the index value +1.
console.log(myArray)
 myArray.push('vijay') // adding an element in last by using push() method.
 console.log(myArray)
 myArray.pop() // now i removed the last element using pop method.
 console.log(myArray)
 myArray.unshift('age') // it adds a new element in first index of array
 console.log(myArray)
myArray.shift() // now i am deleteing the first element
console.log(myArray)
myArray.splice(1,1); // so using splice method i deleted the value 200. splice method ( starting index number,deleting count)
console.log(myArray)

let player = 'rock'
let computer = ''
const computerchoice = () => {
    let computerarr = ['rock','paper','sisscor']
    let comgen = Math.floor(Math.random() * 3)
    let matches =computerarr[comgen]
    return matches
}
console.log(computerchoice())

let player = 'rock'
let computerarr = ['rock','sisscor','paper']
const computerchoice = (computerarr) => {
   const computergen = Math.floor(Math.random()*3)
   return computerarr[computergen]
}
let computer =  computerchoice((computerarr))
// in this part i used ternary operator.
let result = player === 'rock' && computer === 'rock' ? `player : ${player} game tie  computer : ${computer}` :
player === 'rock' && computer === 'sisscor' ? `player : ${player} Player Wins!  computer : ${computer}` :
player === 'paper' && computer === 'rock' ? `player : ${player} Player Wins!  computer : ${computer}` :
player === 'sisscor' && computer === 'paper' ? `player : ${player} Player Wins!  computer : ${computer}` : `Computer Wins! computer : ${computer}`;

console.log(result);

// in this part i used if else if  for the core part
// if(player === 'rock' && computer === 'rock')
// {
//     console.log("match tie!")
// }
// else if( player === 'rock' && computer === 'sisscor')
// {
//     console.log('Player Win!')
// }
// else if(player === 'sisscor' && computer === 'paper')
// {
//     console.log("player win!")
// }
// else if(player === 'paper' && computer === 'rock')
// {
//     console.log("player win!")
// }
// else {
//     console.log("Computer wins")
// }

// Javascript objects by youtube balachandran //

const fruits = {
    name: 'banana',
    kg : 20,
    price : 120,
    varient : {
        bananaName1 : 'illakai',
        bananaName2 : 'rasthalli',
        bananaName3 : 'vazhaikai',
        action: function() {
            return "Hello world"
        }
    
      }
  };
console.log(`${fruits.varient.bananaName1} This is from normal console`)
console.log(`${fruits.varient.action()}`)

const fruitbasket = () => {
    const fruits = {
  name: 'banana',
  kg : 20,
  price : 120,
  varient : {
    bananaName4 : 'illakai',
    bananaName5 : 'rasthalli',
    bananaName6: 'vazhaikai',
    action: function() {
        return "Hello world"
    }

  }

};
return fruits
}
console.log(`${fruitbasket().name} This is from function`)
console.log(`${fruitbasket().varient.bananaName4} This is from function`)
console.log(fruitbasket().varient.action())
*/
const fruitbasketA = () => {
    const fruits = {
  name: 'banana',
  kg : 20,
  price : 120,
  varient : {
    bananaName4 : 'illakai',
    bananaName5 : 'rasthalli',
    bananaName6: 'vazhaikai',
    action: function() {
        return `i am calling the object inside ${this.bananaName4}`
    }

  }

};
return fruits
}
console.log(fruitbasketA().varient.action())

//  inheritance of object.
const basket = () => {
    return Object.create(fruitbasketA().varient) // here i inherit the object which is from the another function fruitbasketA from above.
}

const inherit = basket()
console.log(inherit.action()) // i succeed the mission by creating a vaiable and used it to call the function from the action: object.