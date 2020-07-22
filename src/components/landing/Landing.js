import React from 'react';
import Footer from '../Footer';
import '../../stylesheets/Landing.scss';
import BrandLogo from '../../images/logo-awesome-profile-cards.svg';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className='page index1'>
          <div className='page__box'>
            <img
              src={BrandLogo}
              alt='Awesome Profile Cards Logo'
              className='page__box__logo'
            />
            <h1 className='page__box__title'>Crea tu tarjeta de visita</h1>
            <p className='page__box__paragraph'>
              Crea mejores contactos profesionales de forma fácil y cómoda
            </p>
            <ul className='page__box__iconBox'>
              <li className='page__box__iconBox__elem'>
                <i className='far fa-object-ungroup'></i>
                Diseña
              </li>
              <li className='page__box__iconBox__elem'>
                <i className='far fa-keyboard'></i>Rellena
              </li>
              <li className='page__box__iconBox__elem'>
                <i className='fas fa-share-alt'></i>Comparte
              </li>
            </ul>
            <a href='./page2.html' title='Start' className='page__box__button'>
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
