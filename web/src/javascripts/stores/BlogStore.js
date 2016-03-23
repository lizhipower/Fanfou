/**
 * Created by ZhiLI on 2016/3/21.
 * Email: lizhipower@gmail.com
 */
import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class BlogStore extends EventEmitter {
  constructor() {
    super();
    this.blogs = [];
  }

  getAll() {
    return this.blogs;
  }

  handleActions(action) {
    switch (action.type) {
      case 'AJAX_BLOGS': {
        console.log('get blogs');
        break;
      }
      case 'RECEIVE_BLOGS': {
        this.blogs = action.blogs;
        this.emit('change');
        break;
      }
      default: {
        console.log('nothing happened');
      }
    }
  }
}

const blogStore = new BlogStore();
dispatcher.register(blogStore.handleActions.bind(blogStore));

export default blogStore;
