import Vue from 'vue'
import VueRouter from './jslib/vue-router'
import  routes from './routes'
require('./UIAdapter');
Vue.use(VueRouter);
const router = new VueRouter({
    routes
});
new Vue({
    router,
}).$mount('#app');
// import App from './App.vue'
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })



// import Vue from 'vue'
// import VueRouter from './jslib/vue-router'
// import  routes from './routes'
// // import { Button, Cell } from 'mint-ui'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
// import $ from 'jquery'; //import when specific component need to use it
// import getURL from './jslib/commonFunction.js';
// Vue.prototype.getURL=getURL;

// Vue.use(VueRouter);
// // Vue.component(Button.name, Button)
// // Vue.component(Cell.name, Cell)
// // Vue.component('swipe', Swipe);
// // Vue.component('swipe-item', SwipeItem);
// // mount with global
// Vue.use(VueAwesomeSwiper)
// const router = new VueRouter({
//     routes
// });
// new Vue({
//     router,
// }).$mount('#app');
