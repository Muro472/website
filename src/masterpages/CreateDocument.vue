<template>
  <div class="web">
    <div class="web-inpust">
      <div class="web-inpust-title">
        <h1>{{ getTitle }}</h1>
      </div>
      <div class="web-inputs-main">
        <div class="web-inpust-main-block" v-if="this.getIsOn.name">
          <input
            placeholder="ім'я"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.name"
          />
          {{ this.changecomp }}
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.surname">
          <input
            placeholder="прізвище"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.surname"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.city">
          <input
            placeholder="місто проживання"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.city"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.adres">
          <input
            placeholder="адреса"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.adres"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.phoneNumber">
          <input
            placeholder="номер телефону"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.phoneNumber"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.passportNumber">
          <input
            placeholder="серія та номер паспорту"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.passportNumber"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.passportPlace">
          <input
            placeholder="ким виданий паспорт"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.passportPlace"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.payNumber">
          <input
            placeholder="номер карти платника податків"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.payNumber"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.contourName">
          <input
            placeholder="назва товариства"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.contourName"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.directorsName">
          <input
            placeholder="ПІБ директора"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.directorsName"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.placeOfWork">
          <input
            placeholder="посада"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.placeOfWork"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.dateOfStart">
          <input
            placeholder="бажаний початок роботи"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.dateOfStart"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.addition1">
          <input
            placeholder="додаток(опціонально)"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.addition1"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.addition2">
          <input
            placeholder="додаток(опціонально)"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.addition2"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.addition3">
          <input
            placeholder="додаток(опціонально)"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.addition3"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.addition4">
          <input
            placeholder="додаток(опціонально)"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.addition4"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.addition5">
          <input
            placeholder="додаток(опціонально)"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.addition5"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.startVacation">
          <input
            placeholder="дата початку"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.startVacation"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.endVacation">
          <input
            placeholder="дата кінця"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.endVacation"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.reason">
          <input
            placeholder="причина"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.reason"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.lengthOfWork">
          <input
            placeholder="кількість годин"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.lengthOfWork"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.startHour">
          <input
            placeholder="час початку роботи"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.startHour"
          />
        </div>
        <div class="web-inpust-main-block" v-if="this.getIsOn.endHour">
          <input
            placeholder="час кінця роботи"
            type="text"
            class="web-inpust-main-block-body"
            v-model="this.inputs.endHour"
          />
        </div>
      </div>
    </div>
    <div class="web-document">
      <Document class="web-document-main" />
      <div class="web-document-button">
        <router-link
          class="web-document-button-main"
          to="document"
          v-on:click="finalClick"
          >Завантажити</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import DocumentVue from "../components/Document.vue";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";
import Document from "../components/Document.vue";

export default {
  data() {
    return {
      kek: 0,
      inputs: {
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
      },
    };
  },
  computed: {
    ...mapGetters(["getTitle", "getIsOn"]),
    changecomp() {
      console.log("vue");
      this.setData(this.inputs);
    },
  },
  methods: {
    ...mapMutations(["setData", "setTrigger"]),
    finalClick() {
      this.setTrigger(true);
    },
  },
  components: { Document },
};
</script>

<style scoped>
.web {
  display: flex;
  width: 100vw;
  justify-content: space-around;
}
.web-document-main {
  margin-top: 100px;
  border: 1px solid black;
  position: sticky;
  width: 400px;
  height: 565px;
  padding: 30px;
}
.web-inpust-main-block-body {
  margin: 15px;
  width: 50vw;
  padding: 16px 20px;
  border: none;
  border-radius: 4px;
  background-color: #f1f1f1;
}
web-document-button {
  margin-top: 40px;
}
.web-document-button-main {
  position: relative;
  background-color: #4caf50;
  border: none;
  font-size: 28px;
  color: #ffffff;
  padding: 20px;
  width: 200px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
</style>
