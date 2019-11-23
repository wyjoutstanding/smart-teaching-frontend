
<template>
  <navbar type="primary" class="z-index-high">
   <a class="navbar-brand" href="#">Brand</a>

    <template slot="navbar-menu">
      <li class="nav-item active">
          <a href="#pablo" class="nav-link">做题</a>
      </li>

      <li class="nav-item">
          <a href="#pablo" class="nav-link">提交报告</a>
      </li>
    </template>

    <form slot="after-menu" class="form-inline ml-auto" data-background-color>
        <fg-input addon-left-icon="now-ui-icons ui-1_email-85" placeholder="Your Email..."></fg-input>
    </form>
    <form slot="after-menu" class="form=inline ml-auto" data-background-color>
      <fg-input>1233</fg-input>
    </form>
  </navbar>
</template>

<script>
    import {Navbar} from '@/components';
    import fgInput from '@/components';
    export default {
      name: 'my-footer',
        components: {
            Navbar,
            fgInput
        }
    }
</script>