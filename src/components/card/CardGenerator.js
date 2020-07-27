import React from 'react';
import Header from './Header';
import Card from './Card';
import Form from './Form';
import Footer from '../Footer';
import '../../stylesheets/CardGenerator.scss';

// Componente de clase - stateful 
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


  // Función que actualiza el userData
  this.updateUserData = this.updateUserData.bind(this)
  }

  updateUserData (data){
    console.log('UpdateUserData: ' + data);
    this.setState({
      userData: {
        name: data
      }
    })

  }

  


  render() {
    return (
      <div>
        <Header />
        <div className='page__container'>
          <Card name={this.state.userData.name}/>
          <Form updateUserData={this.updateUserData}/>
        </div>
        <Footer />
      </div>
    );
  }
}
export default CardGenerator;
