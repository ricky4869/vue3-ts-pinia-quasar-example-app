import { createApp } from "vue"
import { createPinia } from "pinia"
import { Quasar } from "quasar"
import router from "./router"

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css"
import "@quasar/extras/fontawesome-v6/fontawesome-v6.css"

// Import Quasar css
import "quasar/src/css/index.sass"

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from "./App.vue"

const app = createApp(App)
const pinia = createPinia()

app.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
})

// Assumes you have a <div id="app"></div> in your index.html
app.use(router)
app.use(pinia)
app.mount("#app")
