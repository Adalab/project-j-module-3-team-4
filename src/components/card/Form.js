import React from 'react';
import Collapsible from './Collapsible';
import '../../stylesheets/Form.scss';
import Arrow from '../../images/noun_astrology.svg';

class Form extends React.Component {
  render() {
    return (
      <form className='page__container__form js-form' action='#' method='GET'>
        {/* CONTENEDOR 1 */}
        <Collapsible iconClass='far fa-object-ungroup' title='Diseña'>
          <div className='page__container__form__design js-design'>
            <h3>Colores</h3>
            <div className='page__container__form__design__colorPalette'>
              <label htmlFor='drawing'>
                <p class='element'>Agua</p>{' '}
                <input
                  type='radio'
                  id='drawing'
                  name='drawing'
                  className='water-palette'
                  defaultChecked
                />
                <div className='water'>
                  <span className='square square1'></span>
                  <span className='square square2'></span>
                  <span className='square square3'></span>
                </div>
              </label>
              <label htmlFor='drawing2'>
                <p class='element'>Fuego</p>{' '}
                <input
                  type='radio'
                  id='drawing2'
                  name='drawing'
                  className='fire-palette'
                />
                <div className='fire'>
                  <span className='square square1'></span>
                  <span className='square square2'></span>
                  <span className='square square3'></span>
                </div>
              </label>
              <label htmlFor='drawing3'>
                <p class='element'>Tierra</p>{' '}
                <input
                  type='radio'
                  id='drawing3'
                  name='drawing'
                  className='earth-palette'
                />
                <div className='earth'>
                  <span className='square square1'></span>
                  <span className='square square2'></span>
                  <span className='square square3'></span>
                </div>
              </label>
              <label htmlFor='drawing4'>
                <p class='element'>Aire</p>{' '}
                <input
                  type='radio'
                  id='drawing4'
                  name='drawing'
                  className='air-palette'
                />
                <div className='air'>
                  <span className='square square1'></span>
                  <span className='square square2'></span>
                  <span className='square square3'></span>
                </div>
              </label>
            </div>
          </div>
        </Collapsible>

        <Collapsible iconClass='far fa-keyboard' title='Rellena'>
          <fieldset className='page__container__form__fill js-formData '>
            <label htmlFor='firstName'> Nombre completo </label>
            <input
              id='firstName'
              type='text'
              className='js-userName'
              placeholder='Ej: Sally Jill'
              required
            />

            <label htmlFor='work'> Puesto</label>
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

            <label htmlFor='email'> Email</label>
            <input
              id='email'
              type='email'
              className='js-email'
              placeholder='Ej: sally-hill@gmail.com'
              required
            />

            <label htmlFor='telephone'> Teléfono</label>
            <input
              id='telephone'
              type='tel'
              className='js-phoneNumber'
              placeholder='Ej: 555-55-55-55'
              required
            />

            <label htmlFor='linkedin'> Linkedin</label>
            <input
              id='linkedin'
              type='text'
              className='js-linkedin'
              placeholder='Ej: linkedin.com/in/sally.hill'
            />

            <label htmlFor='github'> Github</label>
            <input
              id='github'
              type='text'
              className='js-github'
              placeholder='Ej: @sally-hill'
            />
          </fieldset>
        </Collapsible>
        <Collapsible iconClass='fas fa-share-alt' title='Comparte'>
          <div className='page__container__form__share js-share '>
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
            <a
              className='js-url url'
              title='Ir a la tarjeta'
              target='_blank'
            ></a>
            <a
              className='twitter-share-button'
              href='https://twitter.com/intent/tweet?text=Hello%20world'
              data-size='large'
            >
              <i className='fab fa-twitter'></i>Compartir en twitter
            </a>
          </div>
        </Collapsible>
      </form>
    );
  }
}

export default Form;
