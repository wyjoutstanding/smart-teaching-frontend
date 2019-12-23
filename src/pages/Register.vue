<template>
    <div>
        <div class="page-header signup-page section-image">
            <div
                class="page-header-image"
                style="background-image: url(&quot;img/nuaa/zhulou-3.jpeg&quot;);"></div>
            <div class="content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 mr-auto ml-auto">
                            <div class="card card-signup">
                                <div class="card-body">
                                    <h4 class="category text-warning">
                                        <i class="now-ui-icons business_bulb-63"></i>
                                        欢迎注册
                                    </h4>
        <el-divider></el-divider>
                                        <div><br/></div>

                                    <div class="social text-center">
                                         <div class="row" type="flex" :justify="space-between" >
                                                        <div @click="checkUser=checkUserNot" class="col-md-6"><el-checkbox v-model="checkUserNot" label="教师" border></el-checkbox></div>
                                                        <div @click="checkUserNot=checkUser" class="col-md-6"><el-checkbox v-model="checkUser" label="学生" border></el-checkbox> </div>
                                        </div>
                                    </div>
                                    <div><br/></div>
                                    <div class="form-group input-group">
                                        <!---->
                                        <div class="input-group-prepend">
                                            <i class="input-group-text now-ui-icons users_circle-08"></i>
                                        </div>
                                        <input
                                            aria-describedby="addon-right addon-left"
                                            placeholder="First Name..."
                                            class="form-control"
                                            v-model="registerForm.accountName">
                                            <!---->
                                            <!---->
                                        </div>
                                        <div><br/></div>
                                        <div class="form-group input-group">
                                            <!---->
                                            <div class="input-group-prepend">
                                                <i class="input-group-text now-ui-icons text_caps-small"></i>
                                            </div>
                                            <input
                                                aria-describedby="addon-right addon-left"
                                                placeholder="Last Name..."
                                                class="form-control"
                                                v-model="registerForm.accountPassword">
                                                <!---->
                                                <!---->
                                            </div>
                                            <div><br/></div>
                                            <div class="form-group input-group">
                                                <!---->
                                                <!-- <div class="input-group-prepend">
                                                    <i class="input-group-text now-ui-icons ui-1_email-85"></i>
                                                </div> -->
                                                <!-- <input
                                                    aria-describedby="addon-right addon-left"
                                                    placeholder="Your Email..."
                                                    class="form-control"
                                                    v-model="registerForm.accountType"> -->
                                                    <!---->
                                                    <!---->
                                                   
                                                </div>
                                                <div class="row text-left">
                                                    <n-checkbox v-model="unchecked" @click.native="modals.classic = true">勾选表示同意条款</n-checkbox>13
                                                    <!-- <el-checkbox  size="medium"></el-checkbox>
                                                    <el-button>勾选表示同意条款 </el-button> -->
                                                </div>

                                                <!-- 注册按钮 -->
                                                <div class="card-footer text-center row btn-group btn-group-justified">
                                                    <button
                                                        type="button"
                                                        class="btn btn-round btn-primary btn-lg"
                                                        @click="handleRegister"><!---->注册<!----></button>
                                                    <!-- <div> 1313413</div> -->
                                                    <button style="margin-left:40px;" type="button" class="btn btn-round  btn-lg" @click="$router.push({path:'/login'})">
                                                        <!-- <button @click="$router.push({path:'/login'})">已有账号</button> -->已有账号
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <footer class="footer">
                            <div class="container">
                                <nav>
                                    <ul>
                                        <li>
                                            <a href="https://wyjoutstanding.github.io/">
                                                About Me
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://wyjoutstanding.github.io/">
                                                Blog
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div class="copyright">
                                    © 2019, Designed by
                                    <a href="https://wyjoutstanding.github.io/" rel="noopener" target="_blank">wuyangjun</a>. Coded by
                                    <a href="https://wyjoutstanding.github.io/" rel="noopener" target="_blank">wuyangjun</a>
                                </div>
                            </div>
                        </footer>
                    </div>
                    <div data-v-6ad05fb0="" class="form-check text-left">
                                                    <label data-v-6ad05fb0="" for="a6edffe11c3ac" class="form-check-label">
                                                        <modal :show.sync="modals.classic" headerClasses="justify-content-center">
                                                            <h4 slot="header" class="title title-up">用户使用条款协议</h4>
                                                            <p>使用须知！！！</p>
                                                            <template slot="footer">
                                                                <n-button @click="modals.classic=false;unchecked=true">同意</n-button>
                                                                <n-button type="danger" @click.native="modals.classic = false">取消</n-button>
                                                            </template>
                                                        </modal>

                                                    </label>
                                                </div>
                </div>
            </template>
            <script>
                import {Card, Button, FormGroupInput} from '@/components';
                import {Modal} from '@/components'
                import {Checkbox} from '@/components'
                import MainFooter from '@/layout/MainFooter';

                import {register} from '@/api/userApi.js'
                export default {
                    name: 'login-page',
                    bodyClass: 'login-page',
                    components: {
                        Card,
                        MainFooter,
                        [Button.name]: Button,
                        [FormGroupInput.name]: FormGroupInput,
                        Modal,
                        [Checkbox.name]: Checkbox
                    },
                    data() {
                        return {
                            modals: {
                                classic: false
                            },
                            unchecked: false,
                            checked: true,
                            checkUser: false, // 学生0
                            checkUserNot: false,
                            registerForm: {
                                accountName: "wyj",
                                accountPassword: "123",
                                accountType: "0"
                                }}
                    },
                    methods: {
                        handleRegister() {
                            // alert("register")
                            if (this.checkUser) this.registerForm.accountType = 0; // 学生
                            else this.registerForm.accountType = 1; // 教师
                            register(
                                this.registerForm.accountName,
                                this.registerForm.accountPassword,
                                this.registerForm.accountType
                            )
                                .then((res) => {
                                    sessionStorage.setItem('id', res.data.data.id)
                                    this
                                        .$router
                                        .push({path: '/layout'})
                                    this.$message({message: '恭喜，注册成功！', type: 'success', showClose: 'true'})
                                    // alert(res.data.message)})
                                })
                                .catch(() => {
                                    this
                                        .$message
                                        .error("注册失败")
                                })
                            }
                    }
                };
            </script>
            <style></style>