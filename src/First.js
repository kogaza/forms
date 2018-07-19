import React from 'react';

class First extends React.Component {
  render() {
    return (
    <div className="frame">
      <form className="first">
        <label htmlFor="question">Question</label>
        <input name="question" />
        <label htmlFor="type">Type</label>
        <select className="select-type">
          <option value="true-false">Yes/No</option>
          <option value="text">Text</option>
          <option value="number">Number</option>
        </select>
        <div className="buttons">
          <button onClick={() => this.props.addNext()}>Add Sub-Input</button>
          <button>Delete</button>
        </div>
      </form>
    </div>
    );
  }
}


export default First;
