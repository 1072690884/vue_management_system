<template>
  <div class="table">
    <div class="tableTion">
      <el-button type="primary" icon="delete" @click="delAll">批量删除</el-button>
    </div>
    <el-table
      :data="data"
      border
      :row-style="{height:'50px'}"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" align="center"></el-table-column>
      <el-table-column prop="date" label="日期" sortable width="150"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" width="180" align="center">
        <template slot-scope="scope">
          <el-button type="text" icon="el-icon-edit" @click="handleEdit(scope)">编辑</el-button>
          <el-button
            type="text"
            icon="el-icon-delete"
            style="color:red"
            @click="handleDelete(scope)"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
      <el-pagination
        background
        @current-change="handleCurrentChange"
        layout="prev, pager, next"
        :total="1000"
      ></el-pagination>
    </div>

    <el-dialog title="编辑" :append-to-body="true" :visible.sync="editVisible" width="30%">
      <el-form :model="form" label-width="50px">
        <el-form-item label="姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="日期">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="form.date"
            value-format="yyyy-MM-dd"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="地址">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit(form)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      cur_page: 1,
      form: {
        name: "",
        date: "",
        address: ""
      },
      index: 1,
      editVisible: false,
      selectionArr: []
    };
  },
  computed: {
    data() {
      return this.tableData;
    }
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios
        .post(
          "https://www.easy-mock.com/mock/5c05e04be1eaff56e652cecb/ms/table/list",
          {
            page: this.cur_page
          }
        )
        .then(res => {
          console.log(res.data.data.list);
          this.tableData = res.data.data.list;
        });
    },
    delAll() {
      let arr = [];

      for (let i = 0; i < this.selectionArr.length; i++) {
        arr.push(this.selectionArr[i].name);
      }
      if (arr.length < 1) {
        this.$message.error("没有选择任何条目！！！");
      } else {
        this.deleteRow(...arr);
      }
    },
    handleSelectionChange(val) {
      this.selectionArr = val;
    },
    handleEdit(scope) {
      this.editVisible = true;
      this.form = {
        name: scope.row.name,
        date: scope.row.date,
        address: scope.row.address
      };
      this.index = scope.$index;
    },
    handleCurrentChange(e) {
      this.cur_page = e;
      this.getData();
    },
    handleDelete(scope) {
      this.deleteRow(scope.row.name);
    },
    deleteRow(...num) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          for (let j = 0; j < this.tableData.length; ) {
            for (let i = 0; i < num.length; i++) {
              if (this.tableData[j].name == num[i]) {
                this.tableData.splice(j, 1);
              } else {
                j++;
              }
            }
          }
          this.$message.success("删除成功!");
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    saveEdit(form) {
      this.tableData[this.index] = this.form;
      this.$set(this.tableData, this.index, this.form);
      this.editVisible = false;
      this.$message.success(`修改第 ${this.index + 1} 行成功`);
    }
  }
};
</script>

<style scoped>
.tableTion {
  margin-bottom: 15px;
}
.pagination {
  margin: 15px 0 0;
}
.table {
  padding: 20px;
}
</style>