<template>
  <div>
    <button v-on:click="this.message = 'onClick'">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Message: "",
    };
  },

  Methods: {
    OnClick() {
      This.message = "hello";
    },
  },
};
</script>
