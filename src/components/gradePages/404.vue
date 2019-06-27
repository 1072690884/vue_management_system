<template>
  <div class="error">
    <div class="error-code">404</div>
    <div class="error-des">你访问的页面丢了~~</div>
    <img class="error-img" src="../../assets/img/253042961128097936.png" alt>
    <div class="error-btns">
      <router-link to="/">
        <el-button type="primary" size="large">返回首页</el-button>
      </router-link>
      <el-button class="error-btn" type="primary" size="large" @click="goBack">返回上一页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.error {
  width: 100%;
  min-height: 100vh;
  background: #fff;
}
.error-img {
  display: block;
  margin: 0 auto;
}
.error-des {
  width: 100%;
  text-align: center;
  font-size: 24px;
  margin: 30px 0 10px;
}
.error-code {
  font-size: 200px;
  font-weight: 600;
  color: #353535;
  text-shadow: 6px 6px 10px #696969;
  box-shadow: 0px 5px 10px rgba(156, 156, 156, 0.35);
  text-align: center;
}
.error-btns {
  margin: 0 auto;
  text-align: center;
}
.error-btns button {
  margin: 0 10px;
}
</style>