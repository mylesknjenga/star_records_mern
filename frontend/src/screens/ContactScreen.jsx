import React from 'react'
import ContactForm from '../components/ContactForm'
import { Container } from "react-bootstrap"
import { motion } from "framer-motion"

const ContactScreen = () => {
  return (
    <motion.div 
      initial={{opacity: 0 }} 
      animate={{opacity: 1, transition: {duration: 0.6}}} 
      exit={{ opacity: 0}}
    >
        <Container className='py-5'>
        <h1>Contact Us</h1>
        <ContactForm />
        </Container>  
    </motion.div>
  )
}

export default ContactScreen