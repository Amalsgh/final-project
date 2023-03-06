import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import pep1 from '../assets/pep 1.jpg';
import pep2 from '../assets/pep2.jpg';
import pep3 from '../assets/pep3.jpg';
import plants from '../assets/plants.jpg';
import Nouveauté from '../Components/Nouveauté';



const Home = () => {

  return (
    <div className="acceuil">
     
      {/* <Productlist products={products} inputSearch={inputSearch}/> */}

      <h1 id="titre">L'ART DE LA PEPINIERE</h1>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={pep1} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pep2} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={pep3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="container">
        <div className="card">
          <figure className="card__thumb">
            <img src={plants} alt="pic" className="card__image" />
            <figcaption className="card__caption">
              <h2 className="card__title">Plants Ornementaux</h2>
              <p className="card__snippet">lorem</p>
              <Link to="/plantsornements">
                <a href className="card__button">
                  Achetez Maintenant
                </a>
              </Link>
            </figcaption>
          </figure>
        </div>

        <div className="card">
          <figure className="card__thumb">
            <img src={plants} alt="pic" className="card__image" />
            <figcaption className="card__caption">
              <h2 className="card__title">Arbres d'intérieures</h2>
              <p className="card__snippet">lorem</p>
              <Link to="/interieurs">
                <a href className="card__button">
                  Achetez Maintenant
                </a>
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="card__thumb">
            <img src={plants} alt="pic" className="card__image" />
            <figcaption className="card__caption">
              <h2 className="card__title">Arbres fruitiers</h2>
              <p className="card__snippet">
                On Friday, 
              </p>
              <Link to="/arbres_fruitiers">
                <a href className="card__button">
                  Achetez Maintenant
                </a>
              </Link>
            </figcaption>
          </figure>
        </div>
        <div className="card">
          <figure className="card__thumb">
            <img src={plants} alt="pic" className="card__image" />
            <figcaption className="card__caption">
              <h2 className="card__title">Aménagement des jardins</h2>
              <p className="card__snippet">
                On Friday, 
              </p>
              <Link to="/aménagements">
                <a href className="card__button">
                  Achetez Maintenant
                </a>
              </Link>
            </figcaption>
          </figure>
        </div>
      </div>
      <Nouveauté />
    </div>
  );
};

export default Home;
