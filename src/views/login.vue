<template>
  <el-container>
    <el-main>
      <el-button @click="login()">登录</el-button>
    </el-main>
    <router-link to="dashboard">前往</router-link>
  </el-container>
</template>

<script>
export default {
  name: "Home",
  components: {

  },
  methods:{
    login(){
      console.log('OK');
      this.$router.push('/dashboard')
    }
  }
};
</script>
