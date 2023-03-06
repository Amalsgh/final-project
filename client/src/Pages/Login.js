import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link, useNavigate} from 'react-router-dom';
import { login } from '../JS/Actions/user';

const Login = () => {
  const [user, setUser] = useState({});
  const [admin, setAdmin] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
  const isAuth = useSelector((state)=> state.userReducer.isAuth)
  const isAuthAdmin = useSelector((state)=> state.userReducer.isAuthAdmin)


  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    setAdmin({ ...admin, [e.target.name]: e.target.value });
  };

  const handleUser = (e) => {
    e.preventDefault();
    dispatch(login(user));
    navigate('/');
  };

  return (
    <div className="login">
      <div className="bg-img">
        <form action="/action_page.php" className="contenu">
          <h1>Connexion</h1>
          {isAuth ? (
            navigate('/profile')
          ): isAuthAdmin ? (
            navigate ('/admin')
          ):(

     
          <div>
          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            onChange={handleChange}
          />
          <label htmlFor="psw">
            <b>Mot de passe</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChange}
          />
          
          <button type="submit" className="btn" onClick={handleUser}>
            <Link to='/profile'>Se connecter</Link>
            
          </button>
          

          <p className="compte">Vous n'avez pas encore un compte ?</p>
          <Link to="/register">S'inscrire</Link>
          </div>)}
        </form>
      </div> 
    </div>
    
  );
};

export default Login;
