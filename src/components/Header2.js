import React from 'react';
import "./header2.css";

const Header2 = ({heading,text}) => {
  return (
    <div className='header2'>
        <div className="heading">
            <h1>{heading}</h1>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Header2