import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
// import CardList from "../ThemeCards/CardSelectorList/CardSelectorList";
import BrandLogo from "../../images/logo-awesome-profile-cards.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="page__header">
        <Link className="page__header__logo" to="/" title="Take me home">
          <img src={BrandLogo} alt="Awesome profile cards logo" />
        </Link>
        {/* <CardList styleClass="mini"/> */}
      </header>
    );
  }
}

export default Header;
