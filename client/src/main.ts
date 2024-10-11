import { createApp } from 'vue';
import './assets/style.css';
import PrimeVue from 'primevue/config';
import Carousel from 'primevue/carousel';
import 'primeicons/primeicons.css';
import Aura from '@primevue/themes/aura';
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            darkModeSelector: '.my-app-dark',
        }
    }
 });
app.component('Carousel', Carousel)
app.mount('#app');