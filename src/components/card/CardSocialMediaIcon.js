import React from 'react';

class CardSocialMediaIcon extends React.Component{
    render(){
        return(
            <li className='cold-icon js-socialMedia-icons'>
            <a
              className={this.props.anchorClass}
              href={this.props.href}
              title={this.props.title}
              target='_blank'
            >
              <i className={this.props.iconClass}></i>
            </a>
          </li>
        )
    }
}


export default CardSocialMediaIcon;