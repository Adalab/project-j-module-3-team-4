import React from 'react';

class LandingSteps extends React.Component {
  render() {
    return (
      <ul className="page__box__iconBox">
        <li className="page__box__iconBox__elem">
          <i className="far fa-object-ungroup"></i>
          Diseña
        </li>
        <li className="page__box__iconBox__elem">
          <i className="far fa-keyboard"></i>Rellena
        </li>
        <li className="page__box__iconBox__elem">
          <i className="fas fa-share-alt"></i>Comparte
        </li>
      </ul>
    );
  }
}

export default LandingSteps;
