<template>
  <div id="app">
    <router-view class="app-container" />
    <copy-right />
  </div>
</template>

<script>
import CopyRight from "@/components/copyright";
export default {
  components: {
    CopyRight
  }
};
</script>

<style lang="scss" scoped>
#app {
  .app-container {
    min-height: calc(100vh - 40px); // 40px是copyright的高度
  }
}
</style>
