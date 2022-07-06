import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Posts',
    component: () => import(/* webpackChunkName: "Posts" */ '../pages/Posts')
  },

  {
    path: `/:id`,
    name: 'PostItem',
    component: () => import(/* webpackChunkName: "PostItem" */ '../components/posts/PostItem')
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
