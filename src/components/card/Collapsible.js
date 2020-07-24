import React from 'react';
import Arrow from '../../images/noun_astrology.svg';

class Collapsible extends React.Component{
    render(){
        return(
            <div>
                <div className="page__container__form__icon">
                    <div className="page__container__form__icon__title">
                        <i className={this.props.iconClass}></i>
                        <h2>{this.props.title}</h2>
                    </div>
                        <button className="js-angleDown1 rot" type="button">
                        <img src={Arrow} alt="arrow" />
                        </button>
                </div>
                {this.props.children}
           </div>
        )
    }
}




export default Collapsible;