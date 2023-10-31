import { useState } from 'react';
import './index.css'

function App() {

  const [miliseconds,setmiliseconds] = useState ('00');
  const [seconds,setseconds] = useState ('00');
  const [minutes,setminutes] = useState ('00');
  // const [ligado,setLigado] = useState (false);


  return (
    <div className='cronometro'>
      <div className="timer">
        <p>{`${minutes}:${seconds}:${miliseconds}`}</p>
      </div>
      <div className="control">
        <button onClick>Start</button>
        <button onClick>Pause</button>
        <button onClick>Reset</button>
        <button onClick>StopWhatch</button>
      </div>
    </div>
  );
}

export default App;
  