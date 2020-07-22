<template>
  <div>
    <div v-for="m in menuList" :key="m.id" class="menu-item">
      <el-menu-item v-if="!m.children" :index="m.path">
        <svg-icon :icon-class="m.icon"></svg-icon>
        <span slot="title" class="item-title">{{ m.name }}</span>
      </el-menu-item>

      <el-submenu v-else :index="m.id + ''">
        <template slot="title">
          <svg-icon :icon-class="m.icon"></svg-icon>
          <span class="sub-menu-title">{{ m.name }}</span>
        </template>
        <menu-item :menu-list="m.children"></menu-item>
      </el-submenu>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    /**
     * 侧边栏菜单
     *
     * 数组中的元素对象结构
     * @type {menuItem: object}
     * @property {string} id 菜单 id
     * @property {string} name 菜单名
     * @property {string} icon icon 路径或者 icon 名字
     * @property {menuItem[]} children 菜单名
     */
    menuList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.menu-item {
  user-select: none;

  .menu-item-img {
    width: 16px;
    margin-right: 3px;
  }
}
</style>
