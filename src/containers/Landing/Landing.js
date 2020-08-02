import React from 'react';
import Footer from '../../components/Footer/Footer';
import LandingButton from '../../components/LandingButton/LandingButton';
import LandingSteps from '../../components/LandingSteps/LandingSteps';
import './Landing.scss';
import BrandLogo from '../../images/logo-awesome-profile-cards.svg';
import CardSelectorList from '../../components/ThemeCards/CardSelectorList/CardSelectorList';

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'fool'
    }
  }

  render() {
    return (
      <div>
        <div className="page index1">
          <div className="page__box">
            <img src={BrandLogo} alt="Awesome Profile Cards Logo" className="page__box__logo" />
            <h1 className="page__box__title">Crea tu tarjeta de visita</h1>
            <p className="page__box__paragraph">Crea mejores contactos profesionales de forma fácil y cómoda</p>
            <LandingSteps />
            <LandingButton isLanding={this.props.isLanding}/>
            <CardSelectorList />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Landing;
