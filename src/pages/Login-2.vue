<template>
  <div class="page-header clear-filter" filter-color="red">
    <div class="page-header-image" style="background-image: url('img/nuaa/zhulou-3.jpeg')"></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">

          <!-- <div class="card card-signup">
            <div>
              <h4 class="card-title text-center">Register</h4>
            </div>
            <div class="card-body">
              <h4 class="category text-warning">
                <i class="now-ui-icons business_bulb-63"></i>
                欢迎注册
              </h4>
              <br />

              <div class="social text-center">
              </div>
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <i class="input-group-text now-ui-icons users_circle-08"></i>
                </div>
                <input
                  aria-describedby="addon-right addon-left"
                  placeholder="First Name..."
                  class="form-control"
                  v-model="registerForm.accountName"
                />
              </div>
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <i class="input-group-text now-ui-icons text_caps-small"></i>
                </div>
                <input
                  aria-describedby="addon-right addon-left"
                  placeholder="Last Name..."
                  class="form-control"
                  v-model="registerForm.accountPassword"
                />
              </div>
              <div class="form-group input-group">
                <div class="input-group-prepend">
                  <i class="input-group-text now-ui-icons ui-1_email-85"></i>
                </div>
                <input
                  aria-describedby="addon-right addon-left"
                  placeholder="Your Email..."
                  class="form-control"
                  v-model="registerForm.accountType"
                />
              </div>
              <div class="row text-left">
                <n-checkbox v-model="unchecked">勾选表示同意</n-checkbox>
                <n-button
                  size="sm"
                  link="link"
                  type="primary"
                  @click.native="modals.classic = true"
                >条款</n-button>
              </div>

              <div data-v-6ad05fb0 class="form-check text-left">
                <label data-v-6ad05fb0 for="a6edffe11c3ac" class="form-check-label">
                  <modal :show.sync="modals.classic" headerClasses="justify-content-center">
                    <h4 slot="header" class="title title-up">用户使用条款协议</h4>
                    <p>使用须知！！！</p>
                    <template slot="footer">
                      <n-button>Nice Button</n-button>
                      <n-button type="danger" @click.native="modals.classic = false">Close</n-button>
                    </template>
                  </modal>
                </label>
              </div>
              <div class="card-footer text-center row btn-group btn-group-justified">
                <button
                  type="button"
                  class="btn btn-round btn-primary btn-lg"
                  @click="handleRegister"
                >
                  注册
                </button>
                <button style="margin-left:40px;" type="button" class="btn btn-round btn-lg">
                  <a href="\">已有账号</a>
                </button>
              </div>
            </div>
          </div> -->
        
    <el-card>1</el-card>
    <card type="login card-plain">
      <div slot="header" class="logo-container">
        <img v-lazy="'img/now-logo.png'" alt />
      </div>
      <div style="background-color:rgba(220,38,38,0.2)">
        <fg-input class="no-border input-lg myInput" addon-left-icon="now-ui-icons"></fg-input>
        <fg-input
          class="no-border input-lg"
          addon-left-icon="now-ui-icons
                        text_caps-small"
          placeholder="密码..."
          v-model="loginForm.accountPassword"
          type="password"
        ></fg-input>
      </div>
      <el-input class="myInput"></el-input>
      <template slot="raw-content">
        <div class="card-footer text-center">
          <el-button
            @click="handleLogin"
            class="btn btn-primary btn-round btn-lg btn-block"
          >登录{{loginForm.accountName}}</el-button>
        </div>
        <div class="pull-left">
          <h6>
            <a href="\register" class="link footer-link">创建账户</a>
          </h6>
        </div>
        <div class="pull-right">
          <h6>
            <a href="#pablo" class="link footer-link">Need Help?</a>
          </h6>
        </div>
      </template>
    </card>
    </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Modal } from "@/components";
// import MainFooter from '@/layout/MainFooter';
import { login } from "../api/userApi"; // 登录api
import MainFooter from "@/layout/MainFooter";
export default {
  name: "login-page",
  bodyClass: "login-page",
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    Modal,
    [FormGroupInput.name]: FormGroupInput
  },
  data() {
    return {
      loginForm: {
        accountName: "wuyangjun",
        accountPassword: "8423535"
      }
    };
  },
  methods: {
    handleLogin: function() {
      // this.loginForm.accountName = "arise successful";
      login(this.loginForm.accountName, this.loginForm.accountPassword) // 调用后端api
        .then(response => {
          // 正常请求
          // alert(response)
          if (response.data.code == 304) {
            sessionStorage.setItem("id", response.data.data.id);
            this.$router.push({ path: "/layout" }); // 登录成功，跳转页面
          } else alert(response.data.message);
        })
        .catch(error => {
          // 失败提示
          alert(error);
        });
    }
  }
};
</script>
<style>
.myInput {
  background-color: #e6dcdc0f;
}
</style>