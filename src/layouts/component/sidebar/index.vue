<template>
  <div :class="{ hideSidebar: collapse }" class="sidebar-container">
    <el-menu
      :collapse="collapse"
      :default-active="defaultActive"
      :collapse-transition="false"
      background-color="#304156"
      text-color="#A7A8AD"
      active-text-color="#59b6f9"
      router
      class="aside-menu"
    >
      <el-scrollbar wrap-class="scrollbar-wrapper">
        <menu-item :menu-list="menuList"></menu-item>
      </el-scrollbar>
    </el-menu>
    <div class="fix-btn-wrap">
      <div class="collapse-btn" @click="collapse = !collapse">
        <svg-icon class="btn-icon" icon-class="expand"></svg-icon>
      </div>
    </div>
  </div>
</template>

<script>
import MenuItem from "./menu-item";

export default {
  components: {
    MenuItem
  },

  props: {
    menuList: {
      type: Array,
      default: () => []
    }
  },

  computed: {
    defaultActive() {
      return this.$route.meta.activeMenu || this.$route.path;
    }
  },

  data() {
    return {
      collapse: false
    };
  }
};
</script>

<style lang="scss">
$footerHeight: 40px;
.sidebar-container {
  transition: width 0.28s;
  height: calc(100vh - #{$headerHeight});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 180px !important;

  .el-menu {
    box-sizing: border-box;
    flex: 1;
    border: none;
    height: calc(100vh - #{$footerHeight} - #{$headerHeight});
    width: 100% !important;

    .el-menu-item {
      &:hover {
        background-color: #263445;
      }
    }

    [class*="icon"] {
      font-size: 14px;
      margin-right: 5px;
    }
  }

  .fix-btn-wrap {
    height: $footerHeight;
    .collapse-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: $footerHeight;
      background: #304156;
      border-top: 1px solid #6b7279;
      cursor: pointer;
    }

    .btn-icon {
      transform: rotate(180deg);
      font-size: 16px;
      width: 16px;
    }
  }

  // 折叠
  &.hideSidebar {
    width: 64px !important;

    .logo {
      padding-left: 13px;
    }

    .scrollbar-wrapper {
      height: calc(100vh - #{$footerHeight} - #{$headerHeight});
    }

    .el-submenu__title {
      text-align: center;
    }

    // 有子菜单
    .sub-menu-title,
    .el-submenu__icon-arrow {
      display: none;
    }

    [class*="icon"] {
      font-size: 16px;
      margin: 0;
    }

    .fix-btn-wrap {
      .btn-icon {
        transform: rotate(0deg);
      }
    }
  }

  // when menu collapsed
  .menu--vertical {
    // the scroll bar appears when the subMenu is too long
    > .menu--popup {
      max-height: 100vh;
      overflow-y: auto;

      &::-webkit-scrollbar {
        width: 6px;
      }

      &::-webkit-scrollbar-thumb {
        border-radius: 20px;
      }
    }
  }
}
// menu hover

.el-submenu .el-menu-item {
  background-color: #1f2d3d !important;

  &:hover {
    background-color: #192431 !important;
  }
}
</style>
