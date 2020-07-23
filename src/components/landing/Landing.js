import React from 'react';
import Footer from '../Footer';
import LandingButton from './LandingButton';
import LandingSteps from './LandingSteps';
import '../../stylesheets/Landing.scss';
import BrandLogo from '../../images/logo-awesome-profile-cards.svg';

class Landing extends React.Component {
  render() {
    return (
      <div>
        <div className="page index1">
          <div className="page__box">
            <img src={BrandLogo} alt="Awesome Profile Cards Logo" className="page__box__logo" />
            <h1 className="page__box__title">Crea tu tarjeta de visita</h1>
            <p className="page__box__paragraph">Crea mejores contactos profesionales de forma fácil y cómoda</p>
            <LandingSteps />
            <LandingButton />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
