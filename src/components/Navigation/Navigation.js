import React from 'react'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { RiAccountCircleLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../JS/Actions/AuthActions';

const Navigation = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const isAuth = useSelector((state)=> state.AuthReducer.isAuth)


  return (
    <div>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Contactify</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
          </Nav>

          {
            isAuth ? (
              <>
              <Button as={Link} to="/myContacts">My contacts</Button>
          <div style={{color: "white", margin: "0px 7px", cursor: "pointer"}} onClick={()=> navigate('/profile')}>
          <RiAccountCircleLine size={33.33} />
          </div>

          <Button onClick={()=> dispatch(logout(navigate))} variant="outline-danger">Logout</Button>
              </>
            )
            :
            <>
          <Button onClick={()=> navigate('/register')}>Register</Button>
          <Button onClick={()=> navigate('/login')} variant='outline-success'>Login</Button>
            </>
          }


        </Container>
      </Navbar>
    </div>
  )
}

export default Navigation