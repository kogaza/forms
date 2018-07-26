import React from 'react';

class FirstForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'true-false',
    };
  }
  handleChange = (event) => {
    this.setState({
      selectValue: event.target.value,
    })
  }
  render() {
    const {selectValue} = this.state;
    const {addForm,delForm,idForms} = this.props;
    return (
      <div className="frame" id={this.props.idForms}>
        <form className="first">
          <label htmlFor="question">Question</label>
          <input name="question" />
          <label htmlFor="type">Type</label>
          <select className="select-type" onChange={this.handleChange} value={selectValue}>
            <option value="true-false">Yes/No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
          </select>
          <div className="buttons">
            <div className="button" onClick={() => addForm(idForms, 2, selectValue, 1)}>Add Sub-Input</div>
            <div className="button" onClick={() => delForm(idForms)}>Delete</div>
          </div>
        </form>
      </div>
    );
  }
}


export default FirstForm;
