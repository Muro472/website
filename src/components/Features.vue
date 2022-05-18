<template>
  <div class="feature">
    <div class="feature-elem" v-for="(feature, index) in features" :key="index">
      <img class="feature-elem-icon" v-bind:src="feature.icon" />
      <div class="feature-elem-title">
        <h2>
          {{ feature.title }}
        </h2>
      </div>
      <hr />
      <div class="feature-elem-text">{{ feature.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          icon: "../../public/brain2.png",
          title: "Простота",
          text: "Будь-хто розбереться",
        },
        {
          icon: "../../public/ease.png",
          title: "Легкість",
          text: "Працює з будь-якого гаджету",
        },
        {
          icon: "../../public/speed.png",
          title: "Швидкість",
          text: "Завантаження в один клік",
        },
      ],
    };
  },
};
</script>

<style scoped>
.feature {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin-top: 200px;
}
.feature-elem-icon {
  height: 100px;
}
.feature-elem-title {
  margin-top: 20px;
}
</style>
