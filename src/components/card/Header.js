import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header class='page__header'>
        <a class='page__header__logo' href='./index.html' title='Take me home'>
          <img
            src='./assets/images/logo-awesome-profile-cards.svg'
            alt='Awesome profile cards logo'
          />
        </a>
      </header>
    );
  }
}

export default Header;
