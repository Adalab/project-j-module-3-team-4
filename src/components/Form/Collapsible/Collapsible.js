import React from "react";
import Arrow from "../../../images/noun_astrology.svg";

function Collapsible(props) {
  const handleCollapsibleClick = (ev) => {
    props.changeCollapsible(ev.currentTarget.id);
  };

  return (
    <div
      className={props.activeCollapsible === props.id ? "show" : "col-hidden"}
    >
      <div
        className="page__container__form__icon"
        onClick={handleCollapsibleClick}
        id={props.id}
      >
        <div className="page__container__form__icon__title">
          <i className={props.iconClass}></i>
          <h2>{props.title}</h2>
        </div>
        <button className="js-angleDown1 rot" type="button">
          <img src={Arrow} alt="arrow" />
        </button>
      </div>
      {props.children}
    </div>
  );
}

export default Collapsible;
