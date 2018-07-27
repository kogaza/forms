import React from 'react';

class ConditionForm extends React.Component {

  render() {
    const { type } = this.props;
    switch (type) {
      case 'true-false':
        return (
          <div className="two-select">
            <select className="condition">
              <option value="Equals">Equals</option>
            </select>
            <select className="true-false">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        );
        break;
      case 'number':
        return (
          <div className="two-select">
            <select className="condition">
              <option value="Equals">Equals</option>
              <option value="Greater">Greater than</option>
              <option value="Less">Less than</option>
            </select>
            <input type='number' className="text-number-condition"/>
          </div>
        );
        break;
      default:
        return (
          <div className="two-select">
            <select className="condition">
              <option value="Equals">Equals</option>
            </select>
            <input className="text-number-condition"/>
          </div>
        );
        break;

    }
  }
}


export default ConditionForm;
