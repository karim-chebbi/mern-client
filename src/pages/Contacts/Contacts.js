import React from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ContactList from '../../components/ContactList/ContactList'

const Contacts = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div style={{display: "flex", justifyContent: "center"}}>
      <Button onClick={()=> navigate('/addContact')}>Add new Contact</Button>
      </div>
        <ContactList />
    </div>
  )
}

export default Contacts