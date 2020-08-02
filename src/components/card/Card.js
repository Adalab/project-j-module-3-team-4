import React from 'react';
<<<<<<< HEAD
import '../../stylesheets/Card.scss';
import Esperanza from '../../zodiaco/crop-3.jpeg';
import CardSocialMediaIcon from './CardSocialMediaIcon';
=======
import './Card.scss';
import Esperanza from '../../zodiaco/crop-3.jpeg';
import CardSocialMediaIcon from './CardSocialMediaIcon/CardSocialMediaIcon';
import Profile from '../Photo/Profile/Profile';
import Reset from './Reset/Reset';
>>>>>>> master

class Card extends React.Component {
  render() {
    // Definir estilo inline para imagen de la card
    const defaultImage = {
      backgroundImage: `url(${Esperanza})`,
    };
    return (
      <section className='page__container__card'>
        <Reset />
        <div className='page__container__card__box'>
          <div className='page__container__card__box__border cold-border js-border-color'>
            <h3 className='page__container__card__box__name js-name cold-name js-userName-result'>
<<<<<<< HEAD
              {this.props.name}
=======
              {this.props.userDataInfo.name || 'Nombre y Apellidos'}
>>>>>>> master
            </h3>
            <p className='page__container__card__box__job js-job cold-job js-userJob-result'>
              {this.props.userDataInfo.job || 'Front-end Developer'}
            </p>
          </div>
          <Profile avatar={this.props.avatar} />
          {/* <div
            className="profile__image js__profile-image profile page__container__card__box__imgContainer"
            style={defaultImage}
          ></div> */}
          <ul className='page__container__card__box__socialMedia js-socialMediaList'>
            <CardSocialMediaIcon
              anchorClass='fas fa-mobile-alt'
              iconClass='js-phone-result'
<<<<<<< HEAD
              href=''
=======
              href={`tel:${this.props.userDataInfo.phone}`}
>>>>>>> master
              title='Contact by phone'
            />
            <CardSocialMediaIcon
              anchorClass='far fa-envelope'
              iconClass='js-email-result'
<<<<<<< HEAD
              href=''
=======
              href={`mailto:${this.props.userDataInfo.email}`}
>>>>>>> master
              title='Contact by email'
            />
            <CardSocialMediaIcon
              anchorClass='fab fa-linkedin-in'
              iconClass='js-linkedin-result'
<<<<<<< HEAD
              href=''
=======
              href={`https://www.linkedin.com/in/${this.props.userDataInfo.linkedin}`}
>>>>>>> master
              title='Go to Linkedin'
            />
            <CardSocialMediaIcon
              anchorClass='fab fa-github-alt'
              iconClass='js-github-result'
<<<<<<< HEAD
              href=''
=======
              href={`https://github.com/${this.props.userDataInfo.github}`}
>>>>>>> master
              title='Go to Github'
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Card;
