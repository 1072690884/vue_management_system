<template>
  <div class="homeBox">
    <Header></Header>

    <SideBar></SideBar>
    <div class="content-box" :class="{'content-collpse':collapse}">
      <Tag></Tag>
      <div class="content">
        <div class="routerContent">
          <router-view></router-view>
        </div>
        <Footer></Footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import SideBar from "@/components/common/Sidebar";
import Tag from "@/components/common/Tag";

export default {
  components: {
    Header,
    Footer,
    SideBar,
    Tag
  },
  computed: {
    collapse() {
      return this.$store.state.navTepy;
    }
  }
};
</script>

<style scoped>
.content-box {
  position: absolute;
  right: 0;
  left: 249px;
  top: 70px;
  bottom: 0;
  transition: all 0.3s;
  overflow: hidden;
  z-index: 1;
  background: #fff;
}
.content {
  width: 100%;
  height: calc(100% - 25px);
  overflow: auto;
}
.content-collpse {
  left: 64px;
}
.routerContent {
  min-height: 100%;
}
</style>
