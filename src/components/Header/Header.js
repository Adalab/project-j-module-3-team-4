import React from 'react';
import './Header.scss';
import CardList from '../ThemeCards/CardSelectorList/CardSelectorList'
import BrandLogo from '../../images/logo-awesome-profile-cards.svg';

class Header extends React.Component {
  render() {
    return (
      <header className='page__header'>
        <a
          className='page__header__logo'
          href='./index.html'
          title='Take me home'
        >
          <img src={BrandLogo} alt='Awesome profile cards logo' />
        </a>
        {/* <CardList styleClass="mini"/> */}
      </header>
    );
  }
}

export default Header;
