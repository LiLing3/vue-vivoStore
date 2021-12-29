<template>
  <div class="home">
    <vivoHeader></vivoHeader>
    <vivoNav></vivoNav>
    <vivoBanner></vivoBanner>
    <vivoArea></vivoArea>
    <vivoSeckill></vivoSeckill>
    <vivoHot></vivoHot>
    <vivoBestphone></vivoBestphone>
    <vivoBestcase></vivoBestcase>
    <vivoFoot></vivoFoot>
  </div>
</template>

<script>
import vivoHeader from "./header.vue";
import vivoNav from "./nav.vue";
import vivoBanner from "./banner.vue";
import vivoArea from "./area.vue";
import vivoSeckill from "./seckill.vue"
import vivoHot from "./hot.vue"
import vivoBestphone from "./phone.vue"
import vivoBestcase from "./case.vue"
import vivoFoot from "./foot.vue"
export default {
  name: "home",
  components: { vivoHeader,vivoNav,vivoBanner,vivoArea,vivoSeckill,vivoHot,
                vivoBestphone,vivoBestcase,vivoFoot },
  data() {
    return {
      message: "欢迎来到菜鸟教程！",
    };
  },
};
</script>
<style>
body{
      font-weight: normal;
      font-style: normal;
      font-size: 14px;
      line-height: 1.5;
      font-family: "Helvetica Neue", Helvetica, Arial, "Microsoft YaHei", sans-serif;
      color: #333;
      background-color: #f7f7f5;
      margin:0;
      padding: 0;
      outline: 0;
      text-align: center;
    }
a{
  text-decoration: none;
}   
</style>
