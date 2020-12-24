import React from 'react';
import './input.style.css'

const Input = (props) => {
    return (
        <>
            <input placeholder={props.placeholder}/>
        </>
    );
};

export default Input;