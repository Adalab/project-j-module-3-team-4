import React from 'react';
import GetAvatar from '../../Photo/GetAvatar/GetAvatar';

class FillOut extends React.Component {

  render() {
    return (
      <fieldset className="page__container__form__fill js-formData ">
        <label htmlFor="name"> Nombre completo </label>
        <input
          id="name"//firstName
          name="name"
          type="text"
          className="js-userName"
          placeholder="Ej: Sally Jill"
          required
          onChange={this.props.handleChangeInput}
          value={this.props.userDataInfo.name}
        />

        <label htmlFor="job"> Puesto</label>
        <input
          id="job"
          name="job"
          type="text"
          className="js-userJob"
          placeholder="Ej: Front-end unicorn"
          required
          onChange={this.props.handleChangeInput}
          value={this.props.userDataInfo.job}
        />

        <GetAvatar
          avatar={this.props.avatar}
          isAvatarDefault={this.props.isAvatarDefault} 
          updateAvatar={this.props.updateAvatar}/>
            

            
        {/* <p>Imagen de perfil</p>
        <div className='container-preview'>
          <div className='action'>
            <button
              className='action__upload-btn js__profile-trigger'
              type='button'
            >
              Añadir imagen
            </button>
            <input
              type="file"
              id="img-selector" 
              ref={this.props.fileInput}
              className="action__hiddenField js__profile-upload-btn"
            />
          </div>
          <div className='profile__preview js__profile-preview'></div>
        </div> */}

        <label htmlFor='email'> Email</label>
        <input
          id='email'
          name='email'
          type='email'
          className='js-email'
          placeholder='Ej: sally-hill@gmail.com'
          required
          onChange={this.props.handleChangeInput}
          value={this.props.userDataInfo.email}
        />

        <label htmlFor="phone"> Teléfono</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="js-phoneNumber"
          placeholder="Ej: 555-55-55-55"
          required
          onChange={this.props.handleChangeInput}
          value={this.props.userDataInfo.phone}
        />

        <label htmlFor='linkedin'> Linkedin</label>
        <input
          id="linkedin"
          name="linkedin"
          type="text"
          className="js-linkedin"
          placeholder="Ej: linkedin.com/in/sally.hill"
          onChange={this.props.handleChangeInput}
          value={this.props.userDataInfo.linkedin}
        />

        <label htmlFor='github'> Github</label>
        <input
          id="github"
          name="github"
          type="text"
          className="js-github"
          placeholder="Ej: @sally-hill"
          onChange={this.props.handleChangeInput}
          value={this.props.userDataInfo.github}
        />
      </fieldset>
    );
  }
}
export default FillOut;
