/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import dispatcher from '../dispatcher';

export function ajaxBlogs() {
  dispatcher.dispatch({
    type: 'AJAX_BLOGS'
  });
}

export function receiveBlogs(blogs) {
  dispatcher.dispatch({
    type: 'RECEIVE_BLOGS',
    blogs
  });
}

