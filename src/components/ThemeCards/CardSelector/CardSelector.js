import React from 'react';
import './CardSelector.scss';

const CardSelector = (props) => {
  const handleClick = () => {
    props.handleTheme(props.theme);
  };
  return (
    <div onClick={handleClick} className="CardSelector">
      <div
        className={`card-view__container ${props.theme} ${props.position}`}
      ></div>
    </div>
  );
};

export default CardSelector;
