<template>
  <div class="selections">
    <Carousel> </Carousel>
  </div>
</template>

<script>
import Carousel from "@/components/Carousel.vue";

export default {
  data() {
    return {};
  },
  components: {
    Carousel,
  },
};
</script>

<style scoped>
.selections {
  width: 100%;
  height: 100%;
}
</style>
