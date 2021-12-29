<template>
  <div class="seckill">
    <div class="title">
      <ul>
        <li>
          <div class="vkill">
            <img src="static/images/V秒杀.png" alt="V秒杀" />
          </div>
        </li>
        <li>
          <div class="time">
            <p>距离结束<span>03</span>时<span>57</span>分<span>59</span>秒</p>
          </div>
        </li>
        <li>
          <div >
            <!--
              <router-link id="morseckill" to="/morseckill">
              <span>更多场次</span>
            </router-link>
            -->
            <a href="http://localhost:8080/#/morSeckill" target="_blank"><span>更多场次</span></a>
            <i class="iconfont icon-youjiantou"></i>
          </div>
        </li>
      </ul>
    </div>
    <ul class="tu">
        <li v-for="item in items" :key="item.name">
        <div class="thing">
          <img :src="item.discountImgsrc" class="zhekou" alt />
          <a href="#">
            <img
              :src="item.phoneaImgsrc"
              class="img"
              alt="vivo 65W多扣原装超快闪充充电器"
            />
          </a>
          <div class="msg">
            <p>{{item.name}}</p>
            <p>{{item.discount}}</p>
            <p><span>{{item.price.originalPrice}}</span><span class="price">{{item.price.presentPrice}}</span></p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "seckill",
  data() {
    return {
      items: [
        {
          discountImgsrc:require('./../../../static/images/less50.png'),
          phoneaImgsrc:'static/images/power.png.webp',
          name: "vivo 65W多扣原装超快闪充充电器",
          discount: "直降50元",
          price: {originalPrice: "￥99",presentPrice: "￥149",
          },
        },
        {
          discountImgsrc:'static/images/五折秒杀.png',
          phoneaImgsrc:'static/images/钢化膜.png.webp',
          name: "vivo X70原装高透保护膜",
          discount: "五折秒杀",
          price: { originalPrice: "￥14", presentPrice: "￥29" },
        },
        {
          discountImgsrc:'static/images/九元秒杀.png',
          phoneaImgsrc:'static/images/保护膜.png.webp',
          name: "vivo Y30/Y30标准版/Y30g/iQOO U1x 原装高透保护膜",
          discount: "9元秒杀",
          price: { originalPrice: "￥9", presentPrice: "￥19" },
        },
        {
          discountImgsrc:'static/images/限时秒杀.png',
          phoneaImgsrc:'static/images/iqooU3太初黑.png.webp',
          name: "iQOO U3 6GB+64GB 太初黑",
          discount: "限时直降150元",
          price: { originalPrice: "￥1148", presentPrice: "￥1298" },
        }
      ]
    };
  },
  methods:{
    moreSeckill(){
      this.$router.replace('/detailPages/morSeckill.vue')
    }
  }
};
</script>
<style>
.seckill {
  width: 1200px;
  height: 447px;
  margin: 10px auto;
}
.title {
  width: 1200px;
  height: 57px;
}
.vkill {
  margin-top: 20px;
}
.title ul li {
  float: left;
}
.title ul li:nth-child(3) {
  float: right;
}
.time p {
  color: #999;
  font-size: 16px;
}
.time p span {
  display: inline-block;
  color: white;
  width: 38px;
  height: 32px;
  line-height: 32px;
  border-radius: 3px;
  text-align: center;
  font-size: 18px;
  background-color: #ec0404;
}
.seckill .tu {
  width: 1200px;
  height: 380px;
  padding: 0;
}
.seckill .tu li {
  width: 290px;
  height: 380px;
  float: left;
  margin: 0 5px;
}
.thing {
  width: 290px;
  height: 380px;
  background-color: white;
  transition: all 0.2s linear;
}
.thing .img,
.phone .img,
.pjimg .img {
  width: 172px;
  height: 172px;
  margin-top: 41px;
}
.thing .zhekou {
  position: relative;
  top: 16px;
  left: 16px;
  float: left;
}
.thing p,
.ms p,
.phmsg p,
.pjimg p {
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.msg {
  margin: auto;
  width: 260px;
}
.msg p:nth-child(1) {
  padding-top: 20px;
  font-size: 16px;
}
.msg p:nth-child(2) {
  padding-top: 5px;
  font-size: 12px;
}
.msg p:nth-child(3) {
  padding-top: 5px;
  color: red;
  font-size: 22px;
}
.msg p .price {
  font-size: 14px;
  text-decoration: line-through;
  color: #aaa;
  margin-left: 6px;
}
</style>