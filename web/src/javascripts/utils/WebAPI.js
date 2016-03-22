/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import blogStore from '../stores/BlogStore'
import { receiveBlogs } from '../actions/BlogActions';
import $ from 'jquery';


export function getBlogs() {
  const url = './getBlogs';
  $.get(url).success( (blogs) => {
    console.log(blogs);
    receiveBlogs(blogs);
  })

} 