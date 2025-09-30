import React from 'react';

type InputBoxProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function InputBox({ value, onChange }: InputBoxProps) {
    return (
        <div id="inputField">
            <input name="firstName" value={value} onChange={onChange} />
        </div>
    );
}

export default InputBox;