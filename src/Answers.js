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
    if (actualElement.parentNumber === nextElement.parentNumber) {
      console.log('next element: ',nextElement.value);
      console.log('actual element: ',e.target.value)
      if (nextElement.value == e.target.value) {
        this.props.showForm(id, true);
      } else {
        this.props.showForm(id, false, actualElement.parentNumber);
      }
    }
    switch (selectType) {
      case 'true-false':
        return (
          this.setState({
            selectedOption: e.target.value,
          })
        );
        break;
      case 'number':
        return (
          this.setState({
            answerNumber: e.target.value
          })
        );
        break;
      default:
        return (
          this.setState({
            answerText: e.target.value
          })
        );
        break;
    }
  }


  render() {
    const { depth, question, selectType, formType, show, id } = this.props;
    const { forms } = this.state;
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
                {question}{depth}{formType}
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
        break;
      case 'number':
        return (
          <form className='preview' style={{ marginLeft: 20 * depth }}>
            <label className='question-preview'>
              {question}{depth}{formType}
            </label>
            <input
              value={this.state.answerNumber}
              onChange={(e) => this.handleOptionChange(e, id, selectType)}
            />
          </form>
        );
        break;
      default:
        return (
          <form className='preview' style={{ marginLeft: 20 * depth }}>
            <label className='question-preview'>
              {question}{depth}{formType}
            </label>
            <input 
            value={this.state.answerText}
            onChange={(e) => this.handleOptionChange(e, id, selectType)}
            />
          </form>
        );
        break;
    }
  }
}
export default Answers;



