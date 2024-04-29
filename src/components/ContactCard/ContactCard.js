import React, { useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../../JS/Actions/ContactActions'
import { getOneUser } from '../../JS/Actions/UserActions'

const ContactCard = ({contact}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const load = useSelector((state)=> state.UserReducer.load)
  // const userName = useSelector((state)=> state.contactReducer.addedBy)


  
  return (
    <div>
    <Card style={{ width: '18rem' }}>
      <Card.Img alt='test' variant="top" src="https://static.vecteezy.com/system/resources/thumbnails/009/734/564/small/default-avatar-profile-icon-of-social-media-user-vector.jpg" />
      <Card.Body>
        <Card.Title>{contact.name}</Card.Title>
        <Card.Text>
         {contact.email}
        </Card.Text>
        <Card.Text> addedBy :
         {contact.addedBy}
        </Card.Text>

        <Card.Text> addedBy :
         {contact.userName}
        </Card.Text>
        <Button onClick={()=> navigate(`/contactDetails/${contact._id}`)} variant="primary">Profile</Button>

        <Button variant='danger' onClick={()=> dispatch(deleteContact(contact._id))}>Delete</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default ContactCard