import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes/routes.js";
import wysiwyg from "vue-wysiwyg";

createApp(App)
.use(router,wysiwyg, {})
.mount('#app');
