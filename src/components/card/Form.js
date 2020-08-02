import React from 'react';
import Collapsible from './Collapsible';
import '../../stylesheets/Form.scss';
import Arrow from '../../images/noun_astrology.svg';
import Design from './Design';
// import Fillout from './Fillout';
import Share from './Share';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.data = {};
    this.handleChangeInputName = this.handleChangeInputName.bind(this);
  }

  handleChangeInputName(ev) {
    this.data.name = ev.currentTarget.value;
    console.log(this.data);
    this.props.updateUserData(this.data.name);
  }

  render() {
    return (
      <form className='page__container__form js-form' action='#' method='GET'>
        {/* CONTENEDOR 1 */}
        <Collapsible iconClass='far fa-object-ungroup' title='Diseña'>
          <Design />
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
              onChange={this.handleChangeInputName}
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
          <Share />
        </Collapsible>
      </form>
    );
  }
}

export default Form;
