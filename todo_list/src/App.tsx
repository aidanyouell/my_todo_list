import React, { useState } from 'react'
import './App.css'
import InputBox from './input';
import HeaderBar from './header';
import NewNote from './newNote';
import CreatedNote from './createdNote';

function App() {

  return (
    <>
      <div id="headerDiv">
        <HeaderBar/>
      </div>
      <div id="newNoteDiv">
        <NewNote/>
      </div>
      <div id="createdNotes">
        <CreatedNote />
        <CreatedNote />
        <CreatedNote />
        <CreatedNote />
        <CreatedNote />
      </div>
    </>
  )
}

export default App;
