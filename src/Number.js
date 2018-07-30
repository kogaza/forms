import React from 'react';

class Number extends React.Component {
  render() {
    const { depth, question, selectType} = this.props;
    return (
      <div>
        <h1>Number</h1>
        <p>{question}</p>
        <span>{selectType}</span>
      </div>
    );
  }
}

export default Number;