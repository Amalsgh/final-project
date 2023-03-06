import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import { Button } from 'react-bootstrap';

import './Admin.css';

const Admin = () => {
  const admin = useSelector((state) => state.adminReducer.admin);
  // const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  return (
    <div>
      
      <span className="siteTitle">
        Espace Administrateur<span></span>
      </span>
      <main>
        <div  className="carte">
          <div className="inner">
            <h2 className="title">Informations personnelles</h2>
            <time className="subtitle">{admin && admin.firstname}</time>
            <time className="subtitle">{admin && admin.secondname}</time>
            <time className="subtitle">{admin && admin.email}</time>
            <button> <BorderColorIcon/> Modifier les informations</button>
          </div>
          
        </div>
      </main>
      <div className='boutn'>
        <Button className='ajouter' variant="primary" type="submit" ><Link to='/users'>Tous les utilisateurs</Link></Button>
        <Button className='ajouter'><Link to='/add'>Ajouter un produit</Link></Button>
      </div>
      
    </div>
  );
};

export default Admin;
