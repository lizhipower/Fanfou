/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */

import React from 'react';
import { getBlogs } from '../utils/WebAPI';
import blogStore from '../stores/BlogStore';
// import classNames from 'classnames';

import BlogLayout from '../components/Blog/BlogLayout';

export default class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }
  componentWillMount() {
    getBlogs();
    blogStore.on('change', this.getBlogs.bind(this));
  }
  componentWillUnmount() {
    blogStore.removeListener('change', this.getBlogs.bind(this));
  }
  getBlogs() {
    this.setState({
      blogs: blogStore.getAll()
    });
  }
  getBlogHeader(blog) {
    let status;
    let header;
    const { in_reply_to_screen_name } = blog;
    const { repost_screen_name } = blog;
    const { user } = blog;
    if (in_reply_to_screen_name !== '') {
      status = 'reply';
    } else if (repost_screen_name) {
      status = 'repost';
    } else {
      status = 'noraml';
    }
    switch (status) {
      case 'noraml': {
        header = {
          user,
          action: '说'
        };
        break;
      }
      case 'reply': {
        header = {
          user,
          action: '回复',
          objUser: in_reply_to_screen_name
        };
        break;
      }
      case 'repost': {
        header = {
          user,
          action: '转发自',
          objUser: repost_screen_name
        };
        break;
      }
      default: {
        console.log('errors in get header');
      }
    }
    return header;
  }
  render() {
    const blogs = this.state.blogs;
    console.log(blogs);
    let textArr;
    if (blogs !== []) {
      textArr = blogs.map((blog) => {
        const { id } = blog;
        const { text } = blog;
        const { photo } = blog;
        const blogHeader = this.getBlogHeader(blog);

        return (
          <BlogLayout key={ id } header={ blogHeader } photo={ photo } text={ text } />
        );
      });
    } else {
      textArr = <p>loading...</p>;
    }

    return (
      <div>
        <p>Blog</p>
        {textArr}
      </div>
    );
  }
}
