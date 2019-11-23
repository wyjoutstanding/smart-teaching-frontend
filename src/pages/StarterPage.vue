<template>
  <div class="starter-page">
    <div class="section text-center">
      <h3>Create your next awes134r13r132134me website</h3>
    </div>
    <div>
      <n-switch v-model="switches.defaultOn"></n-switch>
      <n-switch v-model="switches.defaultOff"></n-switch>
    </div>
    <div>
    <n-switch v-model="switches.defaultOn" onText="ON" off-text="OFF"></n-switch>
    <!-- <Switch v-model="switches.defaultOff" onText="ON" offText="OFF"></Switch> -->
    <n-switch v-model="switches.defaultOff" onText="ON" offText="OFF"></n-switch>
  </div>
  <a href="/login">
    <button >go to login
    </button>
  </a>
  </div>
</template>
<script>
import {Switch} from '@/components';
export default {
  name: 'starter',
  components:{
    [Switch.name]: Switch
    //  Switch
  },
  data() {
    return {
      switches: {
        defaultOn: true,
        defaultOff: false
      }
    }
  }
};
</script>
<style>
.starter-page {
  min-height: calc(100vh - 95px);
}
</style>
