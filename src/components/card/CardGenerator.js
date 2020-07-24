import React from 'react';
import Header from './Header';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
import '../../stylesheets/CardGenerator.scss';

class CardGenerator extends React.Component {
constructor (props){
  super(props);
  this.state = {
    userData: {
      palette: 1,
      name: '',
      job: '',
      email: '',
      phone: 0,
      linkedin: '',
      github: '',
      photo: '',
  }
 } 
}

  render() {
    return (
      <div>
        <Header />
        <div className='page__container'>
          <Card />
          <Form />
        </div>
        <Footer />
      </div>
    );
  }
}
export default CardGenerator;
