import './assets/main.css'
import  VueGoogleMaps from '@fawmi/vue-google-maps'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyAVDwz028CVpz3cs1iTXnas3TfCDx6pKjg',
    },
})

app.use(router)

app.mount('#app')
