import React from 'react'
import ContactForm from '../components/ContactForm'
import { Container } from "react-bootstrap"

function ContactScreen() {
  return (
    <>
        <Container className='py-5'>
        <h1>Contact Us</h1>
        <ContactForm />
        </Container>
        
    </>
  )
}

export default ContactScreen