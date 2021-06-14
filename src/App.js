import './App.css';
import React,{useState} from 'react';
import axios from 'axios';

function App() {

  const [addQuote, setAddQuote] = useState("");

  const handleClick = async(e)=>{
    e.preventDefault();

    const url = "https://api.adviceslip.com/advice";
    const response = await axios.get(url);

    const addQuote = await response.data.slip.advice;
    setAddQuote(addQuote);
  }

  return (
    <div className="app">
      <h1>Random Quote</h1>
      <div className="quote_box" value={addQuote}>{addQuote}</div>
      <button onClick={handleClick}>Give me Quote</button>
    </div>
  );
}

export default App;
