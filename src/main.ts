import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';

const pinia = createPinia();
const app = createApp(App);
app.use(
    PrimeVue, 
    pinia, {
    theme: {
        preset: Aura
    }
});
app.mount('#app')