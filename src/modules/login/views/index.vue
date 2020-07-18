<template>
  <login-layout class="login-form-container">
    <el-form ref="form" :model="form" :rules="formRules" label-position="left">
      <el-form-item prop="username">
        <el-input
          v-model="form.username"
          placeholder="用户名"
          type="text"
          prefix-icon="el-icon-user"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <el-form-item prop="password">
        <el-input
          v-model="form.password"
          type="password"
          placeholder="密码"
          prefix-icon="el-icon-lock"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>
    </el-form>
    <el-button
      size="medium"
      :loading="loading"
      type="primary"
      class="login-button"
      @click.native.prevent="handleLogin"
      >登录</el-button
    >
  </login-layout>
</template>

<script>
import LoginLayout from "@/layouts/login-layout";
export default {
  components: {
    LoginLayout
  },
  data() {
    return {
      loading: false,
      form: {
        username: "admin",
        password: "123456"
      },
      formRules: {
        username: [
          {
            required: true,
            trigger: "blur",
            message: "请输入用户名"
          }
        ],
        password: [
          {
            required: true,
            trigger: "blur",
            message: "请输入密码"
          }
        ]
      }
    };
  },
  methods: {
    handleLogin() {
      this.loading = true;
      this.$refs.form.validate(async valid => {
        if (!valid) return;
        this.$store
          .dispatch("user/login", this.form)
          .then(() => {
            this.$message.success("登录成功！");
            this.$router.push("/");
          })
          .catch(err => {
            this.$message.error(
              (err.data && err.data.msg) || "登录失败，请重试！"
            );
          })
          .finally(() => {
            this.loading = false;
          });
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.login-form-container {
  .login-button {
    font-weight: 400;
    width: 300px;
    margin: auto;
    display: block;
    height: 40px;
    border-radius: 35px;
    margin-top: 20px;
  }
}
</style>
