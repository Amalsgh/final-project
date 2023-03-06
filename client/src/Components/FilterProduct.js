import React from 'react';
import { Button, Form } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

const FilterProduct = ({ inputSearch, setInputSearch, size}) => {
  const isAuth = useSelector((state) => state.userReducer.isAuth);

  return (
    <div className="bienvenue">
      <h1>Bienvenue dans notre monde...</h1>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Rechercher un produit"
          className="me-2"
          aria-label="Search"
          onChange={(e) => setInputSearch(e.target.value)}
        />
        <Button
          className="me-0"
          variant="outline-dark"
          
        >
          <SearchIcon className="me-1" />
        </Button>
      </Form>
      {isAuth ? (
      <div className='shop'>
      <Link to="/panier">
      {/* <i class="bi bi-basket3"></i>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-basket3" viewBox="0 0 16 16">
  <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM3.394 15l-1.48-6h-.97l1.525 6.426a.75.75 0 0 0 .729.574h9.606a.75.75 0 0 0 .73-.574L15.056 9h-.972l-1.479 6h-9.21z"/>
</svg> */}
<ShoppingBasketIcon className="bi-basket3"/>
<span>{size}</span>
      </Link>
      </div>): null}
    </div>
  );
};

export default FilterProduct;
