import React, { Component } from 'react';
import './App.css';

class Answers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
      selectedOption: ''
    }
  }
  componentWillMount() {
    this.setState({
      forms: this.props.forms,
    })
  }
  handleOptionChange = (e, id) => {
    const { depth } = this.props;
    const { forms } = this.state;
    let position = forms.findIndex(p => p.id === id);
    let actualElement = forms.find(p => p.id === id);
    let nextElement = forms[position + 1];
    if (actualElement.parentNumber === nextElement.parentNumber) {
      if (nextElement.value == e.target.value) {
        this.props.showForm(id, true);
      } else {
        this.props.showForm(id, false, actualElement.parentNumber);
      }
    }
    this.setState({
      selectedOption: e.target.value
    });
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
                    onChange={(e) => this.handleOptionChange(e, id)}
                  /> Yes
                  </label>
                <label>
                  <input
                    type='radio'
                    value='no'
                    checked={this.state.selectedOption === 'no'}
                    onChange={(e) => this.handleOptionChange(e, id)}
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
            <input />
          </form>
        );
        break;
      default:
        return (
          <form className='preview' style={{ marginLeft: 20 * depth }}>
            <label className='question-preview'>
              {question}{depth}{formType}
            </label>
            <input />
          </form>
        );
        break;
    }
  }
}
export default Answers;



