<template>
  <div>
    <el-main class="myMain">
      <card>
        <el-button
          type="success"
          icon="el-icon-edit"
          round
          @click="formName='创建作业';formHomework.dialogFormVisible = true"
        >作业详情</el-button>
        <!-- :data="tableData.filter(data => !search || data.homeworkEntity.homeworkTitle.toLowerCase().includes(search.toLowerCase()) || data.fileTags.toLowerCase().includes(search.toLowerCase())).slice((currentPage-1)*pageSize,currentPage*pageSize)" -->
      </card>
      <el-table
        :stripe="true"
        :data="tableData.filter(data => !search || data.homeworkEntity.homeworkTitle.toLowerCase().includes(search.toLowerCase()) 
    || data.className.toLowerCase().includes(search.toLowerCase())
    || data.homeworkDeadlineTime.toLowerCase().includes(search.toLowerCase())
    || data.homeworkStartTime.toLowerCase().includes(search.toLowerCase())).slice((currentPage-1)*pageSize,currentPage*pageSize)"
        :default-sort="{prop: 'homeworkDeadlineTime', order: 'descending'}"
        style="width: 100%"
      >
        <el-table-column type="expand">
          <template slot-scope="props">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="详细描述：">
                <span>{{ props.row.homeworkEntity.homeworkDescription }}</span>
              </el-form-item>
              <el-form-item label="所属班级：">
                <span>{{ props.row.className }}</span>
              </el-form-item>
              <el-form-item label="作业格式：">
                <span>{{ props.row.homeworkEntity.homeworkFormat }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column label="作业名称" prop="homeworkEntity.homeworkTitle" sortable></el-table-column>
        <!-- <el-table-column
      label="开始时间"
      prop="homeworkStartTime"
      sortable>
        </el-table-column>-->
        <el-table-column label="开始时间" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ handleFormatDate(scope.row.homeworkStartTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="截止时间" sortable>
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span>{{ handleFormatDate(scope.row.homeworkDeadlineTime) }}</span>
          </template>
        </el-table-column>
        <el-table-column align="right">
          <template slot="header" slot-scope="scope">
            <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
          </template>
          <template slot-scope="scope">
            <!-- <el-button
          size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>-->
            <el-button
              size="mini"
              type="success"
              @click="handleSubmitReport(scope.$index, scope.row)"
            >提交作业</el-button>
            <!-- <a href="http://localhost:80/api/file/downloadFile?fileId=17">下载文件</a> -->
            <el-button
              size="mini"
              type="danger"
              @click="handleUnImpl();handleDelete(scope.$index, scope.row)"
            >查看得分</el-button>
            <!-- <el-input type="file">12</el-input> -->
          </template>
        </el-table-column>
      </el-table>
      <div class="block" style="margin-top:15px;">
        <el-pagination
          align="center"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5,10,20,30]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
        ></el-pagination>
      </div>
    </el-main>
    <!-- 发布对话框，班级时间选择 -->
  </div>
</template>
<script>
import {
  createHomework,
  modifyHomework,
  postHomework,
  deleteHomework,
  getClassHomeworkRichInfo
} from "../api/homeworkApi"; // 作业创建，修改，发布，删除，查询
import { getClasses } from "../api/classApi"; // 班级查询
import { formatDate } from "../api/commons"; // 日期处理
import { Card, Button, FormGroupInput } from "@/components";
export default {
  name: "App",
  components: {
    [Button.name]: Button,
    Card
  },
  provide() {
    return { reload: this.reload };
  },
  created() {
    this.handleGetClassHomeworkRichInfo();
  },
  data() {
    return {
      tableData: "",
      search: "", // 存放所示框内容
      pageSize: "5", // 页面大小
      currentPage: "1", // 当前页面
      total: "10", // 页面总数
      isRouterAlive: true, // reload
      dialogFormVisible: false,
      formLabelWidth: "100px",
      formName: "创建班级" // 动态改变表单名称（创建/修改）
    };
  },
  methods: {
    handleFormatDate(value) {
      return formatDate(value);
    },
    handleGetClassHomeworkRichInfo() {
      getClassHomeworkRichInfo().then(res => {
        this.tableData = res.data.data;
        // alert(res.data.data)
      });
    },
    handleSubmitReport(idx, row) {
      // 提交作业
      sessionStorage.setItem("homeworkId", row.homeworkEntity.id); // 保存作业id
      this.$router.push({ path: "/UploadStu" });
    },
    handleUnImpl() {
      this.$message({
        showClose: true,
        type: "info",
        message: "等待教师批改中..."
      });
    },
    // 分页显示处理
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.currentPage = 1;
      this.pageSize = val;
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.currentPage = val;
    }
  }
};
</script>
<style scoped>
.myMain {
  line-height: 1;
  padding-left: 0%;
  margin-left: 1%;
  text-align: left;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #020c1a;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  background-color: #b8151540;
}
</style>