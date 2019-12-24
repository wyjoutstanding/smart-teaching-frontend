<template>
  <div>
    <el-main class="myMain">
      <card>
        <el-button
          type="success"
          icon="el-icon-edit"
          round
          @click="formClass.dialogFormVisible = true"
        >加入新班级</el-button>
        <!-- <el-button type="primary" icon="el-icon-edit" plain>创建作业</el-button> -->
      </card>

      <div class="row">
        <span v-for="classes in classList" :key="classes" class="col-md-4">
          <card class="text-left" round>
            <el-row class="row" type="flex" justify="space-around">
              <h4 class="card-title text-left">{{classes.className}}</h4>
            </el-row>
            <!-- <h4 class="card-title text-left">{{homework.homeworkEntity.homeworkTitle}}<el-button class="text-right">1</el-button></h4> -->
            <el-divider></el-divider>
            <p class="card-text">班级类型：{{classes.classType}}</p>
            <p class="card-text">教师名称：{{classes.teacherName}}</p>
            <p class="card-text">
              <!-- 加入时间：{{(classes.joinTime+'').substr(0,10)+' '+(classes.joinTime+'').substr(11,8)}}</p> -->
              加入时间：{{handleFormatDate(classes.joinTime)}}
            </p>
            <!-- flex布局，水平均匀分布 -->
            <el-row class="row" type="flex" justify="space-around">
              <el-button
                type="warning"
                size="medium"
                round="round"
                @click="handleQuitClasses(classes.id)"
              >退出班级</el-button>
            </el-row>
          </card>
        </span>
      </div>
    </el-main>
    <!-- 创建班级对话框--写在这里格式不会乱？？ -->
    <el-dialog
      :title="formClass.formName"
      :visible.sync="formClass.dialogFormVisible"
      :modal-append-to-body="false"
      append-to-body="true"
      center="center"
    >
      <el-form :model="formClass">
        <el-form-item label="班级邀请码" :label-width="formClass.formLabelWidth">
          <el-input v-model="formClass.classInviteCode" autocomplete="off" placeholder="班级邀请码"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="formClass.dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleJoinClass">加入班级</el-button>
      </div>
    </el-dialog>
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
import { getClasses, joinClass, quitClass } from "../api/classApi"; // 班级查询
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
    this.handleGetClasses();
  },
  data() {
    return {
      isRouterAlive: true, // reload
      dialogFormVisible: false,
      formLabelWidth: "100px",
      formName: "创建班级", // 动态改变表单名称（创建/修改）
      // homeworkId: '', // 被选中的家庭作业
      // 班级创建表单
      formHomework: {
        dialogFormVisible: false,
        formLabelWidth: "100px",
        id: "", // 作业id
        homeworkTitle: "", //作业名
        homeworkDescription: "", // 描述
        fileId: "", // 文件id
        teacherId: sessionStorage.getItem("id"), // 教师id
        homeworkDeadlineTime: "2099-08-06T23:21:17Z", // 默认过期时间
        className: "可见班级" // 可见班级
      },
      homeworkList: "",
      value1: [new Date(), new Date(2999, 10, 11, 10, 10)],
      value2: "",
      formPost: {
        // 发布作业模板
        dialogFormVisible: false,
        formLabelWidth: "100px",
        id: "",
        homeworkId: "",
        classId: "",
        homeworkStartTime: "",
        homeworkDeadlineTime: ""
      },
      options: "", // 班级选项
      formClass: {
        formName: "加入班级",
        formLabelWidth: "100px",
        dialogFormVisible: false,
        classInviteCode: "" //
      },
      classList: "" // 班级渲染列表
    };
  },
  methods: {
    handleFormatDate(value) {
      return formatDate(value);
    },
    handleJoinClass() {
      joinClass(this.formClass.classInviteCode)
        .then(res => {
          this.$message({
            message: "加入班级成功",
            type: "success"
          });
          // this.homeworkList = res.data.data;
          this.handleGetClasses();
          // alert(this.homeworkList[0].className)
        })
        .catch(err => {
          this.$message.error("加入班级失败");
        });
      this.formClass.dialogFormVisible = false;
    },
    handleGetClasses() {
      // 获取加入的班级
      getClasses().then(res => {
        this.classList = res.data.data;
        // alert(this.options[0].id)
      });
    },
    handleQuitClasses(classId) {
      // 退出班级
      this.$confirm("此操作将删除班级信息，是否继续？", "提示", {
        // 确认信息
        confirmButtonText: "确定", // 确认的文本标签
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        quitClass(classId)
          .then(response => {
            // alert(response.data.message);
            this.$message({ message: "退出班级成功", type: "success" });
            // this.$router.push({path:"/layout"}) this.$router.push({path:'/Classes'});
            // 重定向为班级界面
            this.handleGetClasses();
          })
          .catch(error => {
            this.$message.error("退出班级失败");
          });
      });
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
</style>