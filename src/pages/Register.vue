<template>
    <div>
        <div class="page-header signup-page section-image">
            <div class="page-header-image" style="background-image: url(&quot;img/nuaa/zhulou-3.jpeg&quot;);"></div>
            <div class="content">
                <div class="container">
                    <div class="row">
                            <div class="col-md-5 mr-auto ml-auto">
                                <div class="card card-signup">
                                        <div> <h4 class="card-title text-center">Register</h4> </div>
                                    <div class="card-body">
                                        <h4 class="category text-warning">
        <i class="now-ui-icons business_bulb-63"></i> 欢迎注册
      </h4>
      <br/>
      
                                       <div class="social text-center">
                                            <!-- <button type="button" class="btn btn-twitter btn-icon btn-round btn-default"><i class="fab fa-twitter"></i></button>
                                            <button type="button" class="btn btn-dribbble btn-icon btn-round btn-default"><i class="fab fa-dribbble"></i></button>
                                            <button type="button" class="btn btn-facebook btn-icon btn-round btn-default"><i class="fab fa-facebook"></i></button> -->
                                            <!-- <h5 class="card-description"> 注册账户 </h5> -->
                                        </div>                                        <div class="form-group input-group">
                                            <!----><div class="input-group-prepend"><i class="input-group-text now-ui-icons users_circle-08"></i></div><input aria-describedby="addon-right addon-left" placeholder="First Name..." class="form-control"><!----><!----></div>
                                        <div class="form-group input-group">
                                            <!----><div class="input-group-prepend"><i class="input-group-text now-ui-icons text_caps-small"></i></div><input aria-describedby="addon-right addon-left" placeholder="Last Name..." class="form-control"><!----><!----></div>
                                            <div class="form-group input-group"><!----><div class="input-group-prepend"><i class="input-group-text now-ui-icons ui-1_email-85"></i></div><input aria-describedby="addon-right addon-left" placeholder="Your Email..." class="form-control"><!----><!----></div>
    <div class="row text-left">
        <n-checkbox v-model="unchecked" >勾选表示同意</n-checkbox>
        <n-button size="sm" link type="primary" @click.native="modals.classic = true">条款</n-button>
    </div>
                                            
                                        <div data-v-6ad05fb0="" class="form-check text-left">
                                            <label data-v-6ad05fb0="" for="a6edffe11c3ac" class="form-check-label">
                                                <!-- <input data-v-6ad05fb0="" id="a6edffe11c3ac" type="checkbox" class="form-check-input"> -->
                                                <!-- <span data-v-6ad05fb0="11" class="form-check-sign"></span> -->
                                                <!-- 勾选表示同意 -->
                                        <!-- <n-button type="primary" link size="sm" @click.native="modals.classic = true">条款</n-button> -->
                                        <!-- <div> -->
      <!-- <n-button type="primary" @click.native="modals.classic = true">
        Classic modal
      </n-button> -->
      <!-- <div>
       <n-checkbox v-model="unchecked">Unchecked<n-button @click.native="modals.classic = true">条款</n-button></n-checkbox>
       <n-checkbox  v-model="checked">Checked</n-checkbox>

       <n-checkbox :disabled="true" :checked="false">Disabled unchecked</n-checkbox>
       <n-checkbox :disabled="true" :checked="true">Disabled checked</n-checkbox>
    </div> -->
    <!-- </div> -->
                                <!-- <n-button  @click.native="modals.classic = true">button</n-button> -->
      <modal :show.sync="modals.classic" headerClasses="justify-content-center">
        <h4 slot="header" class="title title-up">用户使用条款协议</h4>
        <p>使用须知！！！</p>
        <template slot="footer">
          <n-button>Nice Button</n-button>
          <n-button type="danger" @click.native="modals.classic = false">Close</n-button>
        </template>
      </modal>
      
            </label></div>
                    <!-- 注册按钮 -->
                    <div class="card-footer text-center row btn-group btn-group-justified">
                        <button type="button" class="btn btn-round btn-primary btn-lg "><!---->注册<!----></button>
                        <!-- <div> 1313413</div> -->
                        <button  style="margin-left:40px;" type="button" class="btn btn-round  btn-lg "> <a href="\">已有账号</a></button>
                    </div></div></div></div></div></div></div>
                    
                    <footer class="footer"><div class="container"><nav><ul><li><a href="https://www.creative-tim.com">
                       
                       
                     Creative Tim
                    </a></li><li><a href="https:///presentation.creative-tim.com">
                        About Us
                    </a></li><li><a href="https:///blog.creative-tim.com">
                        Blog
                    </a></li><li><a href="https://www.creative-tim.com/license">
                        License
                    </a></li></ul></nav><div class="copyright">
            © 2019, Designed by
            <a href="https:///www.invisionapp.com" rel="noopener" target="_blank">Invision</a>. Coded by
            <a href="https://binarcode.com" rel="noopener" target="_blank">BinarCode</a> and
            <a href="https://www.creative-tim.com" rel="noopener" target="_blank">Creative Tim</a>.
        </div></div></footer></div></div></template>
<script>
import { Card, Button, FormGroupInput } from '@/components';
import {Modal} from '@/components'
import {Checkbox} from '@/components'
import MainFooter from '@/layout/MainFooter';
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
  data(){
        return {
          modals: {
            classic: false
          },
          unchecked: false,
          checked: true
          
        }
      }
};
</script>
<style></style>