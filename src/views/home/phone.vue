
<template>
  <div class="bestPhone">
    <div class="title">
      <p>精品手机</p>
    </div>
    <ul class="phone">
      <li id="box">
        <a href="#">
          <img src="static/images/S10系列.png.webp" class="s10" alt />
        </a>
      </li>
      <li v-for="phoneinfo in phoneinfos" id="box" :key="phoneinfo.name">
        <div id="goods">
          <a href="#">
            <img :src="phoneinfo.url" class="goodsimg" alt />
          </a>
          <div class="msg">
            <p>{{ phoneinfo.name }}</p>
            <p>{{ phoneinfo.msg }}</p>
            <p>{{ phoneinfo.price }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "bestphone",
  data() {
    return {
      phoneinfos: [
        {
          url: "static/images/vivoX70星云.png.webp",
          name: "vivo X70 12GB+256GB 星云",
          msg: "蔡司专业影像",
          price: "￥4299.00",
        },
        {
          url: "static/images/vivoT1电光青.png.webp",
          name: "vivo T1 8GB+128GB 电光青",
          msg: "高通骁龙778G",
          price: "￥4198.00",
        },
        {
          url: "static/images/iqooZ5蓝色起源.png.webp",
          name: "iQOO Z5 8GB+128GB 蓝色起源",
          msg: "高通骁龙778G",
          price: "￥1899.00",
        },
        {
          url: "static/images/iqoo8燃.png.webp",
          name: "iQOO 8 12GB+256GB 燃",
          msg: "光致变色",
          price: "￥3899.00",
        },
        {
          url: "static/images/iqooNeo5.png.webp",
          name: "iQOO Neo5",
          msg: "高通骁龙870",
          price: "￥2699.00",
        },
        {
          url: "static/images/iqoo7.png.webp",
          name: "iQOO 7",
          msg: "高通骁龙888",
          price: "￥4198.00",
        },
      ],
    };
  },
};
</script>
<style lang='less'>
@import "./../style/publicStyle.less";
.bestPhone {
  width: 1200px;
  height: 867px;
  margin: 10px auto;
}
.phone {
  width: 1200px;
  margin: 0 auto;
  padding: 0;
  li {
    width: 290px;
    height: 380px;
    background-color: white;
    float: left;
    margin: 5px;
  }
}
.phone li:first-child,
.phone li:first-child img {
  .size(590px;380px);
}
</style>