import React from 'react';

class Text extends React.Component {
  render() {
    const { depth, question, selectType} = this.props;
    return (
      <div>
        <h1>Text</h1>
        <p>{question}</p>
        <span>{selectType}</span>
      </div>
    );
  }
}

export default Text;