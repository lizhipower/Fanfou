/**
 * Created by ZhiLI on 2016/3/23.
 */
import React from 'react';
export default class UserHeader extends React.Component {
  static propTypes = {
    header: React.PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header
    }
  }
  render() {
    const { user } = this.state.header;
    const { action } = this.state.header;
    const { objUser } = this.state.header;
    const { name } = user;
    return (
      <div>
        <span>{ name }</span><span>{ action }</span><span>{ objUser }:</span>
      </div>
    );
  }
}
