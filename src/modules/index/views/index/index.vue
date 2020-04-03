<template>
  <div class="index">
    <cat class="cat" />
  </div>
</template>

<script>
import Cat from "vuepress-plugin-cat/cat";

export default {
  components: {
    Cat
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
