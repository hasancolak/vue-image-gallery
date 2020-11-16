import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const PageNotFound = () => import('@/views/PageNotFound');
const Gallery = () => import('@/views/Gallery');
const ImageDetails = () => import('@/views/ImageDetails');

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: {
      name: 'gallery'
    }
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/gallery/:id',
    name: 'image-details',
    component: ImageDetails,
    props: true
  },
  {
    path: '*',
    name: 'page-not-found',
    component: PageNotFound
  }
];

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
