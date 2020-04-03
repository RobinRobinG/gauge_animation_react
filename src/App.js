import React, { useState, useEffect } from 'react';
import Gauge from './Gauge';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setValue(Math.floor(Math.random() * 100));
    }, 2000);
  });
  return (
    <div className='App'>
      <h1>Robin's simple gauge</h1>
      <Gauge value={value} />
    </div>
  );
}

export default App;
