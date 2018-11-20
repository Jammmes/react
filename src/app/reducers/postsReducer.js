import * as postsConstants from '../constants/postsConstants';

export function postsReducer(state = { posts: [], is_loading: false }, action) {

  switch (action.type) {

  case postsConstants.GET_POSTS_PENDING:
    {
      state = {...state, is_loading: true }
      break;
    }

  case postsConstants.GET_POSTS_FULFILLED:
    {
      state = {...state, is_loading: false, posts: action.payload.data }
      break;
    }

  case postsConstants.GET_POSTS_REJECTED:
    {
      state = {...state, is_loading: false, error_message: action.payload.message }
      break;
    }

  default:
    {
      return state;
    }

  }

  return state;
}