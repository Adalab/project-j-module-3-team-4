import React from 'react';
import './CardSelector.scss';


const CardSelector = props => {

    return(
        <div className="CardSelector">
            <div className={`card-view__container ${props.theme} ${props.position}`}></div>
        </div>
    )
}

export default CardSelector;