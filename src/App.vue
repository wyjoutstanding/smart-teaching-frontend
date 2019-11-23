<template>
  <div id="app">
    <router-view name="header" />
    <div class="wrapper"> </div>
    <router-view />
    <!-- </div> -->
    <router-view name="footer" />
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
/* *{
  padding: 0;
  margin: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
#app {
  height: 100%;
} */
</style>
