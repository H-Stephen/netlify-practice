<template>
  <div class="layout-header">
    <div class="left">
      <img src="@/assets/images/v.png" alt="" />
      TEMPLATE
    </div>
    <div class="right">
      <el-dropdown trigger="click" placement="bottom" @command="handleCommand">
        <span class="username-text"
          >{{ username
          }}<i class="el-icon-arrow-down el-icon--right set-Iconcolor"
        /></span>
        <el-dropdown-menu slot="dropdown" class="user-drop-menu">
          <el-dropdown-item
            v-for="(item, index) in dropdownList"
            :key="index"
            :command="item.command"
            :divided="item.divided"
            >{{ item.title }}</el-dropdown-item
          >
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dropdownList: [
        {
          title: "个人中心",
          command: "my-center"
        },
        {
          title: "项目地址",
          command: "project-address"
        },
        {
          title: "退出登录",
          command: "logout",
          divided: true
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["username"])
  },
  methods: {
    handleCommand(command) {
      switch (command) {
        case "logout":
          this.$store.dispatch("user/logout");
          break;
        case "project-address":
          window.open("https://github.com/H-Stephen/available-template");
          break;
        default:
          console.error("no match！");
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.layout-header {
  height: $headerHeight;
  background: $headerBg;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  .left {
    display: flex;
    align-items: center;
    img {
      height: 26px;
      width: 26x;
      margin-right: 5px;
    }
  }
  .right {
    .username-text {
      cursor: pointer;
      color: #fff;
    }
  }
}
</style>
