import React from 'react';

class LandingSteps extends React.Component {
  render() {
    return (
      <ul className='page__box__iconBox'>
        <li className='page__box__iconBox__elem'>
          <i className='far fa-object-ungroup'></i>
          <h4 className='elem-title'>Diseña</h4>
        </li>
        <li className='page__box__iconBox__elem'>
          <i className='far fa-keyboard'></i>
          <h4 className='elem-title'>Rellena</h4>
        </li>
        <li className='page__box__iconBox__elem'>
          <i className='fas fa-share-alt'></i>
          <h4 className='elem-title'>Comparte</h4>
        </li>
      </ul>
    );
  }
}

export default LandingSteps;
