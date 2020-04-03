<template>
  <div class="not-found">
    <svg-icon className="icon" iconClass="404"></svg-icon>
    <div class="text">抱歉，您访问的页面不存在。</div>
    <router-link to="/"
      ><el-button size="small" type="primary">返回首页</el-button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "notFound"
};
</script>
<style lang="scss" scoped>
.not-found {
  .icon {
    margin-top: 15vh;
  }
  text-align: center;
  font-size: 100px;
  .text {
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: rgb(43, 46, 56);
    font-weight: 520;
    margin-bottom: -60px;
  }
}
</style>
