<template>
  <div class="index">
    <div>token: {{ token }}</div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState({
      token: state => state.user.token
    })
  },
  mounted() {
    const obj = {
      a: {
        b: 2
      }
    };
    console.log(obj?.a?.b); // 2
    console.log(obj?.a?.c); // undefined
  },
  methods: {}
};
</script>

<style lang="scss"></style>
