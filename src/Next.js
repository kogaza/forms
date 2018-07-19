import React from 'react';

class Next extends React.Component {
  render() {
      return <div className="frame">
          <form action="" className="next">
            <div className="first-line">
              <label htmlFor="condition" className="label-condition">Condition</label>
              <div className="two-select">
                <select name="" id="" className="condition">
                  <option value="Equals">Equals</option>
                  <option value="Greater">Greater than</option>
                  <option value="Less">Less than</option>
                </select>
                <select name="" id="" className="true-false">
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>
            </div>
            <label htmlFor="question">Question</label>
            <input name="question" />
            <label htmlFor="type">Type</label>
            <select name="type" className="select-type">
              <option value="true-false">Yes/No</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
            </select>
            <div className="buttons">
              <button type="submit">Add Sub-Input</button>
              <button>Delete</button>
            </div>
          </form>
        </div>    
  }
}
export default Next;