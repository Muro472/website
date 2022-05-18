export default {
  state: {
    slides: [
      {
        title: "Заява про прийняття на роботу",
        text: [
          "Цей документ потрібен при влаштовувані на роботу.",
          "Роботодавець може запросити додатки такі як:",
          "-паспорт",
          "-індефікаційний код",
          "-водійські права",
          "-т.д",
        ],
        img: "/documents/Join_Job/picture.png",
        link: "/documents/Join_Job/document.pdf",
      },
      {
        title: "Заява про звільнення",
        text: [
          "Цей документ потрібен при звільненні від роботи по власному бажанню:",
          "додатки не потрібні",
        ],
        img: "/documents/Lose_Job/picture.png",
        link: "/documents/Lose_Job/document.pdf",
      },
      {
        title: "Заява на відпустку",
        text: [
          "Цей документ потрібен при бажанні отримати відпустку від роботи",
          "потрібно щоб ваша компанія нараховувала відпускні дні",
          "додатки не потрібні",
        ],
        img: "/documents/Get_Vacation/picture.png",
        link: "/documents/Get_Vacation/document.pdf",
      },
      {
        title: "Заява на неповний робочий день",
        text: [
          "Цей документ потрібен при бажанні отримати неповний робочий день",
          "потрібне попереднє узгодження з керівником",
          "додатки не потрібні",
        ],
        img: "/documents/Half_Job/picture.png",
        link: "/documents/Half_Job/document.pdf",
      },
      {
        title: "Заява на прийняття на сезонну роботу",
        text: [
          "Цей документ потрібен при влаштовувані на сезонну роботу.",
          "Він гарантує те, що ротодавець не змусить працювати після кінцевої дати",
          "Роботодавець може запросити додатки такі як:",
          "-паспорт",
          "-індефікаційний код",
          "-водійські права",
          "-т.д",
        ],
        img: "/documents/Join_Half/picture.png",
        link: "/documents/Join_Half/document.pdf",
      },
    ],
    direction: "left",
    visible_slide: 0,
  },
  getters: {
    getSlides(state) {
      return state.slides;
    },
    getDirection(state) {
      return state.direction;
    },
    getVisibleSlide(state) {
      return state.visible_slide;
    },
  },
  mutations: {
    changeS(state, method) {
      if (method == "next") {
        state.direction = "left";
        if (state.visible_slide == state.slides.length - 1) {
          state.visible_slide = 0;
        } else state.visible_slide++;
      } else {
        state.direction = "right";
        if (state.visible_slide == 0) {
          state.visible_slide = state.slides.length - 1;
        } else state.visible_slide--;
      }
    },
    setVisibleSlide(state, method) {
      state.visible_slide = method;
    },
  },
  actions: {},
};
