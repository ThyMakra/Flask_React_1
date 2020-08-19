import React, {useState, useEffect} from 'react';


import logo from './logo.svg';
import './App.css';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    /* create a callback that will be invoked when the application renders to the page, 
    which is the time the Flask endpoint needs to be invoked. */
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <p>New components added: </p>
        <p>The current time is {currentTime}. </p>

      </header>
    </div>
  );
}

export default App;
