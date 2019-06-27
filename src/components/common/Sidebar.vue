<template>
  <div class="sidebar">
    <el-menu
      class="sidebar-el-menu"
      :default-active="onRoutes"
      :collapse="collapse"
      background-color="#444444"
      text-color="#b7b7b7"
      unique-opened
      router
    >
      <template v-for="item in items">
        <!-- 判断是否包含子菜单 -->
        <template v-if="item.subs">
          <el-submenu :index="item.index" :key="item.index">
            <!-- 一级子菜单 -->
            <template slot="title">
              <i :class="item.icon"></i>
              <span slot="title">{{ item.title }}</span>
            </template>

            <!-- 二级子菜单 -->
            <template v-for="subItem in item.subs">
              <!-- 判断是否含有三级菜单 -->
              <el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                <template slot="title">{{ subItem.title }}</template>
                <el-menu-item
                  v-for="(threeItem,i) in subItem.subs"
                  :key="i"
                  :index="threeItem.index"
                >{{ threeItem.title }}</el-menu-item>
              </el-submenu>

              <el-menu-item v-else :index="subItem.index" :key="subItem.index">{{ subItem.title }}</el-menu-item>
            </template>
          </el-submenu>
        </template>

        <template v-else>
          <el-menu-item :index="item.index" :key="item.index">
            <i :class="item.icon"></i>
            <span slot="title">{{ item.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          icon: "el-icon-font-kuandai",
          index: "dash",
          title: "首页"
        },
        {
          icon: "el-icon-font-fapiao",
          index: "table",
          title: "表格"
        },
        {
          icon: "el-icon-font-liebiao",
          index: "tab",
          title: "tab选项卡"
        },
        {
          icon: "el-icon-tickets",
          index: "3",
          title: "表单",
          subs: [
            {
              index: "form",
              title: "基本表单"
            },
            {
              index: "3-2",
              title: "三级菜单",
              subs: [
                {
                  index: "rich",
                  title: "富文本编辑器"
                },
                {
                  index: "mark",
                  title: "markdown编辑器"
                }
              ]
            },
            {
              index: "up",
              title: "文件上传"
            }
          ]
        },
        {
          icon: "el-icon-picture",
          index: "icon",
          title: "自定义图标"
        },
        {
          icon: "el-icon-font-jingxuan",
          index: "chart",
          title: "schart图表"
        },
        {
          icon: "el-icon-font-xiugaidingdan",
          index: "draglist",
          title: "拖拽列表"
        },
        {
          icon: "el-icon-info",
          index: "6",
          title: "错误处理",
          subs: [
            {
              index: "403",
              title: "权限测试"
            },
            {
              index: "404",
              title: "404页面"
            }
          ]
        }
      ]
    };
  },
  computed: {
    onRoutes() {
      return this.$route.path.replace("/", "");
    },
    collapse() {
      return this.$store.state.navTepy;
    }
  }
};
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
  width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
  width: 250px;
}
.sidebar > ul {
  height: 100%;
}
</style>
