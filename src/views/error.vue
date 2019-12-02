<template>
  <div>
    <h1>登录错误：{{msg}}userId:{{userId}}</h1>
  </div>
</template>
<script>
import store from "../store/index.js";
export default {
  // data() {
  //   return {
  //     msg: this.$route.query.data
  //   };
  // }, //使用这种方式也可以显示 msg
  data() {
    return {
      msg: null,
      // userId: this.$store.state.user.userId
      userId: this.$store.state.user.userId
    };
  },
  created() {
    this.msg = this.$route.query.message;
  }
};
</script>