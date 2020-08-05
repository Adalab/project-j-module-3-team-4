import React from "react";
import Collapsible from "./Collapsible";
import Share from "../Share/Share";
import FillOut from "../FillOut/FillOut";
import Design from "../Design/Design";

function CollapsibleList(props) {
  return (
    <div>
      <Collapsible
        id="collapsible1"
        iconClass="far fa-object-ungroup"
        title="Diseña"
        changeCollapsible={props.changeCollapsible}
        activeCollapsible={props.activeCollapsible}
      >
        <Design handleChangeInput={props.handleChangeInput} />
      </Collapsible>

      <Collapsible
        id="collapsible2"
        iconClass="far fa-keyboard"
        title="Rellena"
        activeCollapsible={props.activeCollapsible}
        changeCollapsible={props.changeCollapsible}
      >
        <FillOut
          userDataInfo={props.userDataInfo}
          handleChangeInput={props.handleChangeInput}
          avatar={props.avatar}
          isAvatarDefault={props.isAvatarDefault}
          updateAvatar={props.updateAvatar}
        />
      </Collapsible>
      <Collapsible
        id="collapsible3"
        iconClass="fas fa-share-alt"
        title="Comparte"
        activeCollapsible={props.activeCollapsible}
        changeCollapsible={props.changeCollapsible}
      >
        <Share urls={props.urls} sendData={props.sendData}/>
      </Collapsible>
    </div>
  );
}

export default CollapsibleList;
