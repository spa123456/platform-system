<template>
  <el-container>
    <el-aside>
      菜单
    </el-aside>
    <el-main>
      <el-container>
        <el-header>
          顶部导航
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>
  </el-container>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
      this.getRouterList()
  },
  mounted() {
    this.$router.push("/home");
  },
  methods: {
    getRouterList() {
      this.$axios.get("/api/getMenu").then((res) => {
          console.log(res.data.list);
        this.$store.dispatch('setRouterDataTree',res.data.list)
      });
    },
  },
};
</script>
<style lang="less" scoped></style>
