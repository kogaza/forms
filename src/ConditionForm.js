import React from 'react';

class ConditionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      forms: [],
      condition: 'equals',
      value: '',

    }
  }
  componentWillMount() {
    this.setState({
      forms: this.props.forms,
    })
  }

  changeCondition = (event,id) => {
    const forms = this.state.forms;
    forms[id].condition = event.target.value;
    this.props.changeCondition(event.target.value, this.state.value);
    this.setState({
      forms,
      condition: event.target.value,
    }, () => console.log(this.state));
  }
  changeValue = (event,id) => {
    const forms = this.state.forms;
    forms[id].value = event.target.value;
    this.props.changeCondition(this.state.condition, event.target.value);
    this.setState({
      forms,
      value: event.target.value,
    });
  }
  render() {
    const { type, idArray } = this.props;
    const { forms } =this.state;
    switch (type) {
      case 'true-false':
        return (
          <div className="two-select">
            <select
              className="condition"
              onChange={p => this.changeCondition(p, idArray)}
              value={forms[idArray].value}
            >
              <option value="Equals">Equals</option>
            </select>
            <select
              className="true-false"
              onChange={p => this.changeValue(p, idArray)}
              value={forms[idArray].value}
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
        );
        break;
      case 'number':
        return (
          <div className="two-select">
            <select
              className="condition"
              onChange={p => this.changeCondition(p, idArray)}
              value={forms[idArray].condition}
            >
              <option value="Equals">Equals</option>
              <option value="Greater">Greater than</option>
              <option value="Less">Less than</option>
            </select>
            <input
              type='number'
              className="text-number-condition"
              onChange={p => this.changeValue(p, idArray)}
              value={forms[idArray].value}
            />
          </div>
        );
        break;
      default:
        return (
          <div className="two-select">
            <select
              className="condition"
              onChange={p => this.changeCondition(p, idArray)}
              value={forms[idArray].value}
            >
              <option value="Equals">Equals</option>
            </select>
            <input
              className="text-number-condition"
              onChange={p => this.changeValue(p, idArray)}
              value={forms[idArray].value}
            />
          </div>
        );
        break;

    }
  }
}


export default ConditionForm;
