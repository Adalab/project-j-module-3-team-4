import React from 'react';
import '../stylesheets/App.scss';
import CardGenerator from './card/CardGenerator';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        {/* <Landing /> */}
        <CardGenerator />
      </div>
    );
  }
}

export default App;
