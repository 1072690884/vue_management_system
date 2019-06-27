<template>
  <div class="mark">
    <mavon-editor class="mavoneditor" @change="change" v-model="value"/>
    <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";

export default {
  data() {
    return {
      value: "",
      html: "",
      configs: {}
    };
  },
  components: {
    mavonEditor
  },
  methods: {
    submit() {
      console.log(this.value);
      console.log(this.html);
      this.$message.success("提交成功！");
    },
    change(value, render) {
      // render 为 markdown 解析后的结果
      console.log(value, render);
      this.html = render;
    }
  }
};
</script>

<style scoped>
.mavoneditor {
  height: 600px;
}
.editor-btn {
  margin: 10px;
  min-width: 100px;
  background: #5f5f5f;
  border-color: #5f5f5f;
}
.editor-btn:hover {
  background: #848484;
  border-color: #848484;
}
</style>