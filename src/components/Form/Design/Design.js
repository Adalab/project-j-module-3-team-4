import React from 'react';

const Design = (props) => {
  return (
    <div className='page__container__form__design js-design collapsible'>
      <h3>Colores</h3>
      <div className='page__container__form__design__colorPalette'>
        <label htmlFor='drawing'>
          <p className='element'>Agua</p>{' '}
          <input
            type='radio'
            id='drawing'
            name='palette'
            className='water-palette'
            value='1'
            defaultChecked
            onChange={props.handleChangeInput}
          />
          <div className='water'>
            <span className='square square1'></span>
            <span className='square square2'></span>
            <span className='square square3'></span>
          </div>
        </label>
        <label htmlFor='drawing2'>
          <p className='element'>Fuego</p>{' '}
          <input
            type='radio'
            id='drawing2'
            name='palette'
            value='2'
            className='fire-palette'
            onChange={props.handleChangeInput}
          />
          <div className='fire'>
            <span className='square square1'></span>
            <span className='square square2'></span>
            <span className='square square3'></span>
          </div>
        </label>
        <label htmlFor='drawing3'>
          <p className='element'>Tierra</p>{' '}
          <input
            type='radio'
            id='drawing3'
            name='palette'
            value='3'
            className='earth-palette'
            onChange={props.handleChangeInput}
          />
          <div className='earth'>
            <span className='square square1'></span>
            <span className='square square2'></span>
            <span className='square square3'></span>
          </div>
        </label>
        <label htmlFor='drawing4'>
          <p className='element'>Aire</p>{' '}
          <input
            type='radio'
            id='drawing4'
            name='palette'
            className='air-palette'
            onChange={props.handleChangeInput}
            value='4'
          />
          <div className='air'>
            <span className='square square1'></span>
            <span className='square square2'></span>
            <span className='square square3'></span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default Design;
