<template>
  <div class="header">
    <div class="collapse-btn" @click="collapseChage">
      <i class="el-icon-more"></i>
    </div>
    <div class="logo">VUE后台管理系统DEMO</div>
    <div class="header-right">
      <div class="btn-fullsceen" @click="handeFull">
        <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
          <i class="el-icon-font-bianda"></i>
        </el-tooltip>
      </div>
      <div class="btn-bell">
        <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
          <router-link to="/tabs">
            <i class="el-icon-bell"></i>
          </router-link>
        </el-tooltip>
        <span class="btn-bell-badge" v-if="message"></span>
      </div>
      <div class="user-avator">
        <img src="../../assets/img/logo.gif" alt>
      </div>
      <div class="header-nav-list">
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>

          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zuozhe">关于作者</el-dropdown-item>
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 2,
      username:
        localStorage.getItem("ms_username") === "admin" ? "管理员" : "普通用户",
      fullscreen: false
    };
  },
  methods: {
    collapseChage() {
      // this.collapse = !this.collapse;
      if (this.$store.state.navTepy) {
        this.$store.commit("setState", false);
      } else {
        this.$store.commit("setState", true);
      }
    },
    handeFull() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          // w3c提议全屏
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
          // webkit全屏
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
          // firefox10+全屏
        } else if (document.msExitFullscreen) {
          // ie11
          document.msExitFullscreen();
        } else if (typeof window.ActiveXObject != "undefined") {
          // ie8+
          var wscript = new ActiveXObject("WScript.Shell");

          if (wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        } else if (typeof window.ActiveXObject != "undefined") {
          // ie8+
          var wscript = new ActiveXObject("WScript.Shell");
          if (wscript != null) {
            wscript.SendKeys("{F11}");
          }
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    handleCommand(command) {
      console.log(command);
      if (command == "loginout") {
        localStorage.removeItem("ms_username");
        this.$message({
          message: "退出登录",
          type: "success",
          center: true
        });
        this.$router.push({ path: "/login" });
      } else {
        this.$message({
          message: "创建中尽情期待",
          type: "success",
          center: true
        });
      }
    }
  }
};
</script>

<style scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background: #3a3a3a;
  box-shadow: 0px 2px 9px rgba(0, 0, 0, 0.44);
}
.collapse-btn {
  height: 70px;
  padding: 0 20px;
  float: left;
  line-height: 70px;
  transition: all 0.3s;
}
.collapse-btn:hover {
  background: #252525;
}
.logo {
  float: left;
  line-height: 70px;
  padding: 0 10px;
}
.header-right {
  float: right;
  height: 70px;
  line-height: 70px;
  padding-right: 50px;
}
.header-right > div {
  float: left;
  margin: 0 8px;
}
.btn-fullsceen {
  cursor: pointer;
  /* transform: rotate(-45deg); */
}
.btn-bell {
  position: relative;
}
.btn-bell-badge {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: red;
  display: block;
  position: absolute;
  position: absolute;
  right: 0;
  top: 22px;
}

.user-avator img {
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.header-nav-list {
  cursor: pointer;
}
</style>
