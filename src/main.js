import './assets/main.css'


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'; 
import './assets/styles/styles.scss'; // Importar la hoja de estilos

const app = createApp(App)

app.use(router)
app.use(store); // Usa el store
app.mount('#app')
