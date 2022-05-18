import { createStore } from "vuex";
import carousel from "../store/modules/carousel.js";
import document from "../store/modules/document.js";

export const store = createStore({
  modules: {
    carousel,
    document,
  },
});
