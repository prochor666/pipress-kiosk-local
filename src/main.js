import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import dayjs from 'dayjs';
import App from './App.vue';
import Dashboard from './vue-components/Dashboard.vue';
import apiEndpoint from './composables/api-endpoint';
import './index.css';

const routes = [
    { path: '/', component: Dashboard, name: 'dashboard' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach(async (to, from) => {

    //console.log(`Try navigate to ${to.path} from ${from.path}`);
    const apiUrl = await apiEndpoint();

    to.meta.apiUrl = apiUrl;
    to.meta.appPrefix = 'pipress';
});

const app = createApp(App);

app.config.globalProperties.$dayjs = dayjs;

app.provide('apiUrl');
app.use(router);
app.mount('#app');
