<template>
  <el-header :style="`height:${breadcrumbHeight}`" class="bread-crumb">
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <el-breadcrumb-item
          v-for="item of breadcrumb"
          :key="item.path"
          :to="item.to"
          >{{ item.name }}</el-breadcrumb-item
        >
      </transition-group>
    </el-breadcrumb>
  </el-header>
</template>

<script>
import { mapGetters } from "vuex";
import { breadcrumbHeight } from "@/styles/variable.scss";
export default {
  computed: {
    ...mapGetters("bread", ["breadcrumb"])
  },
  data() {
    return {
      breadcrumbHeight
    };
  },
  watch: {
    "$route.fullPath": {
      handler() {
        this.$store.dispatch("bread/generateBreadcrumb", {
          $route: this.$route,
          $router: this.$router
        });
      },
      immediate: true
    }
  }
};
</script>

<style lang="scss" scoped>
.bread-crumb {
  display: flex;
  align-items: center;
  height: $breadcrumbHeight;
  padding-left: 12px;
  ::v-deep .el-breadcrumb__inner {
    font-weight: 400 !important;
    color: #7b899c !important;
  }
  ::v-deep .el-breadcrumb__inner.is-link {
    color: #606266 !important;
    &:hover {
      color: #5a93c7 !important;
    }
  }
}
</style>
