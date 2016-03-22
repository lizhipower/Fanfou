/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import React from 'react';
import { getBlogs } from '../utils/WebAPI';
import blogStore from '../stores/BlogStore';
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
  render() {
    const blogs = this.state.blogs;
    console.log(blogs)
    let textArr;
    if (blogs !== []) {
        textArr = blogs.map( (blog)=> {
        const { text } = blog;
        return (
          <p>{text}</p>
        );
      });
    } else {
      textArr = <p>loading...</p>
    }

    return (
      <div>
        <p>Blog</p>
        {textArr}
      </div>
    );
  }
}
