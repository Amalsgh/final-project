import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import localisation from './localisation.PNG';

import './Contact.css';

const Contact = () => {
  return (
    <div>
      <h1 id="titre">Pour plus d'informations :</h1>
      <section className="contact">
        <div className='infor'>
          <div className="localisation">
            <LocationOnIcon className="icone" />
            <p>
              Pépinière Yakoub, Route Menzel fersi km3, Moknine 5050 Moknine,
              5050, Tunisie
            </p>
          </div>

          <div className="localisation">
            <LocalPhoneIcon className="icone" />
            <p>Appelez-nous : 52.658.195</p>
          </div>

          <div className="localisation">
            <FacebookIcon className="icone" />
            <p>Visitez notre page facebook: Pépinière Yakoub</p>
          </div>

          <div className="localisation">
            <EmailIcon className="icone" />
            <p>Envoyez-nous un e-mail sur: pépinière@yahoo.com</p>
          </div>
        </div>
        <div className="cartes">
          <img src={localisation} alt="pic" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
