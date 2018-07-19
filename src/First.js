import React from 'react';

class First extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'ble',
    };
  }
  handleChange = (event) => {
    this.setState({
      selectValue: event.targer.value,
    })
  }
  render() {
    return (
      <div className="frame" id={this.props.idForms}>
        <form className="first">
          <label htmlFor="question">Question</label>
          <input name="question" />
          <label htmlFor="type">Type</label>
          <select className="select-type" onChange={this.handleChange}>
            <option value="select-type">Select type</option>
            <option value="true-false">Yes/No</option>
            <option value="text">Text</option>
            <option value="number">Number</option>
          </select>
          <div className="buttons">
            <div onClick={() => this.props.addForm(this.props.idForms, 2, "kalosze")}>Add Sub-Input</div>
            <button>Delete</button>
          </div>
        </form>
      </div>
    );
  }
}


export default First;
