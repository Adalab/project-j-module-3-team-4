import React from "react";
import "./Card.scss";
import Esperanza from "../../zodiaco/crop-3.jpeg";
import CardSocialMediaIcon from "./CardSocialMediaIcon/CardSocialMediaIcon";
import Profile from "../Photo/Profile/Profile";
import Reset from "./Reset/Reset";

class Card extends React.Component {
  render() {
    // Definir estilo inline para imagen de la card
    const defaultImage = {
      backgroundImage: `url(${Esperanza})`,
    };
    return (
      <section className="page__container__card">
        <Reset handleReset={this.props.handleReset} />
        <div
          className={`page__container__card__box palette-${this.props.palette}`}
        >
          <div className="page__container__card__box__border cold-border js-border-color">
            <h3 className="page__container__card__box__name js-name cold-name js-userName-result">
              {this.props.userDataInfo.name || "Nombre y Apellidos"}
            </h3>
            <p className="page__container__card__box__job js-job cold-job js-userJob-result">
              {this.props.userDataInfo.job || "Front-end Developer"}
            </p>
          </div>
          <Profile avatar={this.props.avatar} />
          {/* <div
            className="profile__image js__profile-image profile page__container__card__box__imgContainer"
            style={defaultImage}
          ></div> */}
          <ul className="page__container__card__box__socialMedia js-socialMediaList">
            <CardSocialMediaIcon
              anchorClass="fas fa-mobile-alt"
              iconClass="js-phone-result"
              href={`tel:${this.props.userDataInfo.phone}`}
              title="Contact by phone"
            />
            <CardSocialMediaIcon
              anchorClass="far fa-envelope"
              iconClass="js-email-result"
              href={`mailto:${this.props.userDataInfo.email}`}
              title="Contact by email"
            />
            <CardSocialMediaIcon
              anchorClass="fab fa-linkedin-in"
              iconClass="js-linkedin-result"
              href={`https://www.linkedin.com/in/${this.props.userDataInfo.linkedin}`}
              title="Go to Linkedin"
            />
            <CardSocialMediaIcon
              anchorClass="fab fa-github-alt"
              iconClass="js-github-result"
              href={`https://github.com/${this.props.userDataInfo.github}`}
              title="Go to Github"
            />
          </ul>
        </div>
      </section>
    );
  }
}

export default Card;
