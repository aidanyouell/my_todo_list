import React, { useState } from 'react'
import './App.css'
import InputBox from './input';

function App() {
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <>
        <h1>{name}</h1>
        <h3>Type below:</h3>
        <InputBox value={name} onChange={handleChange} />
    </>
  )
}

export default App;
