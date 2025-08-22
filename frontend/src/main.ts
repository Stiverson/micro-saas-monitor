import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia();

app.use(pinia); // Pinia precisa ser instalado antes de usar uma store
app.use(router);

// Agora sim, após o Pinia ser instalado, você pode usar a store
import { useThemeStore } from './stores/theme';
const themeStore = useThemeStore();
themeStore.initializeTheme();

app.mount('#app')