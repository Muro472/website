import { createApp } from "vue";
import { store } from "./store";
import App from "./App.vue";
import router from "./router"; // імпорт файлу index.js

const app = createApp(App);

app.use(store);
app.use(router); // підключення його до проекту

app.mount("#app");
