<template>
  <div class="rich">
    <el-row class="box" :gutter="20">
      <el-col :span="20">
        <div class="richCompoler">
          <quill-editor
            class="quill-editor"
            v-model="content"
            @change="onEditorChange($event)"
            :options="editorOption"
          ></quill-editor>
        </div>
      </el-col>
      <el-col :span="4">
        <div class="showTitle">输出结果</div>
        <div class="richCompolerShow">{{content}}</div>
      </el-col>
    </el-row>

    <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
  </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    return {
      content: "",
      editorOption: {
        placeholder: "富文本编辑器"
      }
    };
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorChange({ editor, html, text }) {
      this.content = html;
      console.log(editor, html, text);
    },
    submit() {
      console.log(this.content);
      this.$message.success("提交成功！");
    }
  }
};
</script>

<style scoped>
.rich {
  margin: 10px;
  padding: 20px;
}
.richCompoler {
  border: 1px solid #ccc;
}
/* .quill-editor {
  height: 100%;
  overflow: hidden;
  border: 1px solid #ccc;
} */
.showTitle {
  padding: 9px;
  font-size: 14px;
  border: 1px solid #ccc;
  /* font-weight: 600; */
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
.richCompolerShow {
  border: 1px solid #ccc;
  height: 600px;
  border-top: none;
  overflow: auto;
  padding: 10px;
}
</style>
<style>
.ql-container.ql-snow {
  border: none;
  height: 600px;
}
.ql-toolbar.ql-snow {
  border: none;
  border-bottom: 1px solid #ccc;
}
</style>