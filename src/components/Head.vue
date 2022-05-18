<template>
  <div class="header" v-if="!this.getTrigger">
    <div @click="EDocument_Click" class="header-name">
      <div class="header-name-e">
        <h2>Є</h2>
      </div>
      <div class="header-name-document">
        <h2>Документ</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import router from "../router";
export default {
  name: "header",
  data() {
    return {
      account_button: "Увійти",
      header_account: true,
      route_name: this.$route.name,
    };
  },
  computed: {
    ...mapGetters(["getTrigger"]),
  },
  methods: {
    EDocument_Click() {
      router.push("/");
    },
  },
};
</script>

<style scoped>
.header {
  height: 4vh;
  margin-left: auto;
  margin-right: auto;
  width: 85%;
  display: flex;
  padding: 15px;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.header-account {
  display: flex;
  width: 150px;
  height: 50px;
  text-align: center;
  color: white;
  border: 2px #4caf50 solid;
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.header-account:hover {
  border: 2px white solid;
}

.header-name {
  display: flex;
  align-items: center;
}
.header-name-e {
  text-align: center;
  margin-right: 5px;
}
.header-name-e h2 {
  padding-top: 2px;
  width: 28px;
  height: 28px;
  color: white;
  background-color: black;
  border-radius: 5px;
}
</style>
