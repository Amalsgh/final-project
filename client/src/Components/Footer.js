import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer">
      <hr id="hr" />
      <section className='iconfooter'>
      <div className="fcb">
        <Link to="https://www.facebook.com/lapepiniere5050">
          <FacebookIcon />
        </Link>
      </div>
      <div className='insta'>
        <InstagramIcon />
      </div>
</section>
      <div className="copy">
        <p>copyrights © 2022 - All Rights Reserved.</p>
        <p>Powered by SGHAIER Amal.</p>
      </div>
    </div>
  );
};

export default Footer;
