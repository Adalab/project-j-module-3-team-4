import React from 'react';

class LandingButton extends React.Component {
  render() {

    return (
      <button 
        onClick={this.props.isLanding}
        title="Start" 
        className="page__box__button">
        comenzar
      </button>
    );
  }
}

export default LandingButton;
