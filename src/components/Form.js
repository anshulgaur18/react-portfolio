import React from 'react';
import "./form.css";

const Form = () => {
  return (
    <div className='form'>
        <label htmlFor="text">Your Name</label>
        <input type="text" />
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="text">Message</label>
        <textarea   rows="6" placeholder='type your message here'></textarea>
        <button className='btn'>Submit</button>
    </div>
  )
}

export default Form;