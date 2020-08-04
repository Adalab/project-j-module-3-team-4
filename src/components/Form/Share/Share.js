import React from "react";

const Share = () => {
  return (
    <div>
      <button className="page__container__form__share js-share collapsible">
        <i className="far fa-address-card"></i>
        CREAR TARJETA
      </button>
      <div className="create__text js-createText hidden">
        <h4>La tarjeta ha sido creada:</h4>
        <a className="js-url url" title="Ir a la tarjeta" target="_blank"></a>
        <a
          className="twitter-share-button"
          href="https://twitter.com/intent/tweet?text=Hello%20world"
          data-size="large"
        >
          <i className="fab fa-twitter"></i>Compartir en twitter
        </a>
      </div>
    </div>
  );
};

export default Share;
