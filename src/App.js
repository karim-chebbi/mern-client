import './App.css';
import Contacts from './pages/Contacts/Contacts';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Home from './pages/Home/Home';
import {Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation/Navigation';
import ContactDetails from './pages/ContactDetails/ContactDetails';
import AddContact from './pages/AddContact/AddContact';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Profile from './pages/Profile/Profile';
import { useDispatch, useSelector } from 'react-redux';
import { current } from './JS/Actions/AuthActions';
import { useEffect } from 'react';
import MyContacts from './pages/MyContacts/MyContacts';

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector((state)=> state.AuthReducer.isAuth)

  useEffect(() => {
    if (localStorage.getItem('token', {})){
      dispatch(current())
    }
  }, [dispatch])

  
  
  return (
    <div className="App">
      <Navigation />
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/contacts' element={ <Contacts /> } />
            <Route path='/contactDetails/:id' element={ <ContactDetails /> } />
            <Route path='/addContact' element={ <AddContact /> } />

            { !isAuth ? <Route path='/register' element={ <Register /> } /> : null}
            <Route path='/login' element={ <Login /> } />
            <Route path='/*' element={ <ErrorPage /> } />

            { isAuth? <Route path='/profile' element={ <Profile /> } /> : null}

            { isAuth? <Route path='/myContacts' element={ <MyContacts /> } /> : null}
          </Routes>
    </div>
  );
}

export default App;
