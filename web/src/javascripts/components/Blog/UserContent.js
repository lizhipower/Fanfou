/**
 * Created by ZhiLI on 2016/3/23.
 */
import React from 'react';
export default class UserContent extends React.Component {
  static propTypes = {
    text: React.PropTypes.string
  };
  
  constructor(props) {
    super(props);
    this.state = {
      text: this.props.text
    }
  }
  render() {
    return (
      <div>{this.state.text}</div>
    );
  }
}
