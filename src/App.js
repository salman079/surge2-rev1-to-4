import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import './style.css';
import {Message} from './calculator.js';
// 

function App() {
  let [cal, setCal]= useState(0)
  // let [calcu, setCalcu]= useState(0)
  let [mood, setMood] = useState(true)
  return (
    <div className="App">
      <h1> <center>Revision of Class 1 to 4 </center></h1>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> testing </p>     
      </header>
      <center>
        <table className={`bgcol-good ${mood ? '' : 'bgcol-bad'}`}>
          <tr><th colspan="2"><h1>Counter Result {cal}</h1></th></tr>
          <tr><th colspan="2"><button onClick={()=>alert('testing alert')}> Alert !!!   </button></th></tr>
          <tr>
            <th className="alignment"><button onClick={()=>setCal(cal+1)}> Addition   </button></th>
            <td ><button onClick={()=>setCal(cal-1)}> Subtraction   </button></td>
          </tr>
          <tr><th colspan="2"><h1>Current Mood {mood ? 'Good' : 'Bad'}</h1></th></tr>
          <tr><th colspan="2"><button onClick={()=>setMood(!mood)}> Switching Mood   </button> <br /></th></tr>
        </table>
        <hr />
      </center>
      <Message valued={cal} />
     
    </div>
  );
}

export default App;
