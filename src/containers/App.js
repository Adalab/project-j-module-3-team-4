import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.scss';

import Landing from './Landing/Landing';
import CardGenerator from './CardGenerator/CardGenerator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'moon', //fool
    };
    this.handleTheme = this.handleTheme.bind(this);
  }

  handleTheme(newTheme) {
    console.log('hello');
    this.setState({
      theme: newTheme,
    });
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/'
          render={() => (
            <Landing theme={this.state.theme} handleTheme={this.handleTheme} />
          )}
        />
        <Route
          path='/card-generator'
          render={() => <CardGenerator theme={this.state.theme} />}
        />
      </Switch>
    );
  }
}

export default App;
