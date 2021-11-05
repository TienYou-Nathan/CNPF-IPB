import {createApp} from "vue";
import { store, key } from './store'
import App from "./App.vue";



import "vuesax/dist/vuesax.css"; //Vuesax styles
import i18n from './i18n'


const app = createApp(App)
app.use(i18n)
app.use(store, key)
app.mount("#app");

