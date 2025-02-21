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
const handelClick2 = () => {
    console.log(`you have clicked DoubleClick`)
}
return (
    <div>
    <p onDoubleClick={handelClick2}>I am in {mindchange()}</p>
    <button onClick={()=>{handelClick('vijay')}}>Click me!</button>
    </div>
)
}
export default Content;

