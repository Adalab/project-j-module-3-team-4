import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import LandingButton from '../../components/LandingButton/LandingButton';
import LandingSteps from '../../components/LandingSteps/LandingSteps';
import './Landing.scss';
import BrandLogo from '../../images/logo-awesome-profile-cards.svg';
import CardSelectorList from '../../components/ThemeCards/CardSelectorList/CardSelectorList';

class Landing extends React.Component {
  render() {
    return (
      <div className={`${this.props.theme}-theme`}>
        <div className="page index1">
          <div className="page__box">
            <img
              src={BrandLogo}
              alt="Awesome Profile Cards Logo"
              className="page__box__logo"
            />
            <h1 className="page__box__title">Crea tu tarjeta de visita</h1>
            <p className="page__box__paragraph">
              Crea mejores contactos profesionales de forma fácil y cómoda
            </p>
            <LandingSteps />
            <Link to="/card-generator">
              <LandingButton />
            </Link>
            <CardSelectorList handleTheme={this.props.handleTheme} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
