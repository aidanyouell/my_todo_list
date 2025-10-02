import React from 'react';
import './input.css';


type InputBoxProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    id?: string;
    name?: string;
};

function InputBox({ value, onChange, placeholder, id, name }: InputBoxProps) {
    return (
        <div id="inputField">
            <input name={name} value={value} onChange={onChange} placeholder={placeholder} id={id} />
        </div>
    );
}

export default InputBox;