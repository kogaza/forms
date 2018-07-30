import React from 'react';

class YesNo extends React.Component {
  render() {
    const { depth, question, selectType} = this.props;
    return (
      <div>
        <h1>YesNo</h1>
        <p>{question}</p>
        <span>{selectType}</span>
      </div>
    );
  }
}

export default YesNo;