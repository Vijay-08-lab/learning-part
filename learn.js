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


const bike = {
    dealer : 'sri Ganesh',

    othersepc : function () {
       return {
        name : 'Yamaha',
            model : 'ybr',
        bikeyear : 2010,
    }
    }
};
console.log(bike.othersepc().model)
console.log(bike.othersepc().name)

// in this part i tried to inherit the otherspec form the bike and override the name part to yamaha to volvo.
const car = Object.create(bike);
car.dealer = 'sri lakshmi',
car.othersepc = function(){
    return {name: 'volvo'}
}
console.log(car.othersepc().name)

// for in loop //

const movie = {
    actor : 'vijay',
    production : 'Lyca',
    moviename : 'kathi',
    music : 'vijay antony'
}
movie.actress = "trisha"; // added new property in movie object
//delete movie.actor // deleted the object propery actor
console.log(movie.hasOwnProperty('actor')) // checking the deleted property in boolean method. result will be printed in boolean method.

// print all the object key and values using for in loop. by assigning collection has variable.
for (let collection in movie){
    console.log(`${collection} ${movie[collection]}`)
}

//destructuring the objects
const {actress : Myfavactress,moviename} = movie;
console.log(Myfavactress,moviename);

// function movieaward (music){ // here it takes full values of movie instead of music.
//     return music;
// }
// console.log(movieaward(movie))

function movieaward ({music}){ // when  we use a {} brackets for parameters it will take the value which we mentioned in the parameter instead of taking all the values.
    return music;
}
console.log(movieaward(movie))


// task is to find  even number form the array

const array = [1,2,3,4,5,6,7,8,9,10]

 const calculation = () => {
    for (let i = 0;i < array.length; i++)
        {
          if  (array[i] % 2 == 0)
          {
            console.log(array[i])
          }
    }
 }
 calculation() 

 const calculationodd = () => {
    for (let i = 0;i < array.length; i++)
        {
          if  (array[i] % 2 != 0)
          {
            console.log(array[i])
          }
    }
 }
 calculationodd();


// class

// what i have made is creating a class name called yamaha and it has two constructor properites and one function to print the output.
  class yamaha {
    constructor(model,engine){ // i am passing parameters for the property
        this.engine = engine;
        this.model = model;
        // this.gears = '4 gears';
        this.gears = [] // by creating a empty array will helps to store the different key values or element in the array 
    }
    //here i am going to use get and set method to chage the values fo the property
  get transmission(){
    return this.gears;
  }
  set transmission(speed){
    //this.gears =speed;
    this.gears.push(speed) // here i used push method() to store the key values.

  }
  bike(){
    return console.log(`yamaha ${this.engine} are so refined and this ${this.model} gives more mileage and it has ${this.gears}`) // by using 'this."property"' keyword i can able to called the properties from the class.
  }
}

const yamaha125 =  new yamaha('125cc','YBR') // here i create a new vaiable called yamaha125 and passed values to parameter.
yamaha125.bike(); // while calling the function it will give the output with the keyvalue which we assigned.
 const yamaha155 = new yamaha('155cc','R15')
 yamaha155.transmission = '6 gears';
 console.log(yamaha155.gears)
 yamaha155.bike();
 


class fruitbasket {
    constructor(price){
        this.fruit = 'apple';
        this.quantity = quantity;
        this.price = price;
    }
    get csvalue() {
        this.price = this.csvalue;
    }
    set csvalue(csbargain) {
        this.price = csbargain;    
    }
}

class market extends fruitbasket {
    constructor(quantity){
        super(quantity)
        this.location = 'vellore';
    }
    piceses (){
        console.log(`our ${this.location} has nice place by ${this.fruit}`)
    }
}

const customerchoice =  new  ('200')
customerchoice.piceses();  

class pizza {
  constructor(size = 'small', flavour = 'peporinen'){
      this.size = size;
      this.flavour = flavour;
  }
  get pizzasize (){
  
      return this.size
  }

set pizzasize (size){
this.size = size;   
}
  
}
const defaultpizza = new pizza()
console.log(`i love ${defaultpizza.size} size pizza ${defaultpizza.flavour} very much `)
const another = new pizza('medium','margarita')
console.log(`i love ${another.pizzasize} size pizza ${another.flavour} very much `)


class yamaha {
  constructor(industry,type)
  {
    this.industry = industry;
    this.type = type;
  }
  get classified ()
  {
    return this.industry;
  }
  set classified (cindustry)
  {
    this.industry = cindustry
  }
}
const mIndustry = new yamaha('motor','manufaturing')
console.log(`this is a ${mIndustry.industry} industry is one of the part in yamaha family`)
mIndustry.classified = 'sewing';
console.log(`this is a ${mIndustry.industry} is one of the part in yamaha family`)

class Spare extends yamaha {
  constructor(industry,spare,){
    super(industry,type)
    this.spare = 'motorcycle spare parts';
  }
}
console.log(`yamaha ${this.industry} ${this.spare} is the one of the main divsion`)


class Vehicles {
  constructor(transport)
  {
    this.transportvc = transport;
    this.passagervc = 'car';
  }
  get transporter ()
  {
    return this.transportvc;
  }
  set transporter (goodsvc)
  {
    this.transportvc = goodsvc;
  }  
}
class TwoWheeler extends Vehicles {
  constructor(transport){
    super(transport);
    this.vctype = '2wheeler';
  }
}

const icEngine = new TwoWheeler('TVS Excel')
console.log(`${icEngine.transportvc} ${icEngine.passagervc} is a ${icEngine.vctype} actual passager vechicle used for transporting goods also`)

// note in class if an object is named _underscore at first means that we need to know that. that the property value is private don't change the value. in ES2022 that private property encrpt problem is solved with intorducing # in the front of the property. this make the property to be private. value can't be change outside.
// class is the blue print of the object.


//JSON//
const myobj = {
  name : 'vijay',
  age : 29,
  educationqualification : 'B.com, MBA',
  location : 'chennai',
}

const sendJSON = JSON.stringify(myobj)
console.log(sendJSON)
const receiveJSON = JSON.parse(sendJSON)
console.log(receiveJSON)
*/
//Errors and handling
"use strict";
//  const car = "volvo";
// console.log(car);

// const makeerror = () => {
//   try{
//     // const name = 'vijay'
//     // name = 'ram'
//     // console.log(name)
// throw  new customerror('this a custom error');
//   }
//   catch(err)
//   {
//     //this are the type of errors//
//     // console.error(err);
//     // console.warn(err);
//     // console.table(err);
//     console.error(err.stack);
//   }
//   finally{
//     console.log("....finally");
//   }
// }
// makeerror();
// // custom error//
// const customerror = (message) =>
// {
//   this.message = message;
//   this.name = 'custom error';
//   this.stack = `${this.name}:${ this.message}`;

// }


// here i am going to use a while loop with the error handling.
const makeerror = () =>{ // here i declared a function makeerror
let i = 0; //declaring a value has 0 for while loop.
while (i<=5){
  try{
    if (i %2 !==0){
      throw new Error("odd number")
    }
    console.log('even number')
  }
  catch(err){
    console.error(err.message)
  }
  finally{
    console.log('....finally');
    i++;
  }
}
};
makeerror();