import React, { useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import ContactCard from '../../components/ContactCard/ContactCard'
import { getContacts } from '../../JS/Actions/ContactActions'

const MyContacts = () => {
    const dispatch = useDispatch()
    const user = useSelector((state)=> state.AuthReducer.user)
    const load = useSelector((state)=> state.contactReducer.load)
    const listContacts = useSelector((state)=> state.contactReducer.listContacts)
  
  
    useEffect(() => {
      dispatch(getContacts())
    }, [dispatch])
    
  return (
    <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", marginTop: "8%"}}>
    {
      load ? <div style={{display: "flex", justifyContent: "center"}}><Spinner animation="border" variant="primary" /></div>
      : listContacts
      .filter((el) => el.addedBy == user._id)
      .map((contact)=> 
      <ContactCard contact={contact} key={contact._id} />)
    }
  </div>
  )
}

export default MyContacts