import React from "react";
import Collapsible from "./Collapsible/Collapsible";
import "./Form.scss";

import Design from "./Design/Design";
import Share from "./Share/Share";
import FillOut from "./FillOut/FillOut";

class Form extends React.Component {
  render() {
    return (
      <form className="page__container__form js-form" action="#" method="GET">
        {/* CONTENEDOR 1 */}
        <Collapsible iconClass="far fa-object-ungroup" title="Diseña">
          <Design handleChangeInput={this.props.handleChangeInput}/>
        </Collapsible>

        <Collapsible iconClass="far fa-keyboard" title="Rellena">
          <FillOut
            userDataInfo={this.props.userDataInfo}
            handleChangeInput={this.props.handleChangeInput}
            avatar={this.props.avatar}
            isAvatarDefault={this.props.isAvatarDefault} 
            updateAvatar={this.props.updateAvatar}
          />
        </Collapsible>
        <Collapsible iconClass="fas fa-share-alt" title="Comparte">
          <Share />
        </Collapsible>
      </form>
    );
  }
}

export default Form;
