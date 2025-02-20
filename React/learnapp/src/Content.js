import React from 'react'

const Content = () =>{
const mindchange = () => {
const mood = ['happy','sad','fraustrated','anger','gulit']
const randomchange = Math.floor(Math.random()*mood.length)
return mood[randomchange]
};
const handelClick = (name) => {
console.log(`thanks for clicking me! ${name}`)
}
return (
    <div>
    <p>I am in {mindchange()}</p>
    <button onClick={()=>{handelClick('vijay')}}>Click me!</button>
    </div>
)
}
export default Content;

