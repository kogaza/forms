import React, { Component } from 'react';
import './App.css';
import First from './First';
import Next from './Next';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [
        {id: 1, nr: 1},
        {id: 2, nr: 2},
        {id: 3, nr: 1}
      ],
    };
  }

  addForm = (id,typForm,typSelect) => {
    let forms = this.state.forms;
    let firstCount = forms.filter((p,i) => p.nr === 1);
    console.log('first count: ',firstCount);
    console.log('typ select: ',typSelect);
    firstCount.length === 3 && typForm === 1 ? alert('Więcej nie można') :
    forms.splice(id+1,0,{id: forms.length, nr:typForm});
    this.setState({
      forms,
    })
  }
  
  render() {    
    return (
      <div className="container">
        <h1>Form Builder</h1>
        
        {this.state.forms.map((p,i) => p.nr === 1 ? 
                                       <First addForm={(typForm) => this.addForm(typForm)} 
                                              idForms={i}
                                        key={i}/> : 
                                        <Next addForm={(typForm) => this.addForm(typForm)}
                                              idForms={i}
                                        key={i}/>)}

        <button className="add-input" onClick={() => this.addForm(this.state.forms.length,1,'kalosze')}>Add Input</button>
      </div >
    );
  }
}

export default App;
