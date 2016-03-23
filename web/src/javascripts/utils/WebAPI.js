/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
// import blogStore from '../stores/BlogStore';
import Promise from 'es6-promise';
import { receiveBlogs } from '../actions/BlogActions';
import $ from 'jquery';

export function getBlogs() {
  const url = './getBlogs';
  $.get(url).success((blogs) => {
    // console.log(blogs);
    receiveBlogs(blogs);
  });
}

// export function getImg(imgUrl) {
//   const url = './getImg';
//   const imgPromise = Promise.resolve($.ajax(url, {
//     method: 'POST',
//     data: imgUrl,
//   }));
//   imgPromise.then((img) => {
//     console.log(img);
//   });
// }
