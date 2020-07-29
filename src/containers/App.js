import React from 'react';

import './App.scss';

import Landing from './Landing/Landing';
import CardGenerator from './CardGenerator/CardGenerator';

class App extends React.Component {
  state = {
    isLanding: true,
  };

  changePage = () => {
    this.setState({
      isLanding: false,
    });
  };

  render() {
    let result = <CardGenerator />;

    if (this.state.isLanding) {
      result = <Landing isLanding={this.changePage} />;
    }

    return <div className='App'>{result}</div>;
  }
}

export default App;
