<template>
    <div>
        <el-container>
            <el-main>
                <el-card>
                    <el-header><el-divider><h5>个人基本信息</h5></el-divider></el-header>
                    
                    <!-- <el-badge>个人信息</el-badge> -->
                    <el-form ref="form" :model="sizeForm" label-width="280px" size="medium ">
      <el-form-item label="姓名">
        <el-col :span=spanSize>
        <el-input v-model="personInfoForm.userName" ></el-input>
        </el-col>
    </el-form-item>
      <el-form-item label="账号">
        <el-col :span=spanSize>
        <el-input v-model="personInfoForm.accountName" disabled="true"></el-input>
        </el-col>
    </el-form-item>
      <el-form-item label="性别">
        <el-col :span=spanSize>
        <el-input v-model="personInfoForm.userGender"></el-input>
        </el-col>
    </el-form-item>
      <el-form-item label="学工号">
        <el-col :span=spanSize>
        <el-input v-model="personInfoForm.userUniqueId" ></el-input>
        </el-col>
    </el-form-item>
      <el-form-item label="账户类型">
        <el-col :span=spanSize>
        <el-input v-model="personInfoForm.accountType" disabled="true"></el-input>
        </el-col>
    </el-form-item>
      <el-form-item label="绑定邮箱">
        <el-col :span=spanSize>
        <el-input v-model="personInfoForm.userMail"></el-input>
        </el-col>
    </el-form-item>
      <el-form-item label="绑定手机">
        <el-col :span=spanSize>
        <el-input v-model="personInfoForm.userPhone"></el-input>
        </el-col>
    </el-form-item>
  <el-form-item size="large">
      <el-col :span="12">
        <el-row  type='flex' justify="space-around">
    <el-button type="warning" @click="onSubmit" round>保存修改</el-button>
    <el-button round>取消</el-button>
        </el-row>
      </el-col>
  </el-form-item>
</el-form>
                </el-card>
            </el-main>
        </el-container>
    </div>
</template>
<script>
import { getUserInfo, bindPersonInfo } from '../api/userApi'; // 导入后端请求Api
  export default {
    data() {
      return {
        personInfoForm: {
          id: sessionStorage.getItem("id"), // 全局变量
          userName: '',
          userGender: '',
          userUniqueId: '',
          userMail: '',
          userPhone: '',
          accountName: '',
          accountType: ''
        },
        spanSize:14
      };
    },
    created() { // 创建该页面前先执行
        getUserInfo() // 调用获取用户信息Api
        .then((response)=>{ // 正常请求
            this.personInfoForm = response.data.data;
            // 性别转换
            if (this.personInfoForm.userGender == 0) this.personInfoForm.userGender = '男';
            else if (this.personInfoForm.userGender == 1) this.personInfoForm.userGender = '女';
            // alert(response.data.data.id)
            })
        .catch((error)=>{alert(error)})
    },
    methods: {
      onSubmit() { // 提交保存修改后的基本信息
        // 确定框
        this.$confirm('此操作将更改个人信息，是否继续？','提示', {
          confirmButtonText: '确定', // 确认的文本标签
          cancelButtonText: '取消',
          type: 'warning'
        })
        .then(()=>{ // 确认警告
          // 转换性别
          if (this.personInfoForm.userGender == 0) this.personInfoForm.userGender = '男';
          else if(this.personInfoForm.userGender == 1) this.personInfoForm.userGender = '女';
          bindPersonInfo(this.personInfoForm) // 绑定
          .then(()=>{ // 成功绑定
            this.$message({
              message: '个人信息修改成功',
              type: 'success',
              showClose: 'true'
            })
          })
          .catch(()=>{ // 绑定失败
            this.$message({
                message: '个人信息修改出现错误',
                type: 'error'
              })
          })
        })
        .catch(()=>{ // 取消提示
          this.$message({
            message: '已取消操作',
            type: 'info'
          })
        })
      }
    }
  };
</script>