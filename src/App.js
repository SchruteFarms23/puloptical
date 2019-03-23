import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import OrderFormContainer from './containers/OrderForm/OrderFormContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p>
            Puloptical
          </p>
            <OrderFormContainer/>
      </div>
    );
  }
}

export default App;
