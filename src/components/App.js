import React from 'react';
import '../stylesheets/App.scss';
import Footer from './Footer';
import Landing from './landing/Landing';
import CardGenerator from './card/CardGenerator';
import Header from './card/Header';

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
    console.log(this.state.isLanding);
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
