<template>
  <div class="page">
    <div class="page-head"><label>Сайт твого документу</label></div>
    <div class="page-head-borderb"></div>
    <div class="page-text">
      <label>
        <h2>
          Є Документ дозволяє тобі завантажити будь-який документ для твоєї
          роботи за допомогою одного кліку
        </h2>
      </label>
    </div>
    <div class="page-button">
      <router-link to="/selection" class="page-button-click">
        Розпочати
      </router-link>
    </div>
    <Features class="page-features" />
  </div>
</template>

<script>
import Features from "@/components/Features.vue";
export default {
  name: "Introduction",
  components: {
    Features,
  },
};
</script>

<style scoped>
.page {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.page-text {
  width: 600px;
}
.page-head {
  margin-top: 200px;
  font-weight: 1000;
  font-size: 72px;
}
.page-head-borderb {
  background-color: black;
  border: 1px solid black;
  border-radius: 5px;
  height: 10px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
}

.page-button {
  margin-left: auto;
  margin-right: auto;
  background-color: green;
  width: 250px;
  height: 60px;
  display: block;
  padding: 5px;
  border-radius: 40px;
}

.page-button-click {
  border: 5px solid white;
  display: block;
  height: 50px;
  width: 240px;
  border-radius: 30px;
  text-decoration: none;
  color: white;
  font-size: 30px;
  line-height: 45px;
  font-family: Arial, sans-serif;
  transition: 0.3s;
}

.page-button-click:hover {
  background-color: white;
  color: green;
  font-size: 35px;
}
.page-features {
  width: 80%;
}
</style>
