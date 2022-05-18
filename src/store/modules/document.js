import { faCity } from "@fortawesome/free-solid-svg-icons";

export default {
  state: {
    trigger: false,
    chosen_document: 0,
    documents: [
      {
        title: "Заява про прийняття на роботу",
        img: "/documents/Join_Job/picture.png",
      },
      {
        title: "Заява про звільнення",
        img: "/documents/Join_Job/picture.png",
      },
      {
        title: "Заява на відпустку",
        img: "/documents/Join_Job/picture.png",
      },
      {
        title: "Заява на неповний робочий день",
        img: "/documents/Join_Job/picture.png",
      },
      {
        title: "Заява на прийняття на сезонну роботу",
        img: "/documents/Join_Job/picture.png",
      },
    ],
    name: "",
    surname: "",
    city: "",
    adres: "",
    phoneNumber: "",
    passportNumber: "",
    passportPlace: "",
    payNumber: "",
    contourName: "",
    directorsName: "",
    placeOfWork: "",
    dateOfStart: "",
    addition1: "",
    addition2: "",
    addition3: "",
    addition4: "",
    addition5: "",
    startVacation: "",
    endVacation: "",
    reason: "",
    lengthOfWork: "",
    startHour: "",
    endHour: "",
    whatIsOn: {
      name: true,
      surname: true,
      city: true,
      adres: true,
      phoneNumber: true,
      passportNumber: true,
      passportPlace: true,
      dateOfStart: true,
      payNumber: true,
      contourName: true,
      directorsName: true,
      placeOfWork: true,
      addition1: true,
      addition2: true,
      addition3: true,
      addition4: true,
      addition5: true,
      startVacation: true,
      endVacation: true,
      reason: true,
      lengthOfWork: true,
      startHour: true,
      endHour: true,
    },
  },
  getters: {
    getTrigger(state) {
      return state.trigger;
    },
    getChosenDocument(state) {
      return state.chosen_document;
    },
    getTitle(state) {
      return state.documents[+state.chosen_document].title;
    },
    getIsOn(state) {
      return state.whatIsOn;
    },
    getRightText(state) {
      console.log("getRightText");

      state.name = state.name == "" ? "<ім'я>" : state.name;
      state.surname = state.surname == "" ? "<прізвище>" : state.surname;
      state.city = state.city == "" ? "<місто>" : state.city;
      state.adres = state.adres == "" ? "<адреса>" : state.adres;
      state.phoneNumber =
        state.phoneNumber == "" ? "<номер телефону>" : state.phoneNumber;
      state.passportNumber =
        state.passportNumber == ""
          ? "<серія та номер паспорта>"
          : state.passportNumber;
      state.payNumber = state.payNumber == "" ? "<номер інн>" : state.payNumber;
      state.contourName =
        state.contourName == "" ? "<назва товариства>" : state.contourName;
      state.directorsName =
        state.directorsName == "" ? "<ім'я директора>" : state.directorsName;
      state.passportPlace == "" ? "<ким виданий паспорт>" : state.passportPlace;
      state.placeOfWork =
        state.placeOfWork == "" ? "<назва посади>" : state.placeOfWork;
      state.dateOfStart =
        state.dateOfStart == "" ? "<дата початку роботи>" : state.dateOfStart;
      state.startVacation =
        state.startVacation == "" ? "<початкова дата>" : state.startVacation;
      state.endVacation =
        state.endVacation == "" ? "<кінець відпустки>" : state.endVacation;
      state.reason = state.reason == "" ? "<причина>" : state.reason;
      state.lengthOfWork =
        state.lengthOfWork == ""
          ? "<кількисть годин роботи>"
          : state.lengthOfWork;
      state.startHour =
        state.startHour == "" ? "<час початку роботи>" : state.startHour;
      state.endHour =
        state.endHour == "" ? "<час кінця роботи>" : state.endHour;

      switch (state.chosen_document) {
        case 0: //Заява про прийняття на роботу
          return [
            "Директору " + state.contourName,
            state.directorsName + "   ",
            state.name + " " + state.surname,
            "Зареєстрованогї(го) за адресою",
            state.city,
            state.adres + " " + state.phoneNumber,
            state.payNumber,
            state.passportPlace,
            "Реєстраційний номер облікової картки",
            "платника податків " + state.payNumber,
          ];
        case 1:
        case 2:
        case 3:
          return [
            "Директору ТОВ " + state.contourName,
            state.directorsName,
            state.placeOfWork,
            state.name + " " + state.surname,
          ];
        case 4:
          return [
            "Директору " + state.contourName,
            state.directorsName + "   ",
            state.name + " " + state.surname,
            "Зареєстрованогї(го) за адресою",
            state.city,
            state.adres + " " + state.phoneNumber,
            state.payNumber,
            state.passportPlace,
            "Реєстраційний номер облікової картки",
            "платника податків " + state.payNumber,
          ];
        default:
          console.log("no data");
      }
    },
    getLeftText(state) {
      console.log("getLeftText");

      state.name = state.name == "" ? "<ім'я>" : state.name;
      state.surname = state.surname == "" ? "<прізвище>" : state.surname;
      state.city = state.city == "" ? "<місто>" : state.city;
      state.adres = state.adres == "" ? "<адреса>" : state.adres;
      state.phoneNumber =
        state.phoneNumber == "" ? "<номер телефону>" : state.phoneNumber;
      state.passportNumber =
        state.passportNumber == ""
          ? "<серія та номер паспорта>"
          : state.passportNumber;
      state.payNumber = state.payNumber == "" ? "<номер інн>" : state.payNumber;
      state.contourName =
        state.contourName == "" ? "<назва товариства>" : state.contourName;
      state.directorsName =
        state.directorsName == "" ? "<ім'я директора>" : state.directorsName;
      state.passportPlace == "" ? "<ким виданий паспорт>" : state.passportPlace;
      state.placeOfWork =
        state.placeOfWork == "" ? "<назва посади>" : state.placeOfWork;
      state.dateOfStart =
        state.dateOfStart == "" ? "<дата початку роботи>" : state.dateOfStart;
      state.startVacation =
        state.startVacation == "" ? "<початкова дата>" : state.startVacation;
      state.endVacation =
        state.endVacation == "" ? "<кінцева дата>" : state.endVacation;
      state.reason = state.reason == "" ? "<причина>" : state.reason;
      state.lengthOfWork =
        state.lengthOfWork == ""
          ? "<кількисть годин роботи>"
          : state.lengthOfWork;
      state.startHour =
        state.startHour == "" ? "<час початку роботи>" : state.startHour;
      state.endHour =
        state.endHour == "" ? "<час кінця роботи>" : state.endHour;

      let now = new Date();
      now = now.getFullYear() + "," + now.getDate() + "," + now.getDay();

      switch (state.chosen_document) {
        case 0: //Заява про прийняття на роботу
          return [
            "Прошу прийняти на посаду " +
              state.placeOfWork +
              " із " +
              state.dateOfStart,
            "    Додатки:",
            state.addition1,
            state.addition2,
            state.addition3,
            state.addition4,
            state.addition5,
            now,
          ];
        case 1:
          return ["Прошу звільнити мене за власним бажанням", now];
        case 2:
          return [
            "Прошу надати мені відпустку з " +
              state.startVacation +
              " по " +
              state.endVacation,
            now,
          ];
        case 3:
          return [
            "У зв'язку з " +
              state.reason +
              " прошу встановити мені з " +
              state.startVacation +
              " по " +
              state.endVacation +
              " неповний робочий день тривалістю " +
              state.lengthOfWork +
              " з " +
              state.startHour +
              " по " +
              state.endHour,
            now,
          ];
        case 4:
          return [
            "прошу прийняти мене на посаду " +
              state.placeOfWork +
              " з " +
              state.startVacation +
              " по " +
              state.endVacation,
            "Додатки",
            state.addition1,
            state.addition2,
            state.addition3,
            state.addition4,
            state.addition5,
            now,
          ];
        default:
          console.log("no data");
      }
    },
  },

  mutations: {
    setChosenDocument(state, value) {
      state.chosen_document = value;
      switch (value) {
        case 0:
          state.whatIsOn.name = true;
          state.whatIsOn.surname = true;
          state.whatIsOn.city = true;
          state.whatIsOn.adres = true;
          state.whatIsOn.phoneNumber = true;
          state.whatIsOn.passportNumber = true;
          state.whatIsOn.passportPlace = true;
          state.whatIsOn.dateOfStart = true;
          state.whatIsOn.payNumber = true;
          state.whatIsOn.contourName = true;
          state.whatIsOn.directorsName = true;
          state.whatIsOn.placeOfWork = true;
          state.whatIsOn.addition1 = true;
          state.whatIsOn.addition2 = true;
          state.whatIsOn.addition3 = true;
          state.whatIsOn.addition4 = true;
          state.whatIsOn.addition5 = true;
          state.whatIsOn.startVacation = false;
          state.whatIsOn.endVacation = false;
          state.whatIsOn.reason = false;
          state.whatIsOn.lengthOfWork = false;
          state.whatIsOn.startHour = false;
          state.whatIsOn.endHour = false;
          break;
        case 1:
          state.whatIsOn.name = true;
          state.whatIsOn.surname = true;
          state.whatIsOn.city = false;
          state.whatIsOn.adres = false;
          state.whatIsOn.phoneNumber = false;
          state.whatIsOn.passportNumber = false;
          state.whatIsOn.passportPlace = false;
          state.whatIsOn.dateOfStart = false;
          state.whatIsOn.payNumber = false;
          state.whatIsOn.contourName = true;
          state.whatIsOn.directorsName = true;
          state.whatIsOn.placeOfWork = true;
          state.whatIsOn.addition1 = false;
          state.whatIsOn.addition2 = false;
          state.whatIsOn.addition3 = false;
          state.whatIsOn.addition4 = false;
          state.whatIsOn.addition5 = false;
          state.whatIsOn.startVacation = false;
          state.whatIsOn.endVacation = false;
          state.whatIsOn.reason = false;
          state.whatIsOn.lengthOfWork = false;
          state.whatIsOn.startHour = false;
          state.whatIsOn.endHour = false;
          break;
        case 2:
          state.whatIsOn.name = true;
          state.whatIsOn.surname = true;
          state.whatIsOn.city = false;
          state.whatIsOn.adres = false;
          state.whatIsOn.phoneNumber = false;
          state.whatIsOn.passportNumber = false;
          state.whatIsOn.passportPlace = false;
          state.whatIsOn.dateOfStart = false;
          state.whatIsOn.payNumber = false;
          state.whatIsOn.contourName = true;
          state.whatIsOn.directorsName = true;
          state.whatIsOn.placeOfWork = true;
          state.whatIsOn.addition1 = false;
          state.whatIsOn.addition2 = false;
          state.whatIsOn.addition3 = false;
          state.whatIsOn.addition4 = false;
          state.whatIsOn.addition5 = false;
          state.whatIsOn.startVacation = true;
          state.whatIsOn.endVacation = true;
          state.whatIsOn.reason = false;
          state.whatIsOn.lengthOfWork = false;
          state.whatIsOn.startHour = false;
          state.whatIsOn.endHour = false;
          break;
        case 3:
          state.whatIsOn.name = true;
          state.whatIsOn.surname = true;
          state.whatIsOn.city = false;
          state.whatIsOn.adres = false;
          state.whatIsOn.phoneNumber = false;
          state.whatIsOn.passportNumber = false;
          state.whatIsOn.passportPlace = false;
          state.whatIsOn.dateOfStart = false;
          state.whatIsOn.payNumber = false;
          state.whatIsOn.contourName = true;
          state.whatIsOn.directorsName = true;
          state.whatIsOn.placeOfWork = true;
          state.whatIsOn.addition1 = false;
          state.whatIsOn.addition2 = false;
          state.whatIsOn.addition3 = false;
          state.whatIsOn.addition4 = false;
          state.whatIsOn.addition5 = false;
          state.whatIsOn.startVacation = true;
          state.whatIsOn.endVacation = true;
          state.whatIsOn.reason = true;
          state.whatIsOn.lengthOfWork = true;
          state.whatIsOn.startHour = true;
          state.whatIsOn.endHour = true;
          break;
        case 4:
          state.whatIsOn.name = true;
          state.whatIsOn.surname = true;
          state.whatIsOn.city = true;
          state.whatIsOn.adres = true;
          state.whatIsOn.phoneNumber = true;
          state.whatIsOn.passportNumber = true;
          state.whatIsOn.passportPlace = true;
          state.whatIsOn.dateOfStart = false;
          state.whatIsOn.payNumber = true;
          state.whatIsOn.contourName = true;
          state.whatIsOn.directorsName = true;
          state.whatIsOn.placeOfWork = true;
          state.whatIsOn.addition1 = true;
          state.whatIsOn.addition2 = true;
          state.whatIsOn.addition3 = true;
          state.whatIsOn.addition4 = true;
          state.whatIsOn.addition5 = true;
          state.whatIsOn.startVacation = true;
          state.whatIsOn.endVacation = true;
          state.whatIsOn.reason = false;
          state.whatIsOn.lengthOfWork = false;
          state.whatIsOn.startHour = false;
          state.whatIsOn.endHour = false;
          break;
      }
    },
    setTrigger(state, value) {
      state.trigger = value;
      console.log("da");
    },
    setData(state, data) {
      state.name = data.name;
      state.surname = data.surname;
      state.city = data.city;
      state.adres = data.adres;
      state.phoneNumber = data.phoneNumber;
      state.passportNumber = data.passportNumber;
      state.passportPlace = data.passportPlace;
      state.payNumber = data.payNumber;
      state.contourName = data.contourName;
      state.directorsName = data.directorsName;
      state.placeOfWork = data.placeOfWork;
      state.dateOfStart = data.dateOfStart;
      state.addition1 = data.addition1;
      state.addition2 = data.addition2;
      state.addition3 = data.addition3;
      state.addition4 = data.addition4;
      state.addition5 = data.addition5;
      state.startVacation = data.startVacation;
      state.endVacation = data.endVacation;
      state.reason = data.reason;
      state.lengthOfWork = data.lengthOfWork;
      state.startHour = data.startHour;
      state.endHour = data.endHour;
      console.log("vuex");
    },
    finalClick(state) {
      console.log("click");
      print();
    },
  },
};
