import React,{useState} from 'react'
import {collection, addDoc } from "firebase/firestore"; 
import db from "../firebase";

const Contact = () => {
  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    addDoc(collection(db, "Contacts"), {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
        <h1>Contact Form</h1>
        <label>Name</label>
        <input type="text" value={name} placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
        <label>Email</label>
        <input type="text" value={email} placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
        <label>Message</label>
        <textarea placeholder='Message' value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Contact