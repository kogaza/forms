import React, { Component } from 'react';
import './App.css';
import YesNo from './YesNo';
import Number from './Number';
import Text from './Text';

class Preview extends Component {

  render() {
    const { forms } = this.props;
    return (
      <div className='container'>
        {
          forms.map((p,i) => {
            if (p.formType === 1) {
              switch (p.selectType) {
                case 'true-false':
                  return (
                    <YesNo
                      depth={p.depth}
                      question={p.question}
                      selectType={p.selectType}
                      key={i}
                    />
                  );
                  break;
                case 'number':
                  return (
                    <Number
                      depth={p.depth}
                      question={p.question}
                      selectType={p.selectType}
                      key={i}
                    />
                  );
                  break;
                default:
                  return (
                    <Text
                      depth={p.depth}
                      question={p.question}
                      selectType={p.selectType}
                      key={i}
                    />
                  );
                  break;
              }
            }
          })
        }
        {/* {forms.map((p,i) => p.selectType === 'true-false' ? 
        <YesNo 
        depth={p.depth}
        question={p.question}
        selectType={p.selectType}
        key={i}
        /> : 
        p.selectType === 'number' ?
        <Number 
        depth={p.depth}
        question={p.question}
        selectType={p.selectType}
        key={i}
        /> :
        <Text 
        depth={p.depth}
        question={p.question}
        selectType={p.selectType}
        key={i}
        />)} */}
      </div>
    )
  }
}
export default Preview;

