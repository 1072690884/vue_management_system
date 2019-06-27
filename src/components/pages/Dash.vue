<template>
  <div class="dash">
    <el-row :gutter="20" class="magrinB20">
      <el-col :span="6">
        <el-card shadow="hover" class="magrinB20">
          <div class="box-card">
            <div class="user-info">
              <img src="../../assets/img/logo.gif" alt>
              <div class="user-info-card">
                <div class="user-info-name">{{name}}</div>
                <div class="user-info-des">{{role}}</div>
              </div>
            </div>
            <div class="user-info-content">
              <div class="user-info-list">
                上次登录时间
                <span>2018-01-01</span>
              </div>
              <div class="user-info-list">
                上次登录地点
                <span>北京</span>
              </div>
            </div>
          </div>
        </el-card>

        <el-card shadow="hover" class="magrinB20" :body-style="{padding: '0px'}">
          <div class="flexCard cardBlue">
            <i class="el-icon-font-wodexiao flexIcon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">1234</div>
              <div>用户访问量</div>
            </div>
          </div>
        </el-card>

        <el-card shadow="hover" class="magrinB20" :body-style="{padding: '0px'}">
          <div class="flexCard flexCardRight cardGreen">
            <i class="el-icon-font-pinglun flexIcon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">999+</div>
              <div>系统消息</div>
            </div>
          </div>
        </el-card>

        <el-card shadow="hover" :body-style="{padding: '0px'}">
          <div class="flexCard cardRed">
            <i class="el-icon-font-fenxiang flexIcon"></i>
            <div class="grid-cont-right">
              <div class="grid-num">8888</div>
              <div>分享量</div>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col :span="18">
        <swiper :options="swiperOption" class="swiper" ref="mySwiper">
          <swiper-slide v-for="(item,index) in carousel" v-bind:key="index">
            <img src="../../assets/image.png" :data-src="item" class="swiper-lazy">
            <div class="swiper-lazy-preloader"></div>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <el-col :span="12">
        <el-card shadow="hover">
          <schart
            ref="bar"
            class="schart"
            canvasId="bar"
            :data="data"
            type="bar"
            :options="options"
          ></schart>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card shadow="hover">
          <schart
            ref="line"
            class="schart"
            canvasId="line"
            :data="data"
            type="line"
            :options="options2"
          ></schart>
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
      name: localStorage.getItem("ms_username") || "访客",
      carousel: [
        "https://picsum.photos/1920/1080?i=1",
        "https://picsum.photos/1920/1080?i=2",
        "https://picsum.photos/1920/1080?i=3",
        "https://picsum.photos/1920/1080?i=4",
        "https://picsum.photos/1920/1080?i=5"
      ],
      swiperOption: {
        loop: true,
        autoplay: true,
        delay: 5000,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        lazy: {
          loadPrevNext: true
        }
      },
      data: [
        {
          name: "2018/09/04",
          value: 1083
        },
        {
          name: "2018/09/05",
          value: 941
        },
        {
          name: "2018/09/06",
          value: 1139
        },
        {
          name: "2018/09/07",
          value: 816
        },
        {
          name: "2018/09/08",
          value: 327
        },
        {
          name: "2018/09/09",
          value: 228
        },
        {
          name: "2018/09/10",
          value: 1065
        }
      ],
      options: {
        title: "简单柱状图",
        bgColor: "#ffffff", // 默认背景颜色
        fillColor: "#1E9FFF", // 默认填充颜色
        axisColor: "#666666",
        showValue: true, //是否在图标上显示数值
        autoWidth: true
      },
      options2: {
        title: "简单线形图",
        fillColor: "#1E9FFF",
        axisColor: "#666666",
        contentColor: "#EEEEEE",
        bgColor: "#ffffff"
      }
    };
  },
  components: {
    Schart
  },
  computed: {
    role() {
      return this.name === "admin" ? "管理员" : "普通用户";
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  created() {
    this.handleListener();
  },
  activated() {
    this.handleListener();
  },
  deactivated() {
    this.handleListener();
  },
  methods: {
    handleListener() {
      // 调用renderChart方法对图表进行重新渲染
      window.addEventListener("resize", this.renderChart);
    },
    renderChart() {
      this.$refs.bar.renderChart();
      this.$refs.line.renderChart();
    }
  }
};
</script>

<style scoped>
.dash {
  padding: 20px 10px;
}
.box-card {
  width: 100%;
  display: flex;
  align-items: center;
}
.magrinB20 {
  margin-bottom: 20px;
}
.user-info {
  width: 140px;
  flex-shrink: 0;
  text-align: center;
  padding-right: 20px;
  border-right: 1px solid #ebeef5;
}
.user-info img {
  width: 100px;
}
.user-info-card {
  width: 100%;
  text-align: center;
  margin-top: 15px;
}
.user-info-name {
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-info-des {
  color: #8c8c8c;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.user-info-content {
  width: 100%;
  text-align: center;
}
.user-info-list {
  margin-bottom: 15px;
}
.user-info-list span {
  width: 100%;
  display: block;
  margin-top: 5px;
  font-size: 18px;
  font-weight: 600;
}
.flexCard {
  display: flex;
  height: 140px;
  align-items: center;
}
.flexCardRight {
  flex-direction: row-reverse;
}
.flexCard .flexIcon {
  width: 140px;
  flex-shrink: 0;
  height: 140px;
  line-height: 140px;
  display: block;

  font-size: 50px;
  color: #fff;
  text-align: center;
}

.grid-cont-right {
  text-align: center;
  width: 100%;
}
.grid-num {
  font-size: 26px;
  font-weight: 600;
}
.cardBlue .flexIcon {
  background: #3975d2;
}
.cardBlue .grid-num {
  color: #3975d2;
}

.cardGreen .flexIcon {
  background: #64d572;
}
.cardGreen .grid-num {
  color: #64d572;
}
.cardRed .flexIcon {
  background: #f24343;
}
.cardRed .grid-num {
  color: #f24343;
}
.schart {
  height: 350px;
}
</style>
<style>
.swiper .swiper-pagination .swiper-pagination-bullet {
  background: #000 !important;
  border: 2px solid #fff !important;
}
.swiper .swiper-pagination .swiper-pagination-bullet-active {
  background: #ffffff !important;
  border: 2px solid #000 !important;
}
</style>
