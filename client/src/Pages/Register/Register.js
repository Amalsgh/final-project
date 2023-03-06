import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Register.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from '../../JS/Actions/user';


const Register = () => {
  const [newUser, setnewUser] = useState({});
  const dispatch = useDispatch();
  const isAuth = useSelector ((state) => state.userReducer.isAuth)
  const navigate = useNavigate()
  

  const handleChange = (e) => {
    setnewUser({ ...newUser, [e.target.name]: e.target.value });
  };
  const handleUser = (e) => {
    e.preventDefault();
    dispatch(register(newUser));
  };

  return (
    <div className="registeer">
      <h1 className="Inscription">CRÉER UN NOUVEAU COMPTE</h1>
      {isAuth? navigate ('/profile'): (

      

      <div className="cadre2">
        <div className="cadres">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Saisir votre nom"
                name="firstname"
                value={newUser.firstname}
                onChange={handleChange}
              />
              <Form.Label>Prénom</Form.Label>
              <Form.Control
                type="text"
                placeholder="Saisir votre Prénom"
                name="secondname"
                value={newUser.secondname}
                onChange={handleChange}
              />

              <Form.Label>Adresse Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Saisir votre adresse email"
                name="email"
                value={newUser.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Mot de passe</Form.Label>
              <Form.Control
                type="password"
                placeholder="Saisir votre mo de passe"
                name="password"
                value={newUser.password}
                onChange={handleChange}
              />
              <Form.Label>Téléphone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Saisir votre numéro de téléphone"
                name="phone"
                value={newUser.phone}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              className="bouton"
              variant="primary"
              type="submit"
              onClick={handleUser}
            >
              
              <Link to="/profile">S'inscrire</Link>
            </Button>
          </Form>
        </div>
      </div>
      )}
    </div>
  );
};

export default Register;
