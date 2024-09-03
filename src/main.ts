import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Ripple from 'primevue/ripple';


const pinia = createPinia();
const app = createApp(App);
app.directive('ripple', Ripple);

app.use(
    PrimeVue, 
    {
        ripple: true,
        theme: {
            preset: Aura,
            options: {
                prefix: 'p',
                darkModeSelector: 'light',
                cssLayer: false
            }
        }
    },
    pinia
);
app.mount('#app')