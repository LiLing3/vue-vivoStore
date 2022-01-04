<template>
  <div class="case">
    <div class="title">
      <p>精品配件</p>
      <ul>
        <li>手机充电</li>
        <li>手机配件</li>
        <li>音乐设备</li>
        <li>更多<span>></span></li>
      </ul>
    </div>
    <ul class="pic">
      <li v-for="caseinfo in caseinfos" id="box" :key="caseinfo.name">
        <div id="goods">
          <a href="#">
            <img :src="caseinfo.url" class="goodsimg" alt />
          </a>
          <div class="msg">
            <p>{{ caseinfo.name }}</p>
            <p>{{ caseinfo.msg }}</p>
            <p>{{ caseinfo.price }}</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "case",
  data() {
    return {
      caseinfos: [
        {
          url: "static/images/vivo TWS2.png.webp",
          name: "vivo TWS 2",
          msg: "真无线降噪耳机",
          price: "￥499.00",
        },
        {
          url: "static/images/vivo TWS Neo.png.webp",
          name: "vivo TWS Neo",
          msg: "好音质，延迟低",
          price: "￥499.00",
        },
        {
          url: "static/images/iqoo移动电源.png.webp",
          name: "iQOO移动电源",
          msg: "20W PD 双向快充",
          price: "￥129.00",
        },
        {
          url: "static/images/vivo 44W闪充充电器.png.webp",
          name: "vivo 44W闪充充电器套装",
          msg: "九重安全保护",
          price: "￥149.00",
        },
        {
          url: "static/images/iQOO闪电手柄.png.webp",
          name: "iQOO 闪电手柄",
          msg: "电竞级手感",
          price: "￥199.00",
        },
        {
          url: "static/images/iqoo疾风散热背夹.png.webp",
          name: "iQOO 极风散热背夹",
          msg: "秒速制冷降温",
          price: "￥169.00",
        },
        {
          url: "static/images/vivo 2A usb数据线.webp",
          name: "vivo 2A USB数据线",
          msg: "支持双向引擎闪充",
          price: "￥19.00",
        },
        {
          url: "static/images/vivo XE 110有线耳机.png.webp",
          name: "vivo XE110耳机",
          msg: "动听音质，高清通话",
          price: "￥49.00",
        },
      ],
    };
  },
};
</script>
<style lang='less'>
@import "./../style/publicStyle.less";
.case {
  width: 1200px;
  height: 867px;
  margin: 10px auto;
}
.title {
  width: 1200px;
  height: 87px;
  margin: 0 auto;
  position: relative;
}
.case .pic {
  width: 1200px;
  height: 867px;
  padding: 0;
  margin: 0 auto;
  li {
    float: left;
    margin: 5px;
}
}
.title ul {
  position: absolute;
  right: 0;
  padding: 0;
  bottom: 10px;
  li {
    margin-left: 20px;
    float: left;
    outline: 0;
  }
}
</style>