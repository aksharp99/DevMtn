import React, {Component} from 'react';
import {render} from 'react-dom';

import Party from './Party.jsx';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Party />
      </div>
    )
  }
}

render(<App />,document.getElementById('root'));
