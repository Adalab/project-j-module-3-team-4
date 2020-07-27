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
          <Design />
        </Collapsible>

        <Collapsible iconClass="far fa-keyboard" title="Rellena">
          <FillOut
            handleChangeInput={this.props.handleChangeInput}
            updateUserData={this.props.updateUserData}
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
