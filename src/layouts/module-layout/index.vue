<template>
  <div class="module-laout">
    <layout-header></layout-header>
    <app-main></app-main>
  </div>
</template>

<script>
import appMain from "../component/app-main";
import layoutHeader from "../component/layout-header";

export default {
  components: {
    appMain,
    layoutHeader
  }
};
</script>
