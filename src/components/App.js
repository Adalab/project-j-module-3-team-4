import React from 'react';
import '../stylesheets/App.scss';
import Footer from './Footer';
import Landing from './landing/Landing';
import CardGenerator from './card/CardGenerator';
import Header from './card/Header';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Landing />
        {/* <CardGenerator /> */}
      </div>
    );
  }
}

export default App;
