import React, { Component } from 'react';
import './App.css';
import FirstForm from './FirstForm';
import NextForm from './NextForm';

class Home extends Component {
  render() {
    return (
      <div>
        {this.props.forms.map((p, i) => p.formType === 1 ?
          <FirstForm
            addForm={this.props.addForm}
            delForm={this.props.delForm}
            parentNr={p.parentNumber}
            forms={this.props.forms}
            idForms={p.id}
            idArray={i}
            key={i} /> :
          <NextForm
            addForm={this.props.addForm}
            delForm={this.props.delForm}
            forms={this.props.forms}
            parentNr={p.parentNumber}
            depth={p.depth}
            idForms={p.id}
            idArray={i}
            key={i} />)}

        <button
          className="add-input"
          onClick={() => {
            this.props.addForm(0, 1, 'true-false', 0, '', this.props.parentNumber)
          }}
        >
          Add Input
        </button>
      </div >
    );

  }
}
export default Home;
