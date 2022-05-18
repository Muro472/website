<template>
  <div class="text">
    <label v-bind:class="this.newFont" v-on:click="click">
      {{ text }}
    </label>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  props: ["visible_slide", "text", "index"],
  data() {
    return {
      font: "one",
    };
  },
  computed: {
    newFont() {
      console.log("update");
      if (this.index === this.visible_slide) {
        return "one";
      } else {
        return "two";
      }
    },
  },
  methods: {
    ...mapMutations(["setVisibleSlide"]),
    click() {
      this.setVisibleSlide(this.index);
    },
  },
};
</script>

<style scoped>
.text {
  text-align: start;
}

.one {
  font-size: 17px;
  font-weight: bold;
}

.two {
  font-size: 16px;
}
</style>
