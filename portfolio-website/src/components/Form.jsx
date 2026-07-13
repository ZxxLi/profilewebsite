import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Form = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    
    const sendEmail = (e) => {
    e.preventDefault();
    
    /*Ensure that the following form keys are set up correctly*/

    emailjs
      .sendForm('servicekey', 'templatekey', form.current, {
        publicKey: 'publickey',
      })
      .then(
        () => {
          console.log('SUCCESS!');

          setFormData({
            name: '',
            email: '',
            message: ''
        });

        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input 
        type="text" 
        name="name" 
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}/>
      <label>Email</label>
      <input 
        type="email" 
        name="email"
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}/>
      <label>Message</label>
      <textarea 
        type="text"
        name="message"
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}/>
      <input type="submit" value="Send" />
    </form>
  );
};