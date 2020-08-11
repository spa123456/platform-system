<template>
  <el-container>
    <el-aside width="230px">
      <div class="log-box">
        LOGO
      </div>
      <Menu class="menu-modlu" :menuitem="menuitem" :setcolor="menuColor"></Menu>
    </el-aside>
    <el-main class="main-content-main">
      <el-container>
        <el-header height="50px" class="main-header-nav"> </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-main>
    <el-button
      type="primary"
      icon="el-icon-setting"
      style="position: fixed;top:160px;right:10px"
      @click="drawer = true"
    ></el-button>
    <!-- 设置弹框 -->
    <el-drawer :visible.sync="drawer" direction="rtl" size="350px" :modal="false">
      <p>导航菜单颜色</p>
      <el-color-picker v-model="menuColor" @change="menuChange"></el-color-picker>
      <p>顶部导航颜色</p>
      <el-color-picker v-model="navColor"></el-color-picker>
    </el-drawer>
  </el-container>
</template>
<script>
import Menu from "./menu/index";
import { mapGetters } from "vuex";
export default {
  components: { Menu },
  data() {
    return {
      menuitem: [],
      drawer: false,
      menuColor: "#fff",
      navColor: "#fff",
    };
  },
  computed: {
    ...mapGetters(["premiss_routes","set_color"]),
  },
  created() {
    this.getRouterList().then(() => {
      this.menuitem = this.premiss_routes;
    });
    this.menuColor = this.set_color.menuColor
  },
  mounted() {},
  methods: {
    async getRouterList() {
      await this.$axios.get("/api/getMenu").then((res) => {
        this.$store.dispatch("setRouterDataTree", res.data.list);
      });
    },
    /*
    **  @description 改变菜单颜色
    **  @param {} 
    **  @return 
    **  @author shipingan
    */
    menuChange(){
      this.$store.dispatch("setmenucolor",this.menuColor)
      this.$store.dispatch("setnavcolor",this.navColor)
      this.drawer = false
    },
  },
};
</script>
<style lang="less" scoped>
.el-container {
  .el-aside {
    display: flex;
    flex-direction: column;

    .log-box {
      height: 50px !important;
      box-sizing: border-box;
      border-right: 1px solid #e6e6e6;
    }
    .menu-modlu {
      flex: 1;
    }
  }
  .main-content-main {
    margin: 0;
    padding: 0;
    .main-header-nav {
      box-shadow: 0px 3px 5px #e6e6e6;
    }
  }
}
</style>
