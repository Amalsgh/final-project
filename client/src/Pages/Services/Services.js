import React from 'react';
import './Services.css'
import amenag1 from './amenag1.jpg'
import amenag2 from './amenag2.jpg'
import amenag3 from './amenag3.jpg'
// import { Carousel } from 'react-bootstrap';

const Services = () => {
  return (
    <div>
      <h1 id="titre">Nos services</h1>
      <div className='services'>
      <p className='serv'>
        Grâce à une équipe hautement qualifiée , pépinière YAKOUB assure
        également à ses clients l'installation, l'aménagement et l'entretien des
        jardins et des espaces verts.
      </p>
      <img className='photo' src={amenag1} alt="pic"/>
      </div>
      <div className='service'>
      <div>
      <img className='photo' src={amenag2} alt='pic'/>
      <img className='photo' src={amenag3} alt='pic'/>
      
      </div>
       {/* <div className='service'>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={amenag1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={amenag2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={amenag3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      </div> */}
      </div> 
    </div>
  );
};

export default Services;
