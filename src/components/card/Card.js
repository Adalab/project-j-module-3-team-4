import React from 'react';

class Card extends React.Component {
  render() {
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
              Nombre Apellido
            </h3>
            <p className='page__container__card__box__job js-job cold-job js-userJob-result'>
              Front-end Developer
            </p>
          </div>
          <div
            className='profile__image js__profile-image profile page__container__card__box__imgContainer'
            style='background-image: url(./assets/images/esperanza.jpg);'
          ></div>
          <ul className='page__container__card__box__socialMedia js-socialMediaList'>
            <li className='cold-icon js-socialMedia-icons'>
              <a
                className='js-phone-result'
                href=''
                title='Contact by phone'
                target='_blank'
              >
                <i className='fas fa-mobile-alt'></i>
              </a>
            </li>
            <li className='js-socialMedia-icons cold-icon'>
              <a
                className='js-email-result'
                href=''
                title='Contact by email'
                target='_blank'
              >
                <i className='far fa-envelope'></i>
              </a>
            </li>
            <li className='js-socialMedia-icons cold-icon'>
              <a
                className='js-linkedin-result'
                href=''
                title='Go to Linkedin'
                target='_blank'
              >
                <i className='fab fa-linkedin-in'></i>
              </a>
            </li>
            <li className='js-socialMedia-icons cold-icon'>
              <a
                className='js-github-result'
                href=''
                title='Go to  Github'
                target='_blank'
              >
                <i className='fab fa-github-alt'></i>
              </a>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Card;
