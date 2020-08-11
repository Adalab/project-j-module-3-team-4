import React from 'react';
import { Link } from 'react-router-dom';

class LandingButton extends React.Component {
  render() {
    return (
      <button title='Start' className='page__box__button'>
        comenzar
        <Link to='/card-generator' title='Go to Card Generator'></Link>
      </button>
    );
  }
}

export default LandingButton;
