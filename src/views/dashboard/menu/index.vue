<template>
  <div class="menu-box">
    <el-menu
      :default-active="routepath"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :background-color="setcolor"
      router
    >
      <div v-for="item in routersList" :key="item.path">
        <el-menu-item v-if="item.children.length == 1" :index="item.children[0].path">
          <i :class="item.children[0].meta.icon"></i>
          <span slot="title">{{ item.children[0].meta.title }}</span>
        </el-menu-item>

        <el-submenu v-if="item.children.length > 1" :index="item.path">
          <template slot="title">
            <i :class="item.meta.icon"></i>
            <span slot="title">{{ item.meta.title }}</span>
          </template>
          <el-menu-item-group
            v-for="groupItem in item.children"
            :key="groupItem.path"
          >
            <el-menu-item :index="groupItem.path">{{
              groupItem.meta.title
            }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  computed: {
  },
  components: {},
  props: {
    menuitem: {
      type: Array,
    },
    setcolor:{
      type:String
    }
  },
  data() {
    return {
      isCollapse: false,
      routersList: [],
      routepath:''
    };
  },
  created() {
    this.routepath = this.$route.path
  },
  watch:{
    menuitem:function(val){
      this.routersList = val
    },
    setcolor:function(val){
      this.setcolor = val
    }
  },
  mounted() {},
  methods: {},
};
</script>
<style lang="less" scoped>
.menu-box {
  height: 100%;
  .el-menu {
    height: 100%;
    .el-submenu {
      text-align: left;
    }
    .el-menu-item {
      text-align: left;
    }
  }
}
</style>
