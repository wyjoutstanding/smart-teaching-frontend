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
                                        欢迎登录
                                    </h4>
                                    <el-divider></el-divider>
                                    <br/>

                                    <div class="form-group input-group">
                                        <!---->
                                        <div class="input-group-prepend">
                                            <i class="input-group-text now-ui-icons users_circle-08"></i>
                                        </div>
                                        <input
                                            aria-describedby="addon-right addon-left"
                                            placeholder="用户名..."
                                            class="form-control"
                                            v-model="loginForm.accountName">
                                            <!---->
                                            <!---->
                                        </div>
                                        <div><br/><br/></div>
                                        <div class="form-group input-group">
                                            <!---->
                                            <div class="input-group-prepend">
                                                <i class="input-group-text now-ui-icons text_caps-small"></i>
                                            </div>
                                            <input
                                                aria-describedby="addon-right addon-left"
                                                placeholder="密码..."
                                                class="form-control"
                                                v-model="loginForm.accountPassword"
                                                type="password">
                                                <!---->
                                                <!---->
                                            </div>

                                                <!-- 注册按钮 -->
                                                <div class="card-footer text-center row btn-group btn-group-justified">
                                                    <button
                                                        type="button"
                                                        class="btn btn-round btn-primary btn-lg"
                                                        @click="handleLogin"><!---->登录<!----></button>
                                                    <!-- <div> 1313413</div> -->
                                                    <button style="margin-left:40px;" type="button" class="btn btn-round  btn-lg " @click="$router.push({path:'/Register'})">
                                                        <!-- <button >立即注册</button> -->立即注册
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
                </div>
            </template>
            <script>
                import {Card, Button, FormGroupInput} from '@/components';
                import {Modal} from '@/components'
                import {Checkbox} from '@/components'
                import MainFooter from '@/layout/MainFooter';
import {login} from '../api/userApi' // 登录api
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
                            registerForm: {
                                accountName: "wyj",
                                accountPassword: "123",
                                accountType: "0"
                            },
                            loginForm: {
                    accountName: "wuyangjun",
                    accountPassword: "8423535"
                }
                        }
                    },
                    methods: {
                        handleLogin: function () {
                // this.loginForm.accountName = "arise successful";
                login(this.loginForm.accountName, this.loginForm.accountPassword) // 调用后端api
                    .then((response) => { // 正常请求
                        // alert(response)
                        if (response.data.code == 304) {
                            sessionStorage.setItem("id", response.data.data.id);
                            // alert(sessionStorage.getItem('id'));
                            this
                                .$router
                                .push({path: "/layout"}) // 登录成功，跳转页面
                        } else 
                            alert(response.data.message)
                    })
                    .catch((error) => { // 失败提示
                        alert(error)
                    })
                }}}
            </script>
            <style></style>