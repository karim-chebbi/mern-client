import React, { useState } from 'react'
import {Container, Form, Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import { login } from '../../JS/Actions/AuthActions'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser({...user, [e.target.name] : e.target.value})
  }

      const handleLogin = () => {
          dispatch(login(user, navigate))
      }

  console.log(user)

  return (
    <div>
       <Container>
        <Form>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control name="email" onChange={(e)=> handleChange(e)}  type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control name="password" onChange={(e)=> handleChange(e)}  type="password" placeholder="Enter The password" />
      </Form.Group>

      <Button onClick={()=> handleLogin()} variant="primary">
        Submit
      </Button>
    </Form>
        </Container>
    </div>
  )
}

export default Login