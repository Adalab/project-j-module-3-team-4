import React from 'react';
import './App.scss';
import Footer from '../components/Footer/Footer';
import Landing from './Landing/Landing';
import CardGenerator from './CardGenerator/CardGenerator';
import Header from '../components/Header/Header';

class App extends React.Component {
  state = {
    isLanding: true
  }

  changePage = () => {
    this.setState({
      isLanding: !this.state.isLanding
    })
  }

  render() {

    let result = <CardGenerator />;

    if (this.state.isLanding) {
      result = <Landing isLanding={this.changePage}/>
    } 

    return (
      <div className="App">
        {result}
      </div>
    );
  }
}

export default App;
