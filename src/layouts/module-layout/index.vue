<template>
  <div class="module-laout">
    <layout-header></layout-header>
    <el-container>
      <sidebar :menuList="menuList" />
      <el-main>
        <app-main></app-main>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import appMain from "../component/app-main";
import layoutHeader from "../component/layout-header";
import Sidebar from "../component/sidebar/index";

export default {
  components: {
    appMain,
    layoutHeader,
    Sidebar
  },
  data() {
    return {
      menuList: [
        {
          name: "音乐专栏",
          icon: "music",
          path: "/index"
        },
        {
          name: "篮球专栏",
          icon: "basketball",
          children: [
            {
              name: "篮球专栏1",
              path: "/index2"
            }
          ]
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.el-main {
  padding: 0;
}
</style>
