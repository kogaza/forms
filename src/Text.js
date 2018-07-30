import React from 'react';

class Text extends React.Component {
  render() {
    const { depth, question, selectType} = this.props;
    return (
      <div>
        <h1>Text</h1>
        <form className='answer'>
          <label>
            {question}
          </label>
          <input />
        </form>

      </div>
    );
  }
}

export default Text;