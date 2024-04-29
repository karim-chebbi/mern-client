import React, { useEffect, useState } from 'react'
import { Button, Card, Form, Modal, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch, useNavigate } from 'react-router-dom'
import { deleteContact, editContact, getOneContact } from '../../JS/Actions/ContactActions'

const ContactDetails = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const contact = useSelector((state)=> state.contactReducer.oneContact)
    const load = useSelector((state)=> state.contactReducer.load)
    const match = useMatch('contactDetails/:id')

    const [newContact, setNewContact] = useState({})


    // delete modal
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // edit modal
    const [showEdit, setShowEdit] = useState(false);

    const handleCloseEdit = () => setShowEdit(false);
    const handleShowEdit = () => setShowEdit(true);
  
    useEffect(() => {
        dispatch(getOneContact(match.params.id))
      }, [dispatch, match.params.id])

      const handleChange = (e) => {
        setNewContact({...newContact, [e.target.name] : e.target.value})
      }

      const handleEdit = () => {
        dispatch(editContact(contact._id, newContact))
        handleCloseEdit()
        dispatch(getOneContact(contact._id))
        navigate(`/contactDetails/${contact._id}`)
      }
      
    console.log(load)
    console.log(contact)
  return (
    <div>
        {
            load ? <div style={{display: "flex", justifyContent: "center"}}><Spinner animation="border" variant="primary" /></div>
            :
            <div style={{display: "flex", justifyContent: "center"}}>
     <Card style={{ width: '18rem' }}>
      <Card.Img alt='test' variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
         {contact.email}
        </Card.Text>
        <Card.Text>
         {contact.phone}
        </Card.Text>
        <Button onClick={()=> navigate(-1)} variant="primary">Back</Button>
        <Button onClick={handleShowEdit} variant="secondary">Edit</Button>
        <Button onClick={handleShow} variant="danger">Delete</Button>
      </Card.Body>
    </Card>
            </div>
        }

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are sure you want to delete {contact.name}'s profile !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={()=> dispatch(deleteContact(contact._id)) && navigate(-1)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>


        {/* edit modal */}

        <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Edit contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are sure you want to edit {contact.name}'s profile !</Modal.Body>
        
        <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control name="name" onChange={(e)=> handleChange(e)} type="text" placeholder={contact.name} />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" onChange={(e)=> handleChange(e)}  type="email" placeholder={contact.email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPHone">
        <Form.Label>Phone</Form.Label>
        <Form.Control name="phone" onChange={(e)=> handleChange(e)}  type="number" placeholder={contact.phone} />
      </Form.Group>
        
        
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>
          <Button variant="info" onClick={()=> handleEdit()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ContactDetails