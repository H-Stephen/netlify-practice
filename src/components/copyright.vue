<template>
  <div class="copyright">
    Copyright ©
    {{ new Date().getFullYear() + " 小太阳 " }}
  </div>
</template>

<script>
export default {
  name: "CopyRight"
};
</script>
<style lang="scss" scoped>
.copyright {
  color: #606266;
  font-size: 12px;
  text-align: center;
  line-height: 40px;
  .beian {
    text-decoration: none;
    color: #606266;
    margin-right: 10px;
  }
}
</style>
