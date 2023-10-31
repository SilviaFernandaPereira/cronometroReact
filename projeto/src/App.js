import { useState } from 'react';
import './index.css'

function App() {

  const [miliseconds,setMiliseconds] = useState ('00');
  const [seconds,setseconds] = useState ('00');
  const [minutes,setminutes] = useState ('00');
  const [ligado,setLigado] = useState (false);

  if (ligado){
    setTimeout(() => {
      miliseconds();
    }, 1);
  }
  function miliseconds(){
    setMiliseconds(miliseconds + 1);
   
    if(miliseconds > 999){
      setMiliseconds(0);
      setseconds(seconds + 1);
    }
    if (seconds > 59){
      setseconds(0);
      setminutes(minutes + 1);
    }
  }
  function reset(){
    setseconds(0); 
    setMiliseconds(0);
    setminutes(0);
  }
  function pause(){
    if (ligado){
      setLigado(false)
    } 

    else if(!ligado) {
      if (milisecondseconds > 1){
        setLigado(true)
      }
    }
  }

  function stopWhatch (){
    
  }

  return (
    <div className='cronometro'>
      <div className="timer">
        <p>{`${minutes}:${seconds}:${milisecondseconds}`}</p>
      </div>
      <div className="control">
        <button onClick={() => setLigado(true)}>Start</button>
        <button onClick={pause}>Pause</button>
        <button onClick={() => {setLigado(false);setTimeout(() => {reset()}, 100)}}>Reset</button>
        <button onClick={stopWhatch}>StopWhatch</button>

      </div>
      
    </div>
  );
}

export default App;
