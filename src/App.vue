<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
import vivoHome from "././views/home/home.vue"
export default {
  name: "app",
  components:{vivoHome},
  data() {
    return {
     
    };
  },
};
</script>

<style>
#app {
    font-weight: normal;
      font-style: normal;
      font-size: 14px;
      line-height: 1.5;
      font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", sans-serif;
      color: #333;
      background-color: #f7f7f5;
      min-width: 1226px;
      margin:0;
      padding: 0;
      outline: 0;
}
</style>
