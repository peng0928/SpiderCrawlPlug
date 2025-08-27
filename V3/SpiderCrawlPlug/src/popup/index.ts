import { createApp } from 'vue'
import ArcoVue from '@arco-design/web-vue';
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import '@arco-design/web-vue/dist/arco.css';
import Popup from './Popup.vue'

const app = createApp(Popup);
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.mount('#app');
