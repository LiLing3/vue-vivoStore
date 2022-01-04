<template>
  <div class="logoNav">
    <div class="logo">
      <i class="iconfont icon-VIVO"></i>
    </div>
    <ul>
      <li v-for="site in sites" :key="site.name">
        {{ site.name }}
      </li>
    </ul>
    <div class="search">
      <i class="iconfont icon-sousuo"></i>
    </div>
  </div>
</template>
<script>
export default {
  name: "logoNav",
  data() {
    return {
      sites: [
        { name: "NEX系列" },
        { name: "X系列" },
        { name: "S系列" },
        { name: "T系列" },
        { name: "Y系列" },
        { name: "iQOO手机" },
        { name: "智能硬件" },
        { name: "商城" },
        { name: "服务" },
      ],
    };
  },
};
</script>
<style lang='less'>
@import "./../style/publicStyle.less";
.logoNav {
  width: 1200px;
  height: 86px;
  margin: 0 auto;
  padding: 0;
}
.logoNav ul {
  width: 800px;
  line-height: 86px;
  margin-left: 230px;
  padding: 0;
  list-style: none;
}

.logo {
  font-size: 24px;
  float: left;
  margin-left: 30px;
  margin-top: 20px;
  font-weight: bold;
}

.logoNav .search {
  float: right;
  line-height: 86px;
  height: 20px;
  margin-right: 30px;
  position: relative;
  cursor: pointer;
}
.logoNav ul li {
  float: left;
  height: 65px;
  font-size: 14px;
  line-height: 86px;
  padding: 0 21px;
  margin: 0;
  cursor: pointer;
  .linkcolor();
}

</style>