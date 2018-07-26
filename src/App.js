import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Preview from './Preview';
import Export from './Export';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav>
            <ul>
              <li><Link to='/'> Create </Link></li>
              <li><Link to='preview'> Preview </Link></li>
              <li><Link to='/export'> Export </Link></li>
            </ul>
          </nav>
          <Route exact path='/' component={Home} />>
          <Route path='/preview' component={Preview} />>
          <Route path='/export' component={Export} />>
      </div >
      </Router>

    );
  }
}

export default App;
