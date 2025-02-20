import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './Header';
import Content from './Content';
import Duplingtext from './Duplingtext';
import Footer from './Footer';

function App() {
//   const mindchange = ()=>{
// const mood = ["sleep","sad","guilt","happy"]
//  const randomchange = Math.floor(Math.random()*mood.length)
//  return mood[randomchange] 
//   }
  return (
  <div>
    <Header />
    <Content />
    <Duplingtext />
    <Footer />
    {/* learn react
    <p>minset {mindchange()}</p> */}
    
  </div>
  );
}

export default App;
