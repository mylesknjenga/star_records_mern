import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';



function ContactForm() {
    const SERVICE_ID = "service_pxwo10p"
    const TEMPLATE_ID = "template_gwk6y4l"
    const PUBLIC_KEY = "6TZYpOOqH6F35nxBV"

    const form = useRef();

    const sendMessage = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then(() => {
        swal("Sent!", "We will get back to you as soon as possible", "success");
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };
    

  return (
    <Form ref={form} onSubmit={sendMessage}>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="firstname">
                <Form.Label>First name</Form.Label>
                <Form.Control type="text" placeholder="Enter First name" name="firstname" required/>
            </Form.Group>

            <Form.Group as={Col} controlId="lastname">
                <Form.Label>Last name</Form.Label>
                <Form.Control type="text" placeholder="Enter Last name" name="lastname" required/>
                </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" required/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Enter message" name="message" required/>
        </Form.Group>
        <Button variant="primary" type="submit">
            Send
        </Button>
    </Form>
  )
}

export default ContactForm