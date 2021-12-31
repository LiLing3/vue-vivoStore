<template>
  <div class="seckillBanner">
    <div class="seckillPic">
      <img src="static/images/morSeckill.jpg" alt="V秒杀 精选好物低至9元" />
    </div>
    <div class="seckillTime">
      <div v-for="section in sections" :key="section.time" id="box">
        <span>{{ section.time }}</span>
        <span id="state">{{ section.state }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "seckillBanner",
  data() {
    return {
      sections: [
        { time: "16日10:00", state: "已结束" },
        { time: "16日20:00", state: "已结束" },
        { time: "00:00", state: "已结束" },
        { time: "10:00", state: "抢购中" },
        { time: "20:00", state: "即将开始" },
        { time: "明日00:00", state: "即将开始" },
        { time: "明日10:00", state: "即将开始" },
      ],
    };
  },
  methods:{
    
  }
};
/*
var state =document.getElementById('state');
var stateDiv=state.parentNode;
if(state.innerHTML=="抢购中"){
    stateDiv.style.background="red";
}
*/
</script>
<style>
.seckillBanner {
  width: 1200px;
  height: 430px;
  margin: 0 auto;
  overflow: hidden;
  position: relative;
  background-color: white;
}
.seckillPic {
  margin: 0;
  overflow: hidden;
}
.seckillPic img {
  width: 100%;
  height: 100%;
  vertical-align: bottom;
}
.seckillTime {
  display: flex;
  overflow: hidden;
  width: 1100px;
  margin: 0 auto;
}
.seckillTime div {
  flex: 1;
  text-align: center;
}
.seckillTime span {
  display: block;
  height: 40px;
}
.seckillTime span:nth-child(1) {
  padding-top: 30px;
  font-size: 24px;
  font-style: italic;
  font-weight: 600px;
}
</style>