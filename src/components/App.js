import React from 'react';
import '../stylesheets/App.css';
import Footer from './Footer';
import Landing from './landing/Landing';
import Header from './card/Header';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Landing />
      </div>
    );
  }
}

export default App;
