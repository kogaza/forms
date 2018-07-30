import React, { Component } from 'react';
import './App.css';
import Answers from './Answers';

class Preview extends Component {
  render() {
    const { forms } = this.props;
    return (
      <div className='container'>
        {forms.map((p, i) =>
          <Answers
            showForm={this.props.showForm}
            forms={forms}
            depth={p.depth}
            question={p.question}
            selectType={p.selectType}
            formType={p.formType}
            show={p.show}
            id={p.id}
            key={i}
          />
        )}
      </div>
    )
  }
}
export default Preview;

