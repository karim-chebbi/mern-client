import React, { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { addContact } from '../../JS/Actions/ContactActions'
import {useNavigate} from 'react-router-dom'


const AddContact = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [newContact, setNewContact] = useState({})

  const handleChange = (e) => {
    setNewContact({...newContact, [e.target.name] : e.target.value})
  }

  const add = () => {

    dispatch(addContact(newContact, navigate)) 
 
  }
  
  return (
    <div>
        <h1>New Contact</h1>
        <Container>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" onChange={handleChange} type="text" placeholder="Enter the name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" onChange={handleChange}  type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPHone">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" onChange={handleChange}  type="number" placeholder="Enter The phone number" />
      </Form.Group>

      <Button onClick={()=> add()} variant="primary">
        Submit
      </Button>
    </Form>
        </Container>
    </div>
  )
}

export default AddContact