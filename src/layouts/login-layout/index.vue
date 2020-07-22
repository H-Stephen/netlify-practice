<template>
  <div class="layout-login">
    <div class="login-form">
      <h1 class="title"><svg-icon icon-class="home"></svg-icon> 系统登录</h1>
      <slot />
    </div>
    <div class="buttom-wrapper">
      <copyright />
    </div>
  </div>
</template>

<script>
import Copyright from "@/components/copyright";

export default {
  name: "Login",
  components: {
    Copyright
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
$basic-font-family: pingfangsc-regular;
$bg: #f0f2f5;

.layout-login {
  position: absolute;
  padding: 8% 0 0;
  width: 100%;
  min-height: 100vh;
  background-color: $bg;
  background-image: url(https://deepexi.oss-cn-shenzhen.aliyuncs.com/xpaas-console/bg_login.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .title {
    font-size: 26px;
    font-weight: 400;
    color: #2d3a4b;
    text-align: center;
    margin-bottom: 25px;
    i {
      font-size: 30px;
    }
  }
  .login-form {
    width: 470px;
    margin: 0 auto 100px;
    padding: 35px 70px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.1);
  }

  .buttom-wrapper {
    width: 100%;
    position: absolute;
    bottom: 5px;
  }
}
</style>
