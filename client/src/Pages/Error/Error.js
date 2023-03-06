import React from 'react';

const Error = () => {
  return (
    <div>
      <h1>Erreur 404</h1>
      <img
        className="erreur"
        src="https://m.media-amazon.com/images/I/418Jmnejj8L._AC_.jpg"
        alt="oups"
      />
      <p className='err'>Uh Oh, something went wrong!</p>
    </div>
  );
};

export default Error;
