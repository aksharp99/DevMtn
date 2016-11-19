import React, {Component} from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import Party from './Party.jsx';

import store from './store.js';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <h1>Party Time!</h1>
        <Party />
      </div>
    </Provider>
    )
  }
}

render(<App />,document.getElementById('root'));
