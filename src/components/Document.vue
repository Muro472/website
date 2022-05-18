<template>
  <div v-bind:class="this.mainClass">
    <div
      class="web-document-main-right"
      v-for="(line, index) in getRightText"
      :key="index"
    >
      {{ line }}
    </div>
    <div class="web-document-main-center">
      <strong>Заява</strong>
    </div>
    <div
      class="web-document-main-left"
      v-for="(line, index) in getLeftText"
      :key="index"
    >
      {{ line }}
    </div>
    <div class="trigger" v-if="this.getTrigger">
      {{ triggerPicture }}
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "../router";
export default {
  data() {
    return {
      mainClass: "side",
    };
  },
  computed: {
    ...mapGetters(["getRightText", "getLeftText", "getTrigger"]),
    triggerPicture() {
      setTimeout(this.takePicture, 1000);
      this.setTrigger(false);
    },
  },
  methods: {
    ...mapMutations(["setTrigger"]),
    takePicture() {
      print();
      router.push("selection");
    },
  },
};
</script>

<style scoped>
.web-document-main-right {
  text-align: right;
}
.web-document-main-center {
  text-align: center;
}

.web-document-main-right,
web-document-main-center {
  margin: 10px;
}
</style>
