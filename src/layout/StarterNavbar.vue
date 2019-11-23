<template>
  <navbar position="fixed" type="primary" menu-classes="ml-auto" transparent>
    <template slot-scope="{ toggle, isToggled }">
      <router-link v-popover:popover1 class="navbar-brand" to="/presentation">
        My Site Name
      </router-link>
      <el-popover
        ref="popover1"
        popper-class="popover"
        placement="bottom"
        width="200"
        trigger="hover"
      >
        <div class="popover-body">
          Designed by Invision. Coded by Creative Tim
        </div>
      </el-popover>
    </template>
    <template slot="navbar-menu">
      <drop-down tag="li" title="Sample Dropdown">
        <nav-link class="dropdown-item">
          <i class="now-ui-icons shopping_box"></i> Headers
        </nav-link>
      </drop-down>
    </template>
    <form slot="after-menu" class="form-inline ml-auto" data-background-color>
        <fg-input addon-left-icon="now-ui-icons ui-1_email-85" placeholder="Your Email..."></fg-input>
    </form>
  </navbar>
</template>

<script>
import { DropDown, NavbarToggleButton, Navbar, NavLink, FormGroupInput } from '@/components';
import { Popover } from 'element-ui';

export default {
  name: 'main-navbar',
  components: {
    DropDown,
    Navbar,
    NavbarToggleButton,
    NavLink,
    [Popover.name]: Popover,
    [FormGroupInput.name]: FormGroupInput
  }
};
</script>

<style scoped></style>
