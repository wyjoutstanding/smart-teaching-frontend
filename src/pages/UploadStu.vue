<template>
  <div>
    <!-- <el-card>上传资源</el-card> -->
    <el-container>
      <el-aside class="aside">
        <el-card>
          <div>
            <div class="text-center">
              <h3>上传资源</h3>
            </div>
            <el-divider></el-divider>
            <div style="line-height:20px">
              <br />
            </div>
            <div style="line-height:20px; margin-top:20px">
              <strong>
                资源标签选择/自定义
                <br />(输入字符串后按回车)
              </strong>
            </div>
            <el-select
              v-model="value"
              multiple
              filterable="true"
              allow-create
              default-first-option
              placeholder="可选择/自定义文章标签"
            >
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
            <div style="line-height:60px">
              <br />
            </div>
            <el-button
              style="margin-left: 10px;"
              size="small"
              type="success"
              @click="submitUpload"
            >上传到服务器</el-button>
            <div style="line-height:100px">
              <br />
            </div>
          </div>
        </el-card>
      </el-aside>
      <el-main class="testDemo">
        <!-- <el-card class="text-center">
                    <h3>上传资源</h3>
        </el-card>-->
        <div style="margin-top:10px"></div>
        <el-card>
          <div>
            <el-upload
              class="upload-demo col-xm-6"
              ref="upload"
              drag
              enctype="multipart/form-data"
              show-file-list="true"
              action="http://localhost:80/api/file/upload/singleFile"
              :auto-upload="false"
              :data="formData"
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :on-success="handleSuccess"
              :on-error="handleError"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div slot="tip" class="el-upload__tip" style="margin-top:20px">
                <strong>
                  <span style="color:red">*</span>支持多文件，单文件大小不超过10MB
                </strong>
                <div style="margin-top:50px"></div>
              </div>
              <!-- <slot>将文件拖到此处，或<em>点击上传</em></slot> -->
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
            </el-upload>
            <div style="line-height:275px">
              <br />
            </div>
          </div>
        </el-card>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from "@/components";
export default {
  data() {
    return {
      formData: {
        authorId: sessionStorage.getItem("id"),
        fileType: "REPORT",
        fileTags: "",
        homeworkId: sessionStorage.getItem("homeworkId") // 作业id
      },
      // 文件标签选项
      options: [
        {
          value: "考试秘笈",
          label: "考试秘笈"
        },
        {
          value: "考研/保研",
          label: "考研/保研"
        },
        {
          value: "出国留学",
          label: "出国留学"
        }
      ],
      value: [] // 选择/创建的值
    };
  },
  methods: {
    submitUpload() {
      // 上传事件
      var tags = "";
      for (let v of this.value) {
        // 文件标签处理
        tags += " " + v;
      }
      tags = tags.slice(1);
      // alert(tags)
      this.formData.fileTags = tags;
      this.$refs.upload.submit()
    //   .then(()=>{

    //     //   this.$router.push({ path: "/HomeworkStu" });
    //   })
    },
    handleRemove(file, fileList) {
      this.$message({
        showClose: true,
        message: "文件移除成功",
        type: "success"
      });
    },
    handlePreview(file) {
      console.log(file);
    },
    handleSuccess(response, file, fileList) {
      this.$message({
        showClose: true,
        message: "文件上传成功",
        type: "success"
      });
      // this.$router.push({ path: "/HomeworkStu" });
    },
    handleError(err, file, fileList) {
      this.$message({
        showClose: true,
        message: "上传出现错误",
        type: "error"
      });
    }
  }
};
</script>
<style>
/* /deep/  */
.uploadBtn {
  height: 50px;
  position: relative;
}
.upload-demo {
  padding: 20px;
}
/* /deep/ .el-input {
  height: 100px;
} */
/* .el-main { */
.testDemo {
  line-height: 0;
  padding-left: 0%;
  /* text-align: left; */
}
.aside {
  padding-top: 30px;
  line-height: 120px;
  padding-right: 0px;
}
</style>