import React from 'react';

class FillOut extends React.Component {
  constructor(props) {
    super(props);
    this.handleChangeInput = this.handleChangeInput.bind(this);
  }
  data = {};
  handleChangeInput(ev) {
    const inputEl = ev.currentTarget.value;
    const inputId = ev.currentTarget.id;
    this.data[inputId] = inputEl;
    this.props.updateUserData(this.data);
  }

  render() {
    return (
      <fieldset className='page__container__form__fill js-formData '>
        <label htmlFor='firstName'> Nombre completo </label>
        <input
          id='firstName'
          type='text'
          className='js-userName'
          placeholder='Ej: Sally Jill'
          required
          onChange={this.handleChangeInput}
        />

        <label htmlFor='work'> Puesto</label>
        <input
          id='work'
          type='text'
          className='js-userJob'
          placeholder='Ej: Front-end unicorn'
          required
          onChange={this.handleChangeInput}
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
          onChange={this.handleChangeInput}
        />

        <label htmlFor='telephone'> Teléfono</label>
        <input
          id='telephone'
          type='tel'
          className='js-phoneNumber'
          placeholder='Ej: 555-55-55-55'
          required
          onChange={this.handleChangeInput}
        />

        <label htmlFor='linkedin'> Linkedin</label>
        <input
          id='linkedin'
          type='text'
          className='js-linkedin'
          placeholder='Ej: linkedin.com/in/sally.hill'
          onChange={this.handleChangeInput}
        />

        <label htmlFor='github'> Github</label>
        <input
          id='github'
          type='text'
          className='js-github'
          placeholder='Ej: @sally-hill'
          onChange={this.handleChangeInput}
        />
      </fieldset>
    );
  }
}
export default FillOut;
