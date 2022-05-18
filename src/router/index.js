import { createRouter, createWebHistory } from "vue-router"; //імпорт модуля створення роутера
import Introduction from "../masterpages/Introduction.vue"; // /
import Selections from "../masterpages/Selections.vue"; // <   імпорт елементів сторінок
import Account from "../masterpages/Account.vue"; // \
import CreateDocument from "../masterpages/CreateDocument.vue";
import Document from "../components/Document.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "IntroductionS",
      component: Introduction,
    },
    {
      path: "/selection",
      name: "selection",
      component: Selections,
    },
    {
      path: "/account",
      name: "account",
      component: Account,
    },
    {
      path: "/createdocument",
      name: "create-document",
      component: CreateDocument,
    },
    {
      path: "/document",
      name: "document",
      component: Document,
    },
  ],
});

export default router;
