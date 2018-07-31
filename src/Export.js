import React,{ Component} from 'react';

class Export extends Component {

  render() {
    const json = JSON.stringify(this.props.state);
    return (
      <div>{json}</div>
    )
  }
}
export default Export;