import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form className='page__container__form js-form' action='#' method='GET'>
        <div className='page__container__form__icon'>
          <div className='page__container__form__icon__title'>
            <i className='far fa-object-ungroup'></i>
            <h2>Diseña</h2>
          </div>
          <button className='js-angleDown1 rot' type='button'>
            <img src='./assets/images/noun_astrology.svg' />
          </button>
        </div>
        <div className='page__container__form__design js-design'>
          <h3>Colores</h3>
          <div className='page__container__form__design__colorPalette'>
            <label for='drawing'>
              <input
                type='radio'
                id='drawing'
                name='drawing'
                className='cold-palette'
                checked
              />
              <div className='cold'>
                <span className='square square1'></span>
                <span className='square square2'></span>
                <span className='square square3'></span>
              </div>
            </label>
            <label for='drawing2'>
              <input
                type='radio'
                id='drawing2'
                name='drawing'
                className='hot-palette'
              />
              <div className='hot'>
                <span className='square square1'></span>
                <span className='square square2'></span>
                <span className='square square3'></span>
              </div>
            </label>
            <label for='drawing3'>
              <input
                type='radio'
                id='drawing3'
                name='drawing'
                className='mix-palette'
              />
              <div className='mix'>
                <span className='square square1'></span>
                <span className='square square2'></span>
                <span className='square square3'></span>
              </div>
            </label>
          </div>
        </div>

        <div className='page__container__form__icon'>
          <div className='page__container__form__icon__title'>
            <i className='far fa-keyboard'></i>
            <h2>Rellena</h2>
          </div>
          <button className='js-angleDown2' type='button'>
            <img src='./assets/images/noun_astrology.svg' />
          </button>
        </div>
        <fieldset className='page__container__form__fill js-formData hidden'>
          <label for='firstName'> Nombre completo </label>
          <input
            id='firstName'
            type='text'
            className='js-userName'
            placeholder='Ej: Sally Jill'
            required
          />

          <label for='work'> Puesto</label>
          <input
            id='work'
            type='text'
            className='js-userJob'
            placeholder='Ej: Front-end unicorn'
            required
          />

          <p>Imagen de perfil</p>
          <div className='container-preview'>
            <div className='action'>
              <button
                className='action__upload-btn js__profile-trigger'
                type='button'
              >
                Añadir imagen
              </button>
              <input
                type='file'
                id='img-selector'
                className='action__hiddenField js__profile-upload-btn'
              />
            </div>
            <div className='profile__preview js__profile-preview'></div>
          </div>

          <label for='email'> Email</label>
          <input
            id='email'
            type='email'
            className='js-email'
            placeholder='Ej: sally-hill@gmail.com'
            required
          />

          <label for='telephone'> Teléfono</label>
          <input
            id='telephone'
            type='tel'
            className='js-phoneNumber'
            placeholder='Ej: 555-55-55-55'
            required
          />

          <label for='linkedin'> Linkedin</label>
          <input
            id='linkedin'
            type='text'
            className='js-linkedin'
            placeholder='Ej: linkedin.com/in/sally.hill'
          />

          <label for='github'> Github</label>
          <input
            id='github'
            type='text'
            className='js-github'
            placeholder='Ej: @sally-hill'
          />
        </fieldset>

        <div className='page__container__form__icon'>
          <div className='page__container__form__icon__title'>
            <i className='fas fa-share-alt'></i>
            <h2>Comparte</h2>
          </div>
          <button className='js-angleDown3' type='button'>
            <img src='./assets/images/noun_astrology.svg' />
          </button>
        </div>
        <div className='page__container__form__share js-share hidden'>
          <i className='far fa-address-card'></i>
          <input
            className='create'
            type='submit'
            value='crear tarjeta'
            disabled
          />
        </div>
        <div className='create__text js-createText hidden'>
          <h4>La tarjeta ha sido creada:</h4>
          <a className='js-url url' title='Ir a la tarjeta' target='_blank'></a>
          <a
            className='twitter-share-button'
            href='https://twitter.com/intent/tweet?text=Hello%20world'
            data-size='large'
          >
            <i className='fab fa-twitter'></i>Compartir en twitter
          </a>
        </div>
      </form>
    );
  }
}

export default Form;
