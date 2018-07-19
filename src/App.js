import React, { Component } from 'react';
import './App.css';
import First from './First';
import Next from './Next';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFirst: false,
    };
  }
  addFirst = () => {
    this.setState({
      showFirst: true,
    })
  }
  
  render() {
    let forms = "";
    let first = <div className="frame">
      <form className="first">
        <label htmlFor="question">Question</label>
        <input name="question" />
        <label htmlFor="type">Type</label>
        <select className="select-type">
          <option value="true-false">Yes/No</option>
          <option value="text">Text</option>
          <option value="number">Number</option>
        </select>
        <div className="buttons">
          <button onClick={() => this.props.addNext()}>Add Sub-Input</button>
          <button>Delete</button>
        </div>
      </form>
    </div>
    let next = <div className="frame">
      <form action="" className="next">
        <div className="first-line">
          <label htmlFor="condition" className="label-condition">Condition</label>
          <div className="two-select">
            <select name="" id="" className="condition">
              <option value="Equals">Equals</option>
              <option value="Greater">Greater than</option>
              <option value="Less">Less than</option>
            </select>
            <select name="" id="" className="true-false">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        </div>
        <label htmlFor="question">Question</label>
        <input name="question" />
        <label htmlFor="type">Type</label>
        <select name="type" className="select-type">
          <option value="true-false">Yes/No</option>
          <option value="text">Text</option>
          <option value="number">Number</option>
        </select>
        <div className="buttons">
          <button type="submit">Add Sub-Input</button>
          <button>Delete</button>
        </div>
      </form>
    </div>
    for(let i = 0; i < 3; i++){
      first += {first};
    }
    forms = <div>{first}</div>
    
    return (
      <div className="container">
        <h1>Form Builder</h1>
        {this.state.showFirst ? <First /> : null}

        <button className="add-input" onClick={() => this.addFirst()}>Add Input</button>
      </div >
    );
  }
}

export default App;
