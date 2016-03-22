/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import React from 'react';
import { IndexLink, Link } from 'react-router';
export default class Nav extends React.Component {

  static propTypes = {
    location: React.PropTypes.object.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      pathname: this.props.location.pathname
    };
  }
  handleLinkClick() {
    const { pathname } = this.props.location;
    this.setState({
      pathname: pathname
    });
  }
  render() {
    console.log('render');

    return (
      <div>
        <ul onClick = { this.handleLinkClick.bind(this) }>
          <li><IndexLink to="/" >Photo</IndexLink></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>

    );
  }
}
