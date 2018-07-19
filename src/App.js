import React, { Component } from 'react';
import './App.css';
import First from './First';
import Next from './Next';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [
        { id: 1, formType: 1, selectType: null, depth: 0},
        { id: 2, formType: 2, selectType: 'Yes/No', depth: 1},
        { id: 3, formType: 1, selectType: null, depth: 0}
      ],
    };
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
