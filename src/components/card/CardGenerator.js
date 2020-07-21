import React from 'react';
import Header from './Header';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';

class CardGenerator extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div class='page__container'>
          <Card />
          <Form />
        </div>
        <Footer />
      </div>
    );
  }
}
export default CardGenerator;
