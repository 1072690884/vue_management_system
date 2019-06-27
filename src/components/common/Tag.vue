<template>
  <div class="tag">
    <div class="tag-list">
      <dir
        class="tag-li"
        v-for="(item,index) in tagList"
        :class="{'active':isActive(item.path)}"
        :key="index"
      >
        <router-link :to="item.path" class="tag-li-title">{{item.title}}</router-link>
        <span class="tages-li-icon" @click="close(index)">
          <i class="el-icon-close"></i>
        </span>
      </dir>
    </div>

    <div class="dropDown">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          标签选项
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="a">关闭其他</el-dropdown-item>
          <el-dropdown-item command="b">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagList: []
    };
  },
  methods: {
    isActive(obj) {
      return obj == this.$route.fullPath;
    },
    setTags(obj) {
      //检测当前标签列表有没有当前跳转的页面
      // some查询数组内是否含有某一个元素
      const list = this.tagList.some(item => {
        return item.path === obj.fullPath;
      });

      //如果没有就添加一个
      if (!list) {
        //  最多10个标签，超过删除第一个
        if (this.tagList.length >= 10) {
          this.tagList.shift();
        }
        this.tagList.push({
          title: obj.meta.title,
          path: obj.fullPath,
          name: obj.name
        });
      }
    },
    handleCommand(com) {
      if (com == "a") {
        // filter删除不符合条件的所有元素并返回新数组
        const curItem = this.tagList.filter(item => {
          return item.path === this.$route.fullPath;
        });
        this.tagList = curItem;
      } else {
        this.$router.push("/");
        this.tagList = [];
        this.tagList.push({
          title: this.$route.meta.title,
          path: this.$route.fullPath,
          name: this.$route.name
        });
      }
    },
    close(num) {
      const delItem = this.tagList.splice(num, 1)[0];
      const item = this.tagList[num]
        ? this.tagList[num]
        : this.tagList[num - 1];
      if (item) {
        console.log(item, this.$route);
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push("/");
      }
    }
  },
  created() {
    this.setTags(this.$route);
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  }
};
</script>

<style scoped>
.tag {
  width: 100%;
  background: #f5f5f5;
  height: 25px;
  line-height: 25px;
  padding: 0px 10px;
  /* box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.11); */
}
.tag-list {
  float: left;
}
.tag-list .tag-li {
  float: left;
  margin: 0;
  background: #ccc;
  padding: 0 5px 0 12px;
  text-align: center;
  font-size: 12px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 0.3s;
}
.tag-li:hover {
  background: #a7a4a4;
}
.tag-li.active {
  background: #5f5f5f;
  color: #e0e0e0;
}
.tag-li.active .tag-li-title {
  color: #e0e0e0;
}
.tag-li-title {
  color: #616161;
  margin-right: 5px;
  height: 100%;
  min-width: 50px;
  display: inline-block;
}
.dropDown {
  float: right;
  cursor: pointer;
  font-size: 14px;
}
</style>
