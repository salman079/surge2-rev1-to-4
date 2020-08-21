import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';


function App() {
  let [cal, setCal]= useState(0)
  let [mood, setMood] = useState(true)
  return (
    <div className="App">
      <h1> <center>Revision of Class 1 to 4 </center></h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> testing </p>     
      </header>
      <body className={`bgcol-good ${mood ? '' : 'bgcol-bad'}`}>
        <h1>Counter Result {cal}</h1>
        <button onClick={()=>alert('testing alert')}> Alert !!!   </button> <br />
        <button onClick={()=>setCal(cal+1)}> Addition   </button> 
        <button onClick={()=>setCal(cal-1)}> Subtraction   </button> <br />
        <h1>Current Mood {mood ? 'Good' : 'Bad'}</h1><br />
        <button onClick={()=>setMood(!mood)}> Switching Mood   </button> <br />
      </body>
    </div>
  );
}

export default App;
