<template>
  <div class="god">
    <transition :name="direction" mode="in-out">
      <div v-show="index === visible_slide" class="carousel-slide">
        <div class="text">
          <div>
            <h1>
              {{ content.title }}
            </h1>
          </div>
          <div
            class="text-left"
            v-for="(line, index) in content.text"
            :key="index"
          >
            {{ line }}
          </div>
        </div>
        <img v-bind:src="content.img" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["content", "index", "visible_slide", "direction"],
  computed: {
    ...mapGetters(["getSlides"]),
  },
};
</script>

<style scoped>
.text-left {
  text-align: left;
}
.god {
  position: absolute;
  top: 20vh;
  left: 30vw;
  right: 0;
  bottom: 0;
  height: 50vh;
  width: 50vw;
  overflow: hidden;
  padding: 10px;
}
.carousel-slide {
  border: solid 1px black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.text {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 40vh;
}

.carousel-slide img {
  border: 1px solid black;
  height: auto;
  max-width: 17vw;
}

.left-enter-active {
  animation: leftInAnimation 0.4s ease-in-out;
}
.left-leave-active {
  animation: leftOutAnimation 0.4s ease-in-out;
}

@keyframes leftInAnimation {
  from {
    transform: translateX(100%);
  }
  to {
    transform: translatex(0);
  }
}

@keyframes leftOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

.right-enter-active {
  animation: rightInAnimation 0.4s ease-in-out;
}
.right-leave-active {
  animation: rightOutAnimation 0.4s ease-in-out;
}

@keyframes rightInAnimation {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translatex(0);
  }
}

@keyframes rightOutAnimation {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
