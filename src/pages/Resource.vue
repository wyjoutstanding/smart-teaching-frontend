<template>
  <div style="line-height:10px;margin-top:20px">
      <!-- <el-card style="margin-bottom:20px"><h3><strong>资源查询</strong></h3></el-card> -->
      <el-card style="margin-bottom:20px"><h3>资源查询</h3></el-card>
    <!-- :data="tableData.filter(data => !search || tableData.fileName.toLowerCase().includes(search.toLowerCase()) || tableData.fileTags.toLowerCase().includes(search.toLowerCase())).slice((currentPage-1)*pageSize,currentPage*pageSize)" -->
  <el-table
    :stripe="true"
    :data="tableData.filter(data => !search || data.fileName.toLowerCase().includes(search.toLowerCase()) || data.fileTags.toLowerCase().includes(search.toLowerCase())).slice((currentPage-1)*pageSize,currentPage*pageSize)"
    :default-sort = "{prop: 'fileUploadTime', order: 'descending'}"
    style="width: 100%">
    <el-table-column
      label="文件名"
      prop="fileName"
      sortable>
    </el-table-column>
    <el-table-column
      label="标签"
      prop="fileTags"
      sortable>
    </el-table-column>
    <el-table-column
      label="下载次数"
      prop="fileDownloadTimes"
      sortable>
    </el-table-column>
    <el-table-column
      label="上传日期"
      prop="fileUploadTime"
      sortable>
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <!-- <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button> -->
        <el-button
          size="mini"
          type="success"
          @click="handleDownload(scope.$index, scope.row)">下载</el-button>
          <!-- <a href="http://localhost:80/api/file/downloadFile?fileId=17">下载文件</a> -->
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          <!-- <el-input type="file">12</el-input> -->
      </template>
    </el-table-column>
  </el-table>
<div class="block" style="margin-top:15px;">
            <el-pagination align='center' @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[5,10,20,30]" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
            </el-pagination>
        </div>
  </div>
</template>

<script>
import {getFiles, deleteFile, downloadFile} from '../api/fileApi.js'; // 文件调用api
import {Card, Button, FormGroupInput} from '@/components';
  export default {
    data() {
      return {
        // tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }],
        tableData:'',
        search: '', // 存放所示框内容
        pageSize: '5', // 页面大小
        currentPage: '1', // 当前页面
        total: '10' // 页面总数
      }
    },
    created() {
        this.handleGetFiles();
        this.pageSize = 5
    },
    methods: {
        handleGetFiles() {
            getFiles('RESOURCE')
            .then((res)=>{
                let files = res.data.data;
                files.forEach(file => {
                    // alert(file.fileName)
                    file.fileUploadTime = file.fileUploadTime.substr(0,10);
                    file.fileName = file.fileName.split('$')[1]; // 字符串分割
                    // alert(file.fileName)
                });
                this.tableData = files;
                // alert(res.data.data[0].id)
            })
            .catch((err)=>{
                this.$message({
        showClose: true,
        message: err,
        type: "err"
      });
            })
            // alert("hello")
        },
      handleDownload(index, row) {
        // alert(index, row);
        downloadFile(row.id)
        .then((res) => {
        // this.show.document.execCommand('SaveAs')

          // alert("hello")
          // let url = window.URL.createObjectURL(new Blob([res.data]))
          let url = window.URL.createObjectURL(new Blob([res.data]))
        let link = document.createElement('a')
        link.style.display = 'none'
        link.href = url
        link.setAttribute('download', row.fileName)
        document.body.appendChild(link)
        link.click()
          // alert(res.data)
          this.tableData.forEach(element => {
            if (element.id == row.id) {
              element.fileDownloadTimes ++; // 下载次数增加
              return;
            }
          });
        })
        .catch((err) => {
          this.$message.error("下载失败")
        })
        // window.location.href = "localhost:80/api/file/getDownload?fileId=" + row.id;

        // window.open("https://www.baidu.com/", '_blank'); // 新开窗口下载
        // goDownloadByGet: () => {
        //         //通过window.location调起下载框
        //         window.location = "/getDownload?fileName=" + app.saveFileName;
        //         //window.location = "/download2?fileName=" + app.saveFileName;
        //     }
        // alert(index);
        // alert(row.address);
      },
      handleDelete(index, row) { // 删除文件
        this
                    .$confirm('此操作将删除资源信息，是否继续？', '提示', { // 确认信息
                        confirmButtonText: '确定', // 确认的文本标签
                        cancelButtonText: '取消',
                        type: 'warning'
                    })
                    .then(() => {
                       deleteFile(row.id)
        .then((res)=>{
          this.handleGetFiles()
          this.$message({
            showClose: true,
            message:"删除成功",
            type: "success"
          })
          .catch(err=>{
            this.$message.error("删除失败")
          })
        })
                    })
       
        console.log(index, row);
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
  }
</script>
