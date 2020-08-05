import React from "react";

const Share = (props) => {
  return (
    <div>
      <button 
        onClick={props.sendData}
        className="page__container__form__share js-share collapsible">
        <i className="far fa-address-card"></i>
        CREAR TARJETA
      </button>
      
 
      <div className={`create__text js-createText ${props.urls.cardUrl ? '' : 'hidden'}`}>
        <h4>La tarjeta ha sido creada:</h4>


        <a className="js-url url" 
        title="Ir a la tarjeta" 
        target="_blank"
        href={props.urls.cardUrl}>{props.urls.cardUrl}</a>
        
        
        <a
          className="twitter-share-button"
          href={props.urls.twitterUrl}
          data-size="large"
        >
          <i className="fab fa-twitter"></i>Compartir en twitter
        </a>
      </div>
    </div>
  );
};

export default Share;
