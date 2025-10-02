import React, { useState } from 'react'
import './App.css'
import InputBox from './input';
import HeaderBar from './header';
import NewNote from './newNote';

function App() {
  const [name, setName] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  return (
    <>
        <HeaderBar/>
        <h1>{name}</h1>
        <h3>Type below:</h3>
        <InputBox value={name} onChange={handleChange} />
        <NewNote/>
    </>
  )
}

export default App;
