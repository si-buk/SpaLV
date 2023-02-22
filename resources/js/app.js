import {createApp} from "vue";
import index from './components/index'
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import {createPinia} from "pinia";


require('./bootstrap');

const app = createApp(index)
const store = createPinia()
app
    .use(store)
    .use(router)
    .mount('#app')
