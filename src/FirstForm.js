import React from 'react';

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectType: 'true-false',
      question: "",
    };
  }
  
  changeType = (event) => {
    this.setState({
      selectType: event.target.value,
    })  }
  handleQuestion = (event) => {
    this.setState({
      question: event.target.value,
    })
  }
  render() {
    const {selectType,question} = this.state;
    const {addForm,delForm,idForms,handleChange,forms} = this.props;
    console.log('First forms: ', forms);
    console.log('First forms: ', forms[idForms]);
    return (
      <div className="frame" id={this.props.idForms}>
        <form className="first">
          <label htmlFor="question">Question</label>
          <input name="question" onChange={this.handleQuestion} value={forms[idForms].question}/>
          {/* <input name="question" onChange={this.handleQuestion} value={question}/> */}
          <label htmlFor="type">Type</label>
          <select className="select-type" onChange={this.changeType} value={forms[idForms].selectType}>
          {/* <select className="select-type" onChange={this.changeType} value={selectType}> */}
            <option value="true-false">Yes/No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
          </select>
          <div className="buttons">
            <div className="button" onClick={() => addForm(idForms, 2, selectType, 1, question)}>Add Sub-Input</div>
            <div className="button" onClick={() => delForm(idForms)}>Delete</div>
          </div>
        </form>
      </div>
    );
  }
}


export default FirstForm;
