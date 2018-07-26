import React from 'react';
import ConditionForm from './ConditionForm';

class NextForm extends React.Component {
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
    const { selectValue } = this.state;
    const { addForm, delForm, idForms, selectType, depth } = this.props;
    return <div className="frame" id={this.props.idForms} style={{marginLeft: depth*20}}>
      <form action="" className="next">
        <div className="first-line">
          <label htmlFor="condition" className="label-condition">Condition</label>
          <ConditionForm selectType={selectType}/>
        </div>
        <label htmlFor="question">Question</label>
        <input name="question" />
        <label htmlFor="type">Type</label>
        <select name="type" className="select-type" onChange={this.handleChange} value={selectValue}>
          <option value="true-false">Yes/No</option>
          <option value="text">Text</option>
          <option value="number">Number</option>
        </select>
        <div className="buttons">
          <div className="button" onClick={() => addForm(idForms, 2, selectValue, depth+1)}>Add Sub-Input</div>
          <div className="button" onClick={() => delForm(idForms)}>Delete</div>
        </div>
      </form>
    </div>
  }
}
export default NextForm;