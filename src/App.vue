<template>
  <div class="app">
    <div class="app-header">
      <Head />
    </div>
    <div class="app-page">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Head from "@/components/Head.vue";
export default {
  components: {
    Head,
  },
};
</script>

<style>
html body {
  margin: 0;
  padding: 0;
}

.app-header {
  background-color: #4caf50;
  height: auto;
}
</style>
