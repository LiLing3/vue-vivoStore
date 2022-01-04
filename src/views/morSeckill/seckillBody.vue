<template>
  <div class="seckillBody">
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
          <div>
            <span>触底好价，手快速抢</span>
          </div>
        </li>
      </ul>
    </div>
    <ul class="tu">
      <li v-for="item in items" :key="item.name" id="box">
        <div id="goods">
          <img :src="item.discountImgsrc" class="discountimg" alt />
          <router-link
            :to="{ name: 'detail', query: { id: item.id } }"
            target="_blank"
          >
            <img :src="item.phoneaImgsrc" class="goodsimg" alt />
          </router-link>
          <div class="msg">
            <p>{{ item.name }}</p>
            <p>{{ item.discount }}</p>
            <p>
              <span>{{ item.price.originalPrice }}</span
              ><span class="price">{{ item.price.presentPrice }}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "seckillBody",
  data() {
    return {
      items: [
        {
          id: 0,
          discountImgsrc: require("./../../../static/images/less50.png"),
          phoneaImgsrc: "static/images/power.png.webp",
          name: "vivo 65W多扣原装超快闪充充电器",
          discount: "直降50元",
          price: { originalPrice: "￥99", presentPrice: "￥149" },
          href: "http://localhost:8080/#/detailPage",
        },
        {
          id: 1,
          discountImgsrc: "static/images/五折秒杀.png",
          phoneaImgsrc: "static/images/钢化膜.png.webp",
          name: "vivo X70原装高透保护膜",
          discount: "五折秒杀",
          price: { originalPrice: "￥14", presentPrice: "￥29" },
        },
        {
          id: 2,
          discountImgsrc: "static/images/九元秒杀.png",
          phoneaImgsrc: "static/images/保护膜.png.webp",
          name: "vivo Y30/Y30标准版/Y30g/iQOO U1x 原装高透保护膜",
          discount: "9元秒杀",
          price: { originalPrice: "￥9", presentPrice: "￥19" },
        },
        {
          id: 3,
          discountImgsrc: "static/images/限时秒杀.png",
          phoneaImgsrc: "static/images/iqooU3太初黑.png.webp",
          name: "iQOO U3 6GB+64GB 太初黑",
          discount: "限时直降150元",
          price: { originalPrice: "￥1148", presentPrice: "￥1298" },
        },
      ],
    };
  },
};
</script>
<style scoped lang='less'>
@import "./../style/publicStyle.less";
.goodsstyle();
.seckillBody {
  width: 1200px;
  margin: 0 auto;
}
.vkill {
  margin-top: 20px;
}
.title ul li {
  float: left;
  &:nth-child(3) {
    float: right;
  }
}
.time p {
  color: #999;
  font-size: 16px;
  margin: 0;
  padding: 15px 0;
  span {
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
}
.title {
  width: 1200px;
  height: 57px;
  div > span,
  i {
    display: inline-block;
    position: relative;
    top: 20px;
  }
}
.seckillBody .tu {
  width: 1200px;
  height: 380px;
  padding: 0;
  li {
    width: 290px;
    height: 380px;
    float: left;
    margin: 0 5px;
  }
}
</style>