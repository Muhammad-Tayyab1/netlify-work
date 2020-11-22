
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [value, setValue]= useState({});

  useEffect(() => {
    fetch( `/.netlify/functions/helloworld?name=from Serverless Function`)
    .then(res=> res.json())
    .then(obj=>setValue(obj))
    return () => {
    
    }
  }, [])
  return (
    <div className="App">
      <h1>{value.message}</h1>
    </div>
  );
}

export default App;
