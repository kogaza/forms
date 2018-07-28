import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import Preview from './Preview';
import Export from './Export';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
    };
  }

  componentDidMount() {
    this.hydrateStateWithLocalStorage();

    // add event listener to save state to localStorage
    // when user leaves/refreshes the page
    window.addEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );
  }

  componentWillUnmount() {
    window.removeEventListener(
      "beforeunload",
      this.saveStateToLocalStorage.bind(this)
    );

    // saves if component has a chance to unmount
    this.saveStateToLocalStorage();
  }

  hydrateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({ [key]: value });
        } catch (e) {
          // handle empty string
          this.setState({ [key]: value });
        }
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addForm = (id, formType, selectType, depth, question) => {
    let forms = this.state.forms;
    let firstCount = forms.filter((p, i) => p.formType === 1);
    if (firstCount.length >= 3 && formType === 1) {
      alert('Więcej nie można');
    } else {
      // forms[id].selectType = selectType;
      // forms[id].question = question;
      forms.splice(id + 1, 0, { id: forms.length, formType, selectType, depth, question});
      this.setState({
        forms,
      })
    }
  }
  delForm = (id) => {
    let forms = this.state.forms;
    forms.splice(id, 1);
    this.setState({
      forms,
    })
  }
  render() {
    return (
      <Router>
        <div className="container">
          <h1>Form Builder</h1>
          <nav>
            <ul>
              <li><Link to='/'> Create </Link></li>
              <li><Link to='preview'> Preview </Link></li>
              <li><Link to='/export'> Export </Link></li>
            </ul>
          </nav>
          <Route exact path='/' render={() => (
            <Home
              addForm={this.addForm}
              delForm={this.delForm}
              forms={this.state.forms}
            />
          )}/>
          <Route path='/preview' render={() => <Preview test={this.state} />} />
          <Route path='/export' component={Export} />
        </div >
      </Router>
    );
  }
}

export default App;
