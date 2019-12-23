<template>
    <div class="flex1">
        <el-container>
            <!-- 页面头部 -->
            <el-header class="col-sm-24">
                <!-- Header -->
                <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="handleSelect"
                    background-color="#f96332"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <!-- <el-menu-item index="5" class="fr"><a href="/Profile"><i
                    class="el-icon-user"/>个人中心</a></el-menu-item> -->
                    <el-menu-item index="1"><i class="el-icon-sunny"/>智慧教学平台</el-menu-item>
                    <!-- <el-submenu index="2" class="fr"> <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item> <el-menu-item
                    index="2-2">选项2</el-menu-item> <el-menu-item index="2-3">选项3</el-menu-item>
                    <el-submenu index="2-4"> <template slot="title">选项4</template> <el-menu-item
                    index="2-4-1">选项1</el-menu-item> <el-menu-item index="2-4-2">选项2</el-menu-item>
                    <el-menu-item index="2-4-3">选项3</el-menu-item> </el-submenu> </el-submenu>-->
                    <el-menu-item index="3">消息中心</el-menu-item>
                    <el-menu-item index="4">
                        <a href="/Baidu" target="_blank">百度一下</a>
                    </el-menu-item>
                    <el-submenu index="2" class="fr">
                        <template slot="title"><i class="el-icon-user"/>个人中心</template>
                        <!-- <span class="word">Hello</span> -->
                        <!-- <el-menu-item index="2-1"><router-link to="/PersonInfo"
                        class="word">基本信息</router-link></el-menu-item> -->
                        <el-menu-item index="2-1" @click="$router.push({path:'/PersonInfo'})">基本信息</el-menu-item>
                        <el-menu-item index="2-2" @click="dialogFormVisible=true">修改密码</el-menu-item>
                        <el-menu-item index="2-3" @click="$router.push({path:'/'})">退出账号</el-menu-item>
                    </el-submenu>
                    <!-- 修改密码对话框 -->
                    <el-dialog
                        title="修改密码"
                        :visible.sync="dialogFormVisible"
                        :modal-append-to-body="false"
                        append-to-body="true"
                        center="center">
                        <!-- <el-divider></el-divider> -->
                        <el-form :model="form">
                            <el-form-item label="原密码" :label-width="formLabelWidth">
                                <el-input v-model="form.oldPassword" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="新密码" :label-width="formLabelWidth">
                                <el-input
                                    v-model="form.newPassword"
                                    autocomplete="off"
                                    show-password="show-password"></el-input>
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="handleEditPassword">确 定</el-button>
                        </div>
                    </el-dialog>
                    <!-- 创建班级对话框--写在这里格式不会乱？？ -->
                    <el-dialog
                        title="创建班级"
                        :visible.sync="formClass.dialogFormVisible"
                        :modal-append-to-body="false"
                        append-to-body="true"
                        center="center">
                        <el-form :model="formClass">
                            <el-form-item label="班级名称" :label-width="formClass.formLabelWidth">
                                <el-input v-model="formClass.className" autocomplete="off" placeholder="班级名称"></el-input>
                            </el-form-item>
                            <el-form-item label="班级类型" :label-width="formClass.formLabelWidth">
                                <el-select v-model="formClass.classType" placeholder="请选择">
                                    <el-option
                                        v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"></el-option>
                                </el-select>
                                <!-- <el-input v-model="formClass.classType" autocomplete="off"
                                placeholder="班级类型"></el-input> -->
                            </el-form-item>
                        </el-form>
                        <div slot="footer" class="dialog-footer">
                            <el-button @click="formClass.dialogFormVisible = false">取 消</el-button>
                            <el-button type="primary" @click="handleCreateClass">确 定</el-button>
                        </div>
                    </el-dialog>
                </el-menu>
            </el-header>
            <!-- 页面主体 -->
            <el-container>
                <!-- 侧边栏 -->
                <el-aside>
                    <el-col>
                        <!-- <h5>默认颜色</h5> -->
                        <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            @open="handleOpen"
                            @close="handleClose"
                            background-color="#b81515"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                            <!-- 班级管理 -->
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-notebook-1"></i>
                                    <span>班级管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="1-1" @click="formClass.dialogFormVisible=true">创建班级</el-menu-item>
                                    <!-- <el-menu-item index="1-2" @click="gotoClasses"><router-link to="/Classes"
                                    class="word">查看班级</router-link></el-menu-item> -->
                                    <el-menu-item index="1-2" @click="$router.push({path:'/Classes'})">查看班级</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <!-- 题库管理 -->
                            <el-submenu index="2">
                                <template slot="title">
                                    <i class="el-icon-notebook-2"></i>
                                    <span>题库管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="2-1">创建题库</el-menu-item>
                                    <el-menu-item index="2-2">查看题库</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <!-- 作业管理 -->
                            <!-- <el-submenu index="3"> -->
                            <el-menu-item index="3">
                                <template slot="title">
                                    <i class="el-icon-document"></i>
                                    <span @click="$router.push({path:'/Homework'})">作业管理</span>
                                </template>
                                <!-- <el-menu-item-group>
                                    <el-menu-item index="3-1">发布作业</el-menu-item>
                                    <el-menu-item index="3-2">查看作业</el-menu-item>
                                </el-menu-item-group> -->
                            <!-- </el-submenu> -->
                            </el-menu-item>
                            <!-- 资源管理 -->
                            <el-submenu index="4">
                                <template slot="title">
                                    <i class="el-icon-collection"></i>
                                    <span>资源管理</span>
                                </template>
                                <el-menu-item-group>
                                    <el-menu-item index="4-1" @click="$router.push({path:'/Upload'})">上传资源</el-menu-item>
                                    <el-menu-item index="4-2" @click="$router.push({path:'/Resource'})">查询资源</el-menu-item>
                                </el-menu-item-group>
                            </el-submenu>
                            <!-- <el-menu-item index="4"> <i class="el-icon-setting"></i> <span
                            slot="title">资源管理</span> </el-menu-item> -->
                        </el-menu>
                    </el-col>
                </el-aside>
                <!-- 主要显示内容 -->
                <el-main>
                    <!-- 刷新页面，router渲染页面 -->
                    <router-view v-if="isRouterAlive"></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import {getUserInfo, editPassword} from '../api/userApi' // 用户信息获取，修改密码
    import {createClass} from '../api/classApi'; // 班级创建
    export default {
        name: "App",
        provide() {
            return {reload: this.reload}
        },
        data() {
            return {
                isRouterAlive: true, // reload
                activeIndex: '1',
                activeIndex2: '1',
                dialogFormVisible: false,
                form: {
                    oldPassword: '',
                    newPassword: ''
                },
                formLabelWidth: '100px',
                // 班级创建表单
                formClass: {
                    dialogFormVisible: false,
                    className: '',
                    classType: '',
                    formLabelWidth: '100px'
                },
                // 课程类型选择
                options: [
                    {
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
                    }
                ]
            };
        },
        methods: {
            // 刷新页面
            reload() {
                this.isRouterAlive = false
                this.$nextTick(function () {
                    this.isRouterAlive = true
                })
            },
            // click跳转班级页面
            gotoClass() {
                // alert('h13')
                this
                    .$router
                    .push({path: '/Classes'});
            },
            // 修改密码
            handleEditPassword() {
                editPassword(this.form)
                    .then((res) => {
                        if (res.data.code == 331) {
                            this
                                .$message
                                .error('原密码有误，请重新输入')
                        } else {
                            this.$message({message: '密码修改成功', type: 'success'})
                            this.dialogFormVisible = false;
                        }

                    })
                    .catch(() => {
                        this
                            .$message
                            .error('密码修改失败')
                    })
                },
            // 创建班级
            handleCreateClass() {
                createClass(this.formClass.className, this.formClass.classType)
                    .then((res) => {
                        if (res.data.code == 337) {
                            this
                                .$message
                                .error('该班级名已存在，请重新输入')
                        } else {
                            this.$message({message: '创建班级成功', type: 'success'})
                            this.formClass.dialogFormVisible = false;
                            this
                                .$router
                                .push({
                                    path: '/Classes',
                                    component: resolve => require(['../pages/Classes'], resolve)
                                }); // 重定向为班级界面
                            this.reload(); // 重新加载
                        }

                    })
                    .catch(() => {
                        this
                            .$message
                            .error('班级创建失败')
                    })
                },
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            },
            methods: {
                handleOpen(key, keyPath) {
                    console.log(key, keyPath);
                },
                handleClose(key, keyPath) {
                    console.log(key, keyPath);
                }
                // , handleEditPassword() {    dialogFormVisible = true
                // editPassword(this.form)   .then(()=>{     this.$message({       message:
                // '密码修改成功',       type: 'success'     })   })   .catch(()=> {
                // this.$message.error('密码修改失败')   }) }
            }
        }
    }
</script>
<style scoped="scoped">
    /* 修改空白，占满全屏 */
    .el-container {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
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
    }

    .el-aside {
        background-color: #b81515;
        color: #f96332;
        text-align: left;
        line-height: 200px;
    }
    .el-main {
        background-color: #e9eef3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }
    /* 消除顶层菜单与侧边栏的边框 */
    .el-header .el-menu {
        border-bottom: none;
    }
    /* 设置侧边栏与顶部间距，不与顶部遮盖 */
    .el-aside,
    .el-main {
        padding-top: 60px;
        /* padding-bottom: 0%; */
        /* page-break-after: auto; */
        /* padding-left: 0%; */
    }
    /* 侧边栏背景色和header导航和侧边菜单颜色一致 */
    .el-aside {
        /* background: #f96332; */
    }
    .el-aside .el-menu {
        border-right: none;
        color: #e9eef3;
        background-color: #e96767;
    }
    /* header菜单需要靠右的添加.fr即可(如：<el-menu-item class="fr" index="3">消息中心</el-menu-item>) */
    .el-header .fr {
        float: right;
    }
    .flex1 {
        display: flex;
    }
    .word {
        color: #fff;
        text-align: right;
    }
</style>