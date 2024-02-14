import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes/routes.js";
import wysiwyg from "vue-wysiwyg";
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';

createApp(App)
.use(router,wysiwyg, {})
.mount('#app')
.component('VueDatePicker', VueDatePicker);
