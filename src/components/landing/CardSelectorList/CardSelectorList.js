import React from 'react';
import CardSelector from '../CardSelector/CardSelector'
import './CardList.scss';

const CardSelectorList = props => {

    return(
        <div className={`CardList ${props.styleClass}`}>
            <CardSelector theme="moon" position="first"/>
            <CardSelector theme="joker" position="middle"/>
            <CardSelector theme="sun" position="third"/>
        </div>
    )
    }
export default CardSelectorList;