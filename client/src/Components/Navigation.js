import React from 'react';
import './Style.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../JS/Actions/user';
import ForestIcon from '@mui/icons-material/Forest';
import { logout } from '../JS/Actions/user';

const Navigation = () => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  const dispatch = useDispatch();

  return (
    <div>
      <Navbar className="nav">
        <Container>
          <Link to="/" className="logo">
            <ForestIcon className="i" />
            Pépinière Yaakoub
          </Link>
        </Container>
        <Nav className="mx-auto">
          <Nav.Link className="a" href="/">
            Acceuil
          </Nav.Link>
        
          <Nav.Link className="a" href="/products">
            Produits
          </Nav.Link>
          <Nav.Link className="a" href="/services">
            Services
          </Nav.Link>
          <Nav.Link className="a" href="/contact">
            Contact
          </Nav.Link>
          {isAuth ? <Nav.Link href="/profile">Profil</Nav.Link> : null}

          {isAuthAdmin ? (
            <Nav.Link className="a" href="/admin">
              Admin
            </Nav.Link>
          ) : null}

          {/* { isAuth ? (
            <Nav.Link href='/'>
              <button onClick={()=> dispatch(logout())}>LOGOUT</button>
            <Nav.Link href='/profile'>Profile</Nav.Link>
            </Nav.Link>
          ):(
            <div>
            <Nav.Link href='/login'>Login</Nav.Link>
            <Nav.Link href='/register'>Register</Nav.Link>
            </div>
          )} */}
        </Nav>

        {isAuth  ? (
          <Link to="/">
            <button className="logout" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </Link>
        ) : (
          <div className="logout">
            <Link to="/login">
              <button>Connexion</button>
            </Link>
            <Link to="/register">
              <button>S'inscrire</button>
            </Link>
          </div>
        )}
      </Navbar>
    </div>
  );
};

export default Navigation;
