<template>
  <div class="tabContent">
    <el-tag type="info">更改显示方向</el-tag>
    <div class="tabXuan">
      <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
        <el-radio-button label="top">top</el-radio-button>
        <el-radio-button label="right">right</el-radio-button>
        <el-radio-button label="bottom">bottom</el-radio-button>
        <el-radio-button label="left">left</el-radio-button>
      </el-radio-group>
    </div>

    <el-tag type="info">普通样式</el-tag>
    <div class="tabXuan">
      <el-tabs :tab-position="tabPosition" v-model="activeName">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <el-tag type="info">选项卡样式</el-tag>
    <div class="tabXuan">
      <el-tabs :tab-position="tabPosition" v-model="activeName" type="card">
        <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <el-tag type="info">卡片化样式</el-tag>
    <div class="tabXuan">
      <el-tabs :tab-position="tabPosition" type="border-card">
        <el-tab-pane label="用户管理">用户管理</el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "first",
      tabPosition: "top"
    };
  }
};
</script>

<style scoped>
.tabContent {
  margin: 20px 10px;
  border: 1px solid #ddd;
  padding: 20px;
  border-radius: 3px;
}
.tabXuan {
  margin: 5px 0 20px;
  border: 1px solid #ececec;
  padding: 20px;
}
</style>