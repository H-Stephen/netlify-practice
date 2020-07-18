<template>
  <div class="index">
    欢迎，{{ username }}
    <div>token: {{ token }}</div>
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
      token: state => state.user.token
    }),
    ...mapGetters(["username"])
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="scss"></style>
