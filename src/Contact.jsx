import React from 'react'
import { useContext } from 'react';
import { UserContext } from './App';

function Contact() {
    const {str} = useContext(UserContext);

  return (
    <div>Contact</div>
  )
}

export default Contact