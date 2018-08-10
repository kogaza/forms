import React, { Component } from 'react';
import './App.css';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
      selectedOption: '',
      answerText: '',
      answerNumber: ''
    }
  }
  componentWillMount() {
    this.setState({
      forms: this.props.forms,
    })
  }
  handleOptionChange = (e, id, selectType) => {
    const { forms } = this.state;
    let position = forms.findIndex(p => p.id === id);
    let actualElement = forms.find(p => p.id === id);
    let nextElement = forms[position + 1];
    let condition = nextElement.condition;
    let value = nextElement.value;
    if(actualElement.selectType === 'number'){
      value = parseInt(value);
    }
    if (actualElement.parentNumber === nextElement.parentNumber) {
      if (condition === 'equals') {
        if (e.target.value === value) {
          this.props.showForm(id, true);
        } else {
          this.props.showForm(id, false, actualElement.parentNumber);
        }
      } else if (condition === 'Greater') {
        if (e.target.value > value) {
          this.props.showForm(id, true);
        } else {
          this.props.showForm(id, false, actualElement.parentNumber);
        }
      } else if (condition === 'Less') {
        if (e.target.value < value && e.target.value !== '' ) {
          this.props.showForm(id, true);
        } else {
          this.props.showForm(id, false, actualElement.parentNumber);
        }
      }
    }
    switch (selectType) {
      case 'true-false':
        return (
          this.setState({
            selectedOption: e.target.value,
          })
        );
      case 'number':
        return (
          this.setState({
            answerNumber: e.target.value
          })
        );
      default:
        return (
          this.setState({
            answerText: e.target.value
          })
        );
    }
  }
  render() {
    const { depth, question, selectType, formType, show, id, condition } = this.props;
    if (!show) {
      return (
        <div></div>
      )
    }
    switch (selectType) {
      case 'true-false':
        return (
          <div>
            <form className='preview' style={{ marginLeft: 20 * depth }}>
              <label className='question-preview'>
                {question}
              </label>
              <div className='inputs-radio'>
                <label>
                  <input
                    checked={true}
                    type='radio'
                    value='yes'
                    checked={this.state.selectedOption === 'yes'}
                    onChange={(e) => this.handleOptionChange(e, id, selectType)}
                  /> Yes
                  </label>
                <label>
                  <input
                    type='radio'
                    value='no'
                    checked={this.state.selectedOption === 'no'}
                    onChange={(e) => this.handleOptionChange(e, id, selectType)}
                  /> No
                  </label>
              </div>
            </form>
          </div>
        );
      case 'number':
        return (
          <form className='preview' style={{ marginLeft: 20 * depth }}>
            <label className='question-preview'>
              {question}
            </label>
            <input
              value={this.state.answerNumber}
              onChange={(e) => this.handleOptionChange(e, id, selectType, condition)}
            />
          </form>
        );
      default:
        return (
          <form className='preview' style={{ marginLeft: 20 * depth }}>
            <label className='question-preview'>
              {question}
            </label>
            <input
              value={this.state.answerText}
              onChange={(e) => this.handleOptionChange(e, id, selectType)}
            />
          </form>
        );
    }
  }
}
export default Answers;



