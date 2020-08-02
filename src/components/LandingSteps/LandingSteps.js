import React from 'react';

class LandingSteps extends React.Component {
  render() {
    return (
      <ul className='page__box__iconBox'>
        <li className='page__box__iconBox__elem'>
          <i className='far fa-object-ungroup'></i>
          <p className='title-steps'>Diseña</p>
        </li>
        <li className='page__box__iconBox__elem'>
          <i className='far fa-keyboard'></i>
          <p className='title-steps'>Rellena</p>
        </li>
        <li className='page__box__iconBox__elem'>
          <i className='fas fa-share-alt'></i>
          <p className='title-steps'>Comparte</p>
        </li>
      </ul>
    );
  }
}

export default LandingSteps;
