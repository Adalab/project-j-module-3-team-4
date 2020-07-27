import React from 'react';
import '../../stylesheets/Card.scss';
import Esperanza from '../../images/esperanza.jpg';
import CardSocialMediaIcon from './CardSocialMediaIcon';


class Card extends React.Component {
  render() {
    // Definir estilo inline para imagen de la card
    const defaultImage = {
      backgroundImage: `url(${Esperanza})`,
    };
    return (
      <section className='page__container__card'>
        <div className='page__container__card__reset'>
          <button
            type='reset'
            className='page__container__card__reset__btn js-reset-button'
          >
            <i className='far fa-trash-alt'></i> Reset
          </button>
        </div>
        <div className='page__container__card__box'>
          <div className='page__container__card__box__border cold-border js-border-color'>
            <h3 className='page__container__card__box__name js-name cold-name js-userName-result'>
              {this.props.name}
            </h3>
            <p className='page__container__card__box__job js-job cold-job js-userJob-result'>
              Front-end Developer
            </p>
          </div>
          <div
            className='profile__image js__profile-image profile page__container__card__box__imgContainer'
            style={defaultImage}
          ></div>
          <ul className='page__container__card__box__socialMedia js-socialMediaList'>
            <CardSocialMediaIcon  
              anchorClass="fas fa-mobile-alt" 
              iconClass='js-phone-result'  
              href="" 
              title="Contact by phone"/>
            <CardSocialMediaIcon  
              anchorClass="far fa-envelope" 
              iconClass='js-email-result'  
              href="" 
              title="Contact by email"/>
            <CardSocialMediaIcon  
              anchorClass="fab fa-linkedin-in" 
              iconClass='js-linkedin-result'  
              href="" 
              title="Go to Linkedin"/>
            <CardSocialMediaIcon  
              anchorClass="fab fa-github-alt" 
              iconClass='js-github-result'  
              href="" 
              title="Go to Github"/>
          </ul>
        </div>
      </section>
    );
  }
}

export default Card;
