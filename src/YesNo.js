import React from 'react';

class YesNo extends React.Component {
  render() {
    const { depth, question, selectType } = this.props;
    return (
      <div>
        <h1>YesNo</h1>
        <form className='yes-no'>
          <label>
            {question}
          </label>
          <div className='inputs-radio'>
            <input
              type='radio'
              value='Yes'
              name='yesno'
            /> Yes
            <input
              type='radio'
              value='No'
              name='yesno'
            /> No
          </div>
        </form>

      </div>
    );
  }
}

export default YesNo;