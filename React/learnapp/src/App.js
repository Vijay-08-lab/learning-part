import logo from './logo.svg';
import './App.css';

function App() {
  const mindchange = ()=>{
const mood = ["sleep","sad","guilt","happy"]
 const randomchange = Math.floor(Math.random()*mood.length)
 return mood[randomchange] 
  }
  return (
  <div>
    learn react
    <p>minset {mindchange()}</p>
    
  </div>
  );
}

export default App;
