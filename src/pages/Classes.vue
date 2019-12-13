<template>
    <div type="flex">
      <el-container class="container" >
        <el-main >
        <card class="text-center"><h3>班级详情</h3></card>
          <!-- 布局-->
          <div class="row" > 
            <!-- 循环生成班级列表 -->
      <span v-for="classes in classesList" :key="classes" class="col-md-4"> 
        <card class="text-left">
          <h4 class="card-title text-center">{{classes.className}}</h4>
          <el-divider></el-divider> 
          <p class="card-text">班级类型：{{classes.classType}}</p>
          <p class="card-text">邀请码：{{classes.classInviteCode}}</p>
          <p class="card-text">创建时间：{{classes.classCreateTime.substr(0,10)}}</p>
          <!-- flex布局，水平均匀分布 -->
          <el-row class="row" type='flex' justify="space-around">
            <el-button type="warning" size="medium" round @click="formClass.dialogFormVisible=true;classId=classes.id">修改班级</el-button><span>  </span>
          <el-button type="danger" size="medium" round @click="handleDeleteClass(classes.id)">删除班级</el-button>
          </el-row>
        </card>
      </span>
      <!-- <span v-for="o in 10" :key="o" class="col-md-4"> 
        <card class="text-center">
          <h4 class="card-title">{{classesCard.className}}</h4>
          <el-divider></el-divider> 
          <p class="card-text">班级类型：{{classesCard.classType}}</p>
          <p class="card-text">创建时间：{{classesCard.createTime}}</p>
          <el-button type="warning" size="medium" round>修改班级</el-button>
          <el-button type="danger" size="medium" round>删除班级</el-button>
        </card>
      </span> -->
<!-- 修改班级对话框 -->
<el-dialog title="修改班级" :visible.sync="formClass.dialogFormVisible" append-to-body="true" top="10vh" center="true">
  <el-form :model="formClass">
    <!-- <el-divider></el-divider> -->
    <el-form-item label="班级名称" :label-width="formClass.formLabelWidth">
      <el-input v-model="formClass.className" autocomplete="on" placeholder="班级名称"></el-input>
    </el-form-item>
    <el-form-item label="班级类型" :label-width="formClass.formLabelWidth">
      <!-- <el-input v-model="formClass.classType" autocomplete="on"></el-input> -->
      <el-select v-model="formClass.classType" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="formClass.dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="handleModifyClass">确 定</el-button>
  </div>
</el-dialog>
    </div>
        </el-main>
      </el-container>
    </div>
</template>
<script>
import {getClasses, deleteClass, modifyClass} from '../api/classApi.js'; // 班级调用api
import { Card, Button, FormGroupInput } from '@/components';
import { callbackify } from 'util';
export default {
  components:{
    [Button.name]: Button,
    Card
  },
  data(){
    return {
      // classesCard:{
      //   classId:'', // 班级id,
      //   className:'班级名',
      //   classType:'班级类型',
      //   classCreateTime:'创建时间',
      //   classInviteCode:'班级邀请码'
      // },
      classesList:'', // 班级列表，接受从后端传来的数据
      formClass: {
          dialogFormVisible: false,
          className: '',
          classType: '',
          formLabelWidth: '100px'
        },
      classId:'', // 当前被选中的班级id
      // 课程类型选择
        options: [{
          value: 'C语言',
          label: 'C语言'
        }, {
          value: 'C++',
          label: 'C++'
        }, {
          value: 'JAVA',
          label: 'JAVA'
        }, {
          value: 'Python',
          label: 'Python'
        }, {
          value: '汇编语言',
          label: '汇编语言'
        }, {
          value: '操作系统',
          label: '操作系统'
        }],
    }
  },
  created() { // 创建页面自动调用
    this.handleGetClasses()
  },
  methods: { 
    handleGetClasses() {
      getClasses() // 调用后端api
      .then((response)=>{ // 正常请求
        // this.classesCard.className = sessionStorage.getItem('id');
        this.classesList = response.data.data;
        // alert(response.data.message)
      })
      .catch((error)=>{ // 失败提示
        alert(error)
      })
    },
    handleDeleteClass(classId) { // 删除班级
        this.$confirm('此操作将删除班级信息，是否继续？','提示', { // 确认信息
          confirmButtonText: '确定', // 确认的文本标签
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            deleteClass(classId)
            .then((response) => {
              // alert(response.data.message);
              this.$message({
                message: '删除班级成功',
                type: 'success'
              })
              // this.$router.push({path:"/layout"})
              // this.$router.push({path:'/Classes'}); // 重定向为班级界面
              this.handleGetClasses();
            })
            .catch((error)=>{
              this.$message.error('班级删除失败');
            })
        })
    },
    handleModifyClass() { // 修改班级
        this.$confirm('此操作将修改班级信息，是否继续？','提示', { // 确认信息
          confirmButtonText: '确定', // 确认的文本标签
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
            modifyClass(this.formClass.className, this.formClass.classType, this.classId)
            .then((response) => {
              // alert(response.data.message);
              this.formClass.dialogFormVisible = false;
              this.$message({
                message: '修改班级成功',
                type: 'success'
              });
              // this.$router.push({path:"/layout"})
              // this.$router.push({path:'/Classes'}); // 重定向为班级界面
              this.handleGetClasses(); //必须加上this引用
            })
            .catch((error)=>{
              this.$message.error('修改班级失败');
            })
        })  
    }
  }
}
</script>
<style>
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }
  .box-card {
    width: 480px;
    height: 480px;
  }
  el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  /* 修改空白，占满全屏 */
.el-container{
  /* position: absolute; 不可用绝对，会覆盖layout */
  width: 100%; 
  top: 0px ; 
  left: 0 ; 
  bottom: 0;
}
.el-header {
    /* background-color: #b3c0d1; */
    color: #333;
    /* background-color: #e9eef3; */
    /* color: rgb(253, 168, 9); */
    text-align: center;
    line-height: 60px;
    /* 修改 关键！！！*/
    padding: 0;
    z-index: 1000; 
    padding-left: 2%;
    padding-right: 2%;
}
.el-main{
  /* padding-top: 60px; */
  /* padding-bottom: 0%; */
  /* page-break-after: auto; */
  /* padding-left: 0%; */
}
</style>