import React from 'react';

class YesNo extends React.Component {
  render() {
    const { depth, question, selectType, formType } = this.props;
    return (
      <div>
        <form className='answer' style={{ marginLeft: 20* depth}}>
          <label>
            {question}{depth}{formType}
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