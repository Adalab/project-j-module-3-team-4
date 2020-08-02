import React from 'react';
import './Reset.scss';

const Reset = () => {
  return (
    <div className='page__container__card__reset'>
      <button
        type='reset'
        className='page__container__card__reset__btn js-reset-button'
      >
        <i className='far fa-trash-alt'></i> Reset
      </button>
    </div>
  );
};

export default Reset;
