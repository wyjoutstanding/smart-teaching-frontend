<template>
  <div>
    <el-main class="myMain">
      <card>
        <el-button
          type="success"
          icon="el-icon-edit"
          round
          @click="formName='创建作业';formHomework.dialogFormVisible = true"
        >创建作业</el-button>
        <!-- <el-button type="primary" icon="el-icon-edit" plain>创建作业</el-button> -->
      </card>

      <div class="row">
        <span v-for="homework in homeworkList" :key="homework" class="col-md-4">
          <card class="text-left" round>
            <el-row class="row" type="flex" justify="space-around">
              <h4 class="card-title text-left">{{homework.homeworkEntity.homeworkTitle}}</h4>
              <span></span>
              <n-button
                type="danger"
                size="sm"
                simple
                round
                @click="handleDeleteHomework(homework.homeworkEntity.id)"
              >
                <i class="el-icon-delete"></i>
              </n-button>
              <!-- <el-button type="text" icon="el-icon-delete" plain></el-button> -->
              <!-- <el-button type="text" style=" line-height:1px;margin-top:0px">X</el-button> -->
              <!-- <el-button
                                type=""
                                size="small"
                                round="round"
              @click="handleDeleteClass(homework.id)">X</el-button>-->
            </el-row>
            <!-- <h4 class="card-title text-left">{{homework.homeworkEntity.homeworkTitle}}<el-button class="text-right">1</el-button></h4> -->
            <el-divider></el-divider>
            <p class="card-text">作业描述：{{homework.homeworkEntity.homeworkDescription}}</p>
            <p class="card-text">可见班级：{{homework.className}}</p>
            <p 
              class="card-text"
            >开始时间：{{handleFormatDate(homework.homeworkStartTime)}}</p>
            <p
              class="card-text"
            >截止时间：{{handleFormatDate(homework.homeworkDeadlineTime)}}</p>
            <!-- <p class="card-text">发布时间：{{homework.homeworkPostTime.substr(0,10)}}</p>
            <p class="card-text">截止时间：{{homework.homeworkDeadlineTime.substr(0,10)}}</p>-->
            <!-- flex布局，水平均匀分布 -->
            <el-row class="row" type="flex" justify="space-around">
              <el-button
                type="success"
                size="medium"
                round="round"
                @click="handleGetClasses();formPost.dialogFormVisible=true;formPost.id=homework.classHomeworkId;formPost.homeworkId=homework.homeworkEntity.id"
              >发布作业</el-button>
              <span></span>
              <el-button
                type="warning"
                size="medium"
                round="round"
                @click="formName='修改作业';formHomework.dialogFormVisible=true;formHomework.id=homework.homeworkEntity.id"
              >修改作业</el-button>
            </el-row>
          </card>
        </span>
      </div>
      <!-- 布局-->
      <!-- <div class="row"> -->
      <!-- 循环生成班级列表 -->
      <!-- <span v-for="homework in homeworkList" :key="homework" class="col-md-4">
                        <card class="text-left">
                            <h4 class="card-title text-center">{{homework.homeworkEntity.homeworkTitle}}</h4>
                            <el-divider></el-divider>
                            <p class="card-text">作业描述：{{homework.homeworkEntity.homeworkDescription}}</p>
                            <p class="card-text">可见班级：{{homework.className}}</p>
                            <p class="card-text">发布时间：{{homework.homeworkPostTime.substr(0,10)}}</p>
      <p class="card-text">截止时间：{{homework.homeworkDeadlineTime.substr(0,10)}}</p>-->
      <!-- flex布局，水平均匀分布 -->
      <!-- <el-row class="row" type='flex' justify="space-around">
                                <el-button
                                    type="warning"
                                    size="medium"
                                    round="round"
                                    @click="formClass.dialogFormVisible=true;classId=homework.id">发布作业</el-button>
                                <span></span>
                                <el-button
                                    type="danger"
                                    size="medium"
                                    round="round"
                                    @click="handleDeleteClass(homework.id)">删除作业</el-button>
      </el-row>-->
      <!-- </card> -->
      <!-- </span> -->
      <!-- 修改班级对话框 -->
      <!-- <el-dialog
                        title="修改班级"
                        :visible.sync="formClass.dialogFormVisible"
                        append-to-body="true"
                        top="10vh"
                        center="true">
                        <el-form :model="formClass">
                            <el-form-item label="班级名称" :label-width="formClass.formLabelWidth">
                                <el-input v-model="formClass.className" autocomplete="on" placeholder="班级名称"></el-input>
                            </el-form-item>
                            <el-form-item label="班级类型" :label-width="formClass.formLabelWidth">
                                <el-select v-model="formClass.classType" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="formClass.dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="handleModifyClass">确 定</el-button>
                        </div>
      </el-dialog>-->
      <!-- </div> -->
    </el-main>
    <!-- 创建班级对话框--写在这里格式不会乱？？ -->
    <el-dialog
      :title="formName"
      :visible.sync="formHomework.dialogFormVisible"
      :modal-append-to-body="false"
      append-to-body="true"
      center="center"
    >
      <el-form :model="formHomework">
        <el-form-item label="作业名称" :label-width="formHomework.formLabelWidth">
          <el-input v-model="formHomework.homeworkTitle" autocomplete="off" placeholder="作业名称"></el-input>
        </el-form-item>
        <el-form-item label="作业描述" :label-width="formHomework.formLabelWidth">
          <el-input
            v-model="formHomework.homeworkDescription"
            autocomplete="off"
            placeholder="作业描述"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="formHomework.dialogFormVisible = false">取 消</el-button>
        <span v-if="formName==='创建作业'">
          <el-button type="primary" @click="handleCreateHomework">创 建</el-button>
        </span>
        <span v-else>
          <el-button type="primary" @click="handleModifyHomework">修 改</el-button>
        </span>
      </div>
    </el-dialog>
    <!-- 发布对话框，班级时间选择 -->
    <el-dialog
      :title="发布作业"
      :visible.sync="formPost.dialogFormVisible"
      :modal-append-to-body="false"
      append-to-body="true"
      center="center"
    >
      <el-form :model="formPost">
        <el-form-item label="可见班级" :label-width="formPost.formLabelWidth">
          <el-select v-model="formPost.classId" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.id"
              :label="item.className"
              :value="item.id"
            >
              <span style="float: left">{{ item.className }}</span>
              <span style="float: right; color: #8492a6; font-size: 13px">{{ item.classType }}</span>
            </el-option>
          </el-select>
        </el-form-item>
        <!-- <el-input v-model="formHomework.classType" autocomplete="off"
        placeholder="班级类型"></el-input>-->
        <!-- <el-form-item label="可见班级" :label-width="formPost.formLabelWidth">
                                <el-input v-model="formPost.homeworkTitle" autocomplete="off" placeholder="作业名称"></el-input>
        </el-form-item>-->
        <el-form-item label="有效时间" :label-width="formPost.formLabelWidth">
          <!-- <el-input v-model="formPost.homeworkDescription" autocomplete="off" placeholder="作业描述"></el-input> -->
          <span class="demonstration"></span>
          <!-- <el-date-picker
                                v-model="value2"
                                type="datetime"
                                placeholder="选择日期时间"
                                align="right"
                                :picker-options="pickerOptions">
          </el-date-picker>-->
          <el-date-picker
            v-model="value1"
            type="datetimerange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
          ></el-date-picker>
        </el-form-item>
        <div class="block"></div>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="formPost.dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handlePostHomework">确 定</el-button>
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
import { getClasses } from "../api/classApi"; // 班级查询
import {formatDate} from "../api/commons"; // 日期处理
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
      isRouterAlive: true, // reload
      dialogFormVisible: false,
      formLabelWidth: "100px",
      formName: '创建班级', // 动态改变表单名称（创建/修改）
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
      options: "" // 班级选项
    };
  },
  methods: {
    handleFormatDate(value) {
      return formatDate(value)
    },
    handleCreateHomework() {
      createHomework(this.formHomework)
        .then(res => {
          this.$message({
            message: "作业创建成功",
            type: "success"
          });
          // this.homeworkList = res.data.data;
          this.handleGetClassHomeworkRichInfo();

          // alert(this.homeworkList[0].className)
        })
        .catch(err => {
          this.$message.error("作业创建失败");
        });
      this.formHomework.dialogFormVisible = false;
    },
    handleGetClassHomeworkRichInfo() {
      getClassHomeworkRichInfo().then(res => {
        this.homeworkList = res.data.data;
        // alert(res.data.data)
      });
    },
    handleModifyHomework(homeworkId) {
      modifyHomework(this.formHomework).then(res => {
        // this.$message
        this.formHomework.dialogFormVisible = false;
        // getClassHomeworkRichInfo();
        // this.reload();
        this.handleGetClassHomeworkRichInfo();
      });
    },
    handleDeleteHomework(homeworkId) {
      this.$confirm("此操作将删除作业信息，是否继续？", "提示", {
        // 确认信息
        confirmButtonText: "确定", // 确认的文本标签
        cancelButtonText: "取消",
        type: "warning"
      }).then(() => {
        deleteHomework(homeworkId)
          .then(response => {
            // alert(response.data.message);
            this.$message({ message: "删除作业成功", type: "success" });
            // this.$router.push({path:"/layout"}) this.$router.push({path:'/Classes'});
            // 重定向为班级界面
            this.handleGetClassHomeworkRichInfo();
          })
          .catch(error => {
            this.$message.error("删除作业失败");
          });
      });
    },
    handleGetClasses() {
      getClasses().then(res => {
        this.options = res.data.data;
        // alert(this.options[0].id)
      });
    },
    handlePostHomework() {
        this.formPost.homeworkStartTime = this.value1[0];
        this.formPost.homeworkDeadlineTime = this.value1[1];
        postHomework(this.formPost)
        .then((res) => {
            this.formPost.dialogFormVisible = false;
            this.$message({
                type:"success",
                message: '作业发布成功'
            })
            this.handleGetClassHomeworkRichInfo();
        })
        .catch((err) => {
            this.$message.error("作业发布错误")
        })
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