import React from 'react';
import CardSelector from '../CardSelector/CardSelector'
import './CardList.scss';

const CardSelectorList = props => {

    return(
        <div className={`CardList ${props.styleClass}`}>
            <CardSelector theme="moon" position="first" handleTheme={props.handleTheme}/>
            <CardSelector theme="joker" position="middle" handleTheme={props.handleTheme}/>
            <CardSelector theme="heart" position="third" handleTheme={props.handleTheme}/>
        </div>
    )
    }
export default CardSelectorList;