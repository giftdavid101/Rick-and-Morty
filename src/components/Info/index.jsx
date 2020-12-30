import React from 'react';
import './info.style.css'


const Info = ({children, status,gender}) => {
    return (
        <div className={'info'}>
            <div>{children}</div>
            <span>{status}</span>
            <span>{gender}</span>
        </div>
    );
};

export default Info;