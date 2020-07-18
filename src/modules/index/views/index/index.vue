<template>
  <div class="index">
    欢迎，{{ username }}
    <div>{{ avatar }}</div>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      avatar: state => state.user.avatar
    }),
    ...mapGetters(["username"])
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss">
@import "./index.scss";
</style>
