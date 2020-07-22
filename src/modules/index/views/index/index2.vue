<template>
  <div class="index">
    <div>index2</div>
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
  mounted() {},
  methods: {}
};
</script>

<style lang="scss"></style>
