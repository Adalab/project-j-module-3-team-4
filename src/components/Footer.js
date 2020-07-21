import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className='page__footer'>
        <div className='page__footer__box'>
          <p className='page__footer__box__paragraph'>
            Coders del Zodiaco @2020
          </p>
          <a
            href='https://adalab.es'
            title='Go to adalab.es'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src='../images/logo-adalab.png' alt='Adalab' />
          </a>
        </div>
      </footer>
    );
  }
}
export default Footer;
