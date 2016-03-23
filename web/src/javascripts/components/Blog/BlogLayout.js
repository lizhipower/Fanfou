/**
 * Created by ZhiLI on 2016/3/23.
 */
import React from 'react';
import UserContent from './UserContent';
import UserHeader from './UserHeader';

export default class BlogLayout extends React.Component {
  static propTypes = {
    header: React.PropTypes.object,
    photo: React.PropTypes.object,
    text: React.PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      header: this.props.header,
      photo: this.props.photo,
      text: this.props.text
    }
  }
  render() {
    let Img;
    if (this.state.photo) {
      Img = <img className="blog-img" src={ this.state.photo.thumburl } alt="thumbImg" />
    } else {
      Img = null;
    }
    return (
      <section className="blog clearfix" >
        <div className="blog-content">
          <UserHeader header={ this.state.header } />
          <UserContent text={this.state.text} />
        </div>
        <div className="blog-img">
          {Img}
        </div>
      </section>
    );
  }
}
