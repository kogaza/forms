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
      parentNumber: 0,
      elementNr: 1,
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

  addForm = (idForms, formType, selectType, depth, question, parentNr, condition, value) => {
    let forms = this.state.forms;
    console.log('forms: ', forms);
    console.log('condition: ', condition);
    console.log('value: ', value);
    let elementNr = this.state.elementNr;
    let firstCount = forms.filter((p, i) => p.formType === 1);
    let parentNumber = this.state.parentNumber;
    if (formType === 1) {
      parentNumber++;
      if (firstCount.length >= 3) {
        alert('Więcej nie można');
      } else {
        forms.push({ id: elementNr, formType, selectType, depth, question, parentNumber, condition: null, value: null });
      }
    } else {
      parentNumber = parentNr;
      let idArray = forms.findIndex(p => p.id === idForms);
      forms.splice(idArray + 1, 0, { id: elementNr, formType, selectType, depth, question, parentNumber, condition, value });
    }
    this.setState({
      forms,
      parentNumber,
      elementNr: elementNr + 1
    })
  }
  delForm = (id) => {
    let forms = this.state.forms;
    let clickedElement = forms.find(p => p.id === id);
    let depth = clickedElement.depth;
    let parentNr = clickedElement.parentNumber;
    let toRemove = forms.filter(
      (p) => (
        (
          p.depth > depth &&
          p.parentNumber === parentNr
        ) ||
        p.id === id
      )
    );
    forms = this.state.forms;
    let afterremoving = forms;
    for (let i = 0; i < forms.length; i++) {
      for (let j = 0; j < toRemove.length; j++) {
        if (forms[i] === toRemove[j]) {
          afterremoving.splice(i, 1);
        }
      }
    }
    forms.splice(id, 1);
    this.setState({
      forms: afterremoving,
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
              parentNumber={this.state.parentNumber}
              elementNr={this.state.elementNr}
              forms={this.state.forms}
            />
          )} />
          <Route path='/preview' render={() => (
            <Preview
              forms={this.state.forms}
            />
          )} />
          <Route path='/export' component={Export} />
        </div >
      </Router>
    );
  }
}

export default App;
