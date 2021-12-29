<template>
    <div class="morSeckill">
        <vivoHeader></vivoHeader>
        <vivoNav></vivoNav>
        <vivoSeckillbanner></vivoSeckillbanner>
        <vivoSeckillbody></vivoSeckillbody>
        <vivoFoot></vivoFoot>
    </div>
    
</template>
<script>
import vivoHeader from "./../../views/home/header.vue";
import vivoNav from "./../../views/home/nav.vue";
import vivoFoot from "./../../views/home/foot.vue";
import vivoSeckillbanner from "./seckillBanner.vue"
import vivoSeckillbody from "./seckillBody.vue"
export default {
    name:'morSeckill',
    components:{vivoHeader,vivoNav,vivoFoot,vivoSeckillbanner,vivoSeckillbody}
}
</script>
<style>
li{
    list-style: none;
}
body{
    background-color: #f7f7f5;
}
</style>