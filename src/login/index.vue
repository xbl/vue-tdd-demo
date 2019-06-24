<template>
  <ul>
    <li>用户名：<input type="text" class="username" v-model="user.username"></li>
    <li>密码：<input type="text" class="password" v-model="user.password"></li>
    <li><button class="submit" @click="onSubmit" :disabled="!validate">提交</button></li>
  </ul>
</template>

<script>
import Service from './service';

export default {
  data: () => ({
    user: {
      username: '',
      password: '',
    },
  }),
  computed: {
    validate() {
      return this.user.username && this.user.password;
    },
  },
  methods: {
    async onSubmit() {
      const response = await Service.login(this.user);
      if (response.status === 200) {
        this.loginSuccess();
        return;
      }
      this.loginFailure();
    },
    loginSuccess() {
      this.$router.push('/');
    },
    loginFailure() {
      alert('用户名、密码错误，请稍后再试！');
    },
  },
};
</script>
