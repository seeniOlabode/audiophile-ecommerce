import { createApp } from 'vue'
import App from './App.vue'
import "./style.css";

import router from './routes';
import store from './store';

import Lenis from '@studio-freight/lenis'

const lenis = new Lenis()


function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


createApp(App).use(store).use(router).mount('#app')
