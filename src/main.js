import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'
import News from './components/News.vue'

Vue.use(VueRouter);

const routes = [
  { path: '/',component:Home},
  { path: '/about',component:About},
  { path: '/contact',component:Contact},
  { path: '/news',component:News}
];

const router = new VueRouter({
  routes
});


new Vue({
router,
  render: h => h(App),
}).$mount('#app')

