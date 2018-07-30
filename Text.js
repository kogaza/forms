import React from 'react';

class Text extends React.Component {
  render() {
    const { depth, question, selectType, formType} = this.props;
    return (
      <div>
        <form className='answer' style={{ marginLeft: 20* depth}}>
          <label>
            {question}{depth}{formType}
          </label>
          <input />
        </form>

      </div>
    );
  }
}

export default Text;