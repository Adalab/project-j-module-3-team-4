import React from 'react';
import Footer from '../Footer';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div class='page index1'>
          <div class='page__box'>
            <img
              src='./images/logo-awesome-profile-cards.svg'
              alt='Awesome Profile Cards Logo'
              class='page__box__logo'
            />
            <h1 class='page__box__title'>Crea tu tarjeta de visita</h1>
            <p class='page__box__paragraph'>
              Crea mejores contactos profesionales de forma fácil y cómoda
            </p>
            <ul class='page__box__iconBox'>
              <li class='page__box__iconBox__elem'>
                <i class='far fa-object-ungroup'></i>
                Diseña
              </li>
              <li class='page__box__iconBox__elem'>
                <i class='far fa-keyboard'></i>Rellena
              </li>
              <li class='page__box__iconBox__elem'>
                <i class='fas fa-share-alt'></i>Comparte
              </li>
            </ul>
            <a href='./page2.html' title='Start' class='page__box__button'>
              comenzar
            </a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
