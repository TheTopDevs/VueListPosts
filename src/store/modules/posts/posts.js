import api from "@/api";
import { requestStatus } from '@/utils/constants';

export default {
  namespaced: true,
  state: {
    posts: [],
    post: {},
    fetchingStatus: requestStatus.IDLE,
    fetchingPostStatus: requestStatus.IDLE,
  },
  mutations: {
    SET_POSTS: (s, data) => {
      s.posts = data.data
    },
    SET_POST: (s, data) => {
      s.post = data.data
    },
  },
  actions: {
    async getPosts({state,commit}) {
      state.fetchingStatus = requestStatus.PENDING;
      try {
        const data = await api.posts.getPosts();
        commit('SET_POSTS', data)
        state.fetchingStatus = requestStatus.SUCCESS;
      } catch (e){
        state.fetchingStatus = requestStatus.FAIL;
        throw e;
      }
    },

    async getPost({state,commit}, id) {
      state.fetchingPostStatus = requestStatus.PENDING;
      try {
        const data = await api.posts.getPost(id);
        commit('SET_POST', data)
        state.fetchingPostStatus = requestStatus.SUCCESS;
      } catch (e){
        state.fetchingPostStatus = requestStatus.FAIL;
        throw e;
      }
    },
  }
}