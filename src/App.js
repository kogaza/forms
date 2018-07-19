import React, { Component } from 'react';
import './App.css';
import First from './First';
import Next from './Next';

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

  addForm = (id, formType, selectType, depth) => {
    let forms = this.state.forms;
    let firstCount = forms.filter((p, i) => p.formType === 1);
    console.log('first count: ', firstCount);
    console.log('typ select: ', selectType);
    if (firstCount.length >= 3 && formType === 1) {
      alert('Więcej nie można');
    } else {
      forms.splice(id + 1, 0, { id: forms.length, formType, selectType, depth });
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
      <div className="container">
        <h1>Form Builder</h1>

        {this.state.forms.map((p, i) => p.formType === 1 ?
          <First
            addForm={this.addForm}
            delForm={this.delForm}
            idForms={i}
            key={i} /> :
          <Next
            addForm={this.addForm}
            delForm={this.delForm}
            selectType={p.selectType}
            depth={p.depth}
            idForms={i}
            key={i} />)}

        <button className="add-input" onClick={() => this.addForm(this.state.forms.length, 1, null, 0)}>Add Input</button>
      </div >
    );
  }
}

export default App;
