import axios from 'axios';

export const FETCH_POSTS = 'FETCH_POSTS';

// url api
const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=123';

export function fetchPosts() {
  // definisco la Request
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`)

  return {
    type: FETCH_POSTS,
    payload: request
  }
}
