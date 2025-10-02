import React, { useState } from 'react'
import './newNote.css'
import InputBox from './input';

type NewNoteProps = {
  addNote: (title: string, description: string) => void;
};

export default function NewNote({ addNote }: NewNoteProps) {
    const [inputs, setInputs] = useState({ title: '', description: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const newInputs: { title: string; description: string } = { title: '', description: '' };
    for (const key in inputs) {
      newInputs[key as 'title' | 'description'] = inputs[key as 'title' | 'description'];
    }
    newInputs[name as 'title' | 'description'] = value;
    setInputs(newInputs);
    };

    const handleCreate = () => {
        addNote(inputs.title, inputs.description);
        setInputs({ title: '', description: '' });
    };

    return(
        <div id='newNote'>
            <InputBox name="title" value={inputs.title} onChange={handleChange} placeholder="Title" id="title"/>
            <InputBox name="description" value={inputs.description} onChange={handleChange} placeholder="Description" id="description"/>
            <button onClick={handleCreate}>Create</button>
        </div>
    );
}