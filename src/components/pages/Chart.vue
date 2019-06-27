<template>
  <div class="chart">
    <el-row :gutter="20">
      <el-col :span="12" class="magrinB20">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span>柱状图</span>
          </div>
          <schart class="schart" canvasId="bar" :data="data1" type="bar" :options="options1"></schart>
        </el-card>
      </el-col>
      <el-col :span="12" class="magrinB20">
        <el-card shadow="hover" :body-style="{ padding: '0px'}">
          <div slot="header" class="clearfix">
            <span>环形图</span>
          </div>
          <schart class="schart" canvasId="ring" :data="data2" type="ring" :options="options4"></schart>
        </el-card>
      </el-col>
      <el-col :span="12" class="magrinB20">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span>饼状图</span>
          </div>
          <schart class="schart" canvasId="pie" :data="data2" type="pie" :options="options3"></schart>
        </el-card>
      </el-col>
      <el-col :span="12" class="magrinB20">
        <el-card shadow="hover" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix">
            <span>折线图</span>
          </div>
          <schart class="schart" canvasId="line" :data="data1" type="line" :options="options2"></schart>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Schart from "vue-schart";
export default {
  data() {
    return {
      data1: [
        { name: "2012", value: 1141 },
        { name: "2013", value: 1499 },
        { name: "2014", value: 2260 },
        { name: "2015", value: 1170 },
        { name: "2016", value: 970 },
        { name: "2017", value: 1450 }
      ],
      data2: [
        { name: "指标1", value: 1200 },
        { name: "指标2", value: 1222 },
        { name: "指标3", value: 1283 },
        { name: "指标4", value: 1314 },
        { name: "指标5", value: 2314 }
      ],
      options1: {
        title: "柱状图示例",
        autoWidth: true, // 设置宽高自适应
        showValue: false,
        bgColor: "#fff",
        fillColor: "#3B3B3B",
        contentColor: "#949494",
        yEqual: 7
      },
      options2: {
        title: "折线图示例",
        bgColor: "#112030",
        titleColor: "#fff",
        fillColor: "#C6C6C6",
        contentColor: "#eeeeee",
        axisColor: "#FBF8F8"
      },
      options3: {
        title: "饼状图示例",
        bgColor: "#304244",
        titleColor: "#ffffff",
        legendColor: "#ffffff",
        radius: 120
      },
      options4: {
        title: "环形图示例",
        bgColor: "#5d5e5f",
        titleColor: "#ffffff",
        legendColor: "#ffffff",
        radius: 120,
        innerRadius: 80
      }
    };
  },
  components: {
    Schart
  }
};
</script>

<style scoped>
.schart {
  height: 500px;
}
.chart {
  /* margin: 10px; */
  /* border: 1px solid #eee; */
  border-radius: 3px;
  padding: 20px 10px;
}
.magrinB20 {
  margin-bottom: 20px;
}
.clearfixRing {
  background: rgb(93, 94, 95);
}
</style>