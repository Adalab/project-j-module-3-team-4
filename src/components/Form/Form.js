import React from 'react';
import CollapsibleList from './Collapsible/CollapsibleList';
import './Form.scss';

class Form extends React.Component {
  render() {
    return (
      <form className="page__container__form js-form" action="#" method="GET">
        {/* CONTENEDOR 1 */}
        <CollapsibleList
          userDataInfo={this.props.userDataInfo}
          handleChangeInput={this.props.handleChangeInput}
          avatar={this.props.avatar}
          isAvatarDefault={this.props.isAvatarDefault}
          updateAvatar={this.props.updateAvatar}
          changeCollapsible={this.props.changeCollapsible}
          activeCollapsible={this.props.activeCollapsible}
          urls={this.props.urls}
          sendData={this.props.sendData}
          loading={this.props.loading}
        />
      </form>
    );
  }
}

export default Form;
