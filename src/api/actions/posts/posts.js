import axios from 'axios';
import { WEB_API_ROUTES, BASE_URL } from '@/api/api-routes';

export default {

  getPosts() {
    return axios.get(`${BASE_URL}${WEB_API_ROUTES.posts.posts}`);
  },
  getPost(id) {
    return axios.get(`${BASE_URL}${WEB_API_ROUTES.posts.posts}/${id}`);
  },
};
