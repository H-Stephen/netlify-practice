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
    this.$message.success("777777777");
  },
  methods: {}
};
</script>

<style lang="scss"></style>
