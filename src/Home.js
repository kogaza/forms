import React, { Component } from 'react';
import './App.css';
import FirstForm from './FirstForm';
import NextForm from './NextForm';

class Home extends Component {
  
  render() {
// console.log('forms 123: ', this.props.forms);
    return (
      <div className="container">
        {this.props.forms.map((p, i) => p.formType === 1 ?
          <FirstForm
            addForm={this.props.addForm}
            delForm={this.props.delForm}
            handleChange={this.props.handleChange}
            forms={this.props.forms}
            idForms={i}
            key={i} /> :
          <NextForm
            addForm={this.props.addForm}
            delForm={this.props.delForm}
            selectType={p.selectType}
            depth={p.depth}
            idForms={i}
            key={i} />)}

        <button
          className="add-input"
          onClick={() => this.props.addForm(this.props.forms.length, 1, 'true-false', 0,'')}
        >
          Add Input
        </button>
      </div >
    );

  }
}
export default Home;
