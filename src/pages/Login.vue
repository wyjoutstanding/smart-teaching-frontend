<template>
  <div class="page-header clear-filter" filter-color="red">
    <div
      class="page-header-image"
      style="background-image: url('img/nuaa/zhulou-3.jpeg')"
    ></div>
    <div class="content">
      <div class="container">
        <div class="col-md-5 ml-auto mr-auto">
          <card type="login card-plain" >
            <div slot="header" class="logo-container">
              <img v-lazy="'img/now-logo.png'" alt="" />
            </div>
            <!-- <h4 class="card-title text-center">登录</h4> -->
            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons users_circle-08"
              placeholder="邮箱/手机号..."
            >
            </fg-input>
            <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons text_caps-small"
              placeholder="密码..."
            >
            </fg-input>
            <!-- <fg-input
              class="no-border input-lg"
              addon-left-icon="now-ui-icons ui-1_email-85"
              placeholder="..."
            >
            </fg-input> -->
  <!-- <div class="form-group input-group"> -->
            <!-- div class="input-group-prepend"><i class="input-group-text now-ui-icons users_circle-08"></i></div><input aria-describedby="addon-right addon-left" placeholder="First Name..." class="form-control"></div> -->
            <!-- <div class="form-group input-group"><div class="input-group-prepend"><i class="input-group-text now-ui-icons ui-1_email-85"></i></div><input aria-describedby="addon-right addon-left" placeholder="Your Email..." class="form-control"></div><div data-v-6ad05fb0="" class="form-check"></div> -->
            <template slot="raw-content">
              <div class="card-footer text-center">
                <a
                  href="\Layout"
                  class="btn btn-primary btn-round btn-lg btn-block"
                  >登录</a
                >
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
    <main-footer></main-footer>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import MainFooter from '@/layout/MainFooter';
export default {
  name: 'login-page',
  bodyClass: 'login-page',
  components: {
    Card,
    MainFooter,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>
<style></style>
