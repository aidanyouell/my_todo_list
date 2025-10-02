import React, { useState } from 'react'
import './newNote.css'
import InputBox from './input';

export default function NewNote() {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
      }

      const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDesc(e.target.value);
      }

    return(
        <div id='newNote'>
            <InputBox value={title} onChange={handleChange} placeholder="Title" id="title"/>
            <InputBox value={desc} onChange={handleChange2} placeholder="Description" id="description"/>
            <button>Create</button>
        </div>
    );
}