<template>
  <div class="draglist">
    <el-row :gutter="15" class="drag-box">
      <el-col :span="5">
        <div class="drag-box-item">
          <div class="item-title">todo</div>
          <draggable v-model="todo" @remove="removeHandle" :options="dragOptions">
            <transition-group tag="div" id="todo" class="item-ul">
              <div v-for="(item,index) in todo" class="drag-list" :key="index">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
      </el-col>

      <el-col :span="5">
        <div class="drag-box-item">
          <div class="item-title">doing</div>
          <draggable v-model="doing" @remove="removeHandle" :options="dragOptions">
            <transition-group tag="div" id="doing" class="item-ul">
              <div v-for="(item,index) in doing" class="drag-list" :key="index">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
      </el-col>

      <el-col :span="5">
        <div class="drag-box-item">
          <div class="item-title">done</div>
          <draggable v-model="done" @remove="removeHandle" :options="dragOptions">
            <transition-group tag="div" id="done" class="item-ul">
              <div v-for="(item,index) in done" class="drag-list" :key="index">{{item.content}}</div>
            </transition-group>
          </draggable>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      dragOptions: {
        animation: 120,
        scroll: true,
        group: "sortlist",
        ghostClass: "ghost-style"
      },
      todo: [
        {
          content: "todo01"
        },
        {
          content: "todo02"
        },
        {
          content: "todo03"
        }
      ],
      doing: [
        {
          content: "doing01"
        },
        {
          content: "doing02"
        },
        {
          content: "doing03"
        },
        {
          content: "doing04"
        }
      ],
      done: [
        {
          content: "done1"
        },
        {
          content: "done2"
        },
        {
          content:
            "hahahahahahahahahahahahahahahahahahahahahahahahahahahahahaha"
        }
      ]
    };
  },
  components: {
    draggable
  },
  methods: {
    removeHandle(event) {
      console.log(event);
      this.$message.success(`从 ${event.from.id} 移动到 ${event.to.id} `);
    }
  }
};
</script>

<style scoped>
.draglist {
  margin: 10px;
  /* padding: 20px 0; */
}
.drag-box-item {
  border: 1px solid #eee;
  border-radius: 3px;
  padding: 20px;
}
.item-title {
  border-bottom: 1px solid #eee;
  padding: 0 0 20px;
  font-size: 20px;
}
.item-ul {
  padding: 20px 0 0;
}
.drag-list {
  padding: 10px;
  border: 1px solid #ececec;
  border-radius: 3px;
  background: #eee;
  margin-bottom: 5px;
  word-break: break-all;
}
</style>