<template>
  <div class="carousel">
    <div class="carousel-left">
      <Carousel-list
        class="carousel-left-selection"
        v-for="(slide, index) in getSlides"
        :key="index"
        :text="slide.title"
        :visible_slide="getVisibleSlide"
        :index="index"
      />
    </div>
    <div class="carousel-right">
      <div class="carousel-right-main">
        <Carousel-slide
          v-for="(slide, index) in getSlides"
          :key="index"
          :content="slide"
          :index="index"
          :visible_slide="getVisibleSlide"
          :direction="getDirection"
        ></Carousel-slide>
      </div>
      <div class="carousel-right-ui">
        <button v-on:click="change('prev')" class="carousel-right-ui-button">
          <h2>&lt;</h2>
        </button>
        <a
          v-bind:href="this.getSlides[this.getVisibleSlide].link"
          download
          class="carousel-right-ui-button"
          >звантажити .pdf шаблон</a
        >

        <router-link
          v-on:click="crateDocument"
          to="/createdocument"
          class="carousel-right-ui-button"
          >звантажити готову заяву</router-link
        >
        <button v-on:click="change('next')" class="carousel-right-ui-button">
          <h2>></h2>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselSlide from "@/components/CarouselSlide.vue";
import CarouselList from "@/components/CarouselList.vue";

import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters(["getSlides", "getDirection", "getVisibleSlide"]),
  },
  methods: {
    ...mapMutations(["changeS", "setChosenDocument"]),
    change(method) {
      this.changeS(method);
    },
    crateDocument() {
      this.setChosenDocument(this.getVisibleSlide);
    },
  },
  components: {
    CarouselSlide,
    CarouselList,
  },
};
</script>

<style scoped>
.carousel {
  display: flex;

  text-align: center;
}

.carousel-left {
  display: flex;
  height: 94vh;
  flex: 1;
  background-color: rgb(173, 173, 173);
  border-right: 1px solid black;
  flex-direction: column;
  justify-content: center;
}
.carousel-left-selection {
  margin: 5px;
}
.carousel-right {
  flex: 5;
}
.carousel-right-ui-button {
  position: relative;
  background-color: #4caf50;
  border: none;
  font-size: 28px;
  color: #ffffff;
  padding: 20px;
  width: 150px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}
.carousel-right-main {
  margin-top: 70vh;
  display: flex;
  justify-content: center;
}
.carousel-right-ui {
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  width: 50vw;
}
</style>
