import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { manager: '' };
  }

  async componentDidMount() {
    // the provider from metamask already has a default account there. So no arguments need to be in the call()
    const manager = await lottery.methods.manager().call();
    this.setState({ manager });
  }
  render() {
    return (
      <div>
        <h2>Lottery Contract</h2>
        <p>This contract is manged by {this.state.manager}</p>
      </div>
    );
  }
}

export default App;
