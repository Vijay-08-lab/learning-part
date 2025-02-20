import React from 'react'

const Content = () =>{
const mindchange = () => {
const mood = ['happy','sad','fraustrated','anger','gulit']
const randomchange = Math.floor(Math.random()*mood.length)
return mood[randomchange]
};
return (
    <p>I am in {mindchange()}</p>
)
}
export default Content;

