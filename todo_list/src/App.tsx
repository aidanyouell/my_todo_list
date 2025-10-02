import React, { useState } from 'react'
import './App.css'
import InputBox from './input';
import HeaderBar from './header';
import NewNote from './newNote';
import CreatedNote from './createdNote';

export default function App() {
  const [notes, setNotes] = useState<Array<{title: string; description: string}>>([]);

  const addNote = (title: string, description: string) => {
    const newNotes = [];
    for (let i = 0; i < notes.length; i++) {
      newNotes.push(notes[i]);
    }
    newNotes.push({ title, description });
    setNotes(newNotes);
  };

  const deleteNote = (index: number) => {
    const newNotes = [];
    for (let i = 0; i < notes.length; i++) {
      if (i !== index) {
        newNotes.push(notes[i]);
      }
    }
    setNotes(newNotes);
  };

  return (
    <>
      <div id="headerDiv">
        <HeaderBar/>
      </div>
      <div id="newNoteDiv">
        <NewNote addNote={addNote} />
      </div>
      <div id="createdNotes">
        {notes.map((note, index) => (
          <CreatedNote
            key={index}
            title={note.title}
            description={note.description}
            onDelete={() => deleteNote(index)}
          />
        ))}
      </div>
    </>
  );
}
