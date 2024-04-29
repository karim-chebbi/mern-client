import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const user = useSelector((state)=> state.AuthReducer.user)
    const navigate = useNavigate()
  return (
    <div>
                <h1>My Profile</h1>
        <h3>Welcome back {user && user.name}</h3>
        <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
        <Card.Body>
          <Card.Title>Name: {user && user.name}</Card.Title>
          <Card.Text>Email: {user && user.email}</Card.Text>
          <Card.Text>Phone: {user && user.phone}</Card.Text>
          
          <Button variant="primary">Edit</Button>
          <Button variant="info" onClick={()=> navigate(-1)} >Back</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Profile