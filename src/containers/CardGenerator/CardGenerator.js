import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import Form from '../../components/Form/Form';
import Footer from '../../components/Footer/Footer';
import './CardGenerator.scss';

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
