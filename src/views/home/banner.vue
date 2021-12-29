<template>
  <div class="vivoBanner">
    <div class="banner">
      <ul class="bannerPic">
        <li>
          <div class="picBox">
            <img src="static/images/vivoWatch.jpg" alt />
          </div>
        </li>
        <li>
          <div class="picBox">
            <img src="static/images/iqooNEO系列.jpg" alt />
          </div>
        </li>
        <li>
          <div class="picBox">
            <img src="static/images/vivoTWS.png" alt />
          </div>
        </li>
        <li>
          <div class="picBox">
            <img
              src="static/images/蔡司光学2.jpg"
              alt="蔡司光学镜头，专业影像芯片V1"
            />
          </div>
        </li>
        <li>
          <div class="picBox">
            <img
              src="static/images/iqoo8系列.png"
              alt="iQOO8系列，全感操控，一触即发"
            />
          </div>
        </li>
      </ul>
      <div class="menu">
        <ul>
          <li v-for="item in items" :key="item.name">
            <a href="#">{{ item.name }}</a>
            <i>></i>
          </li>
        </ul>
      </div>
      <div class="bannerDot">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vivoBanner",
  data() {
    return {
      items: [
        { name: "手机" },
        { name: "手机充电" },
        { name: "手机配件" },
        { name: "音乐设备" },
        { name: "智能硬件" },
        { name: "游戏摄影" },
        { name: "日用出行" },
      ],
    };
  },
};
</script>
<style>
.vivoBanner {
  width: 1200px;
  background-color: white;
  margin: 0 auto;
  overflow: hidden;
}
.banner {
  width: 1200px;
  height: 522px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
}
.bannerPic {
  width: 6000px;
  height: 522px;
  padding: 0;
  margin: 0;
  animation: move 30s linear infinite 0s normal;
}
.bannerPic li {
  width: 1200px;
  height: 522px;
  margin: 0;
  padding: 0;
  float: left;
}
.picBox {
  width: 1200px;
  margin: 0;
  height: 522px;
  padding: 0;
  position: relative;
}
.picBox img {
  width: 1200px;
  height: 522px;
  display: block;
  margin: 0 auto;
}
ul {
  list-style: none;
  padding: 0;
}
.menu {
  width: 200px;
  height: 490px;
  background-color: rgba(255, 255, 255, 0.6);
  margin-left: 100px;
  padding: 20px 0;
  box-sizing: border-box;
  position: absolute;
  left: 50px;
  margin-top: -502px;
}
.menu ul li {
  padding-left: 30px;
  height: 64px;
  line-height: 64px;
  position: relative;
}
.menu ul li:hover {
  background-color: rgba(255, 255, 255, 1);
}
.menu ul li a {
  color: black;
}
.menu ul li i {
  top: 0px;
  float: right;
  padding-right: 30px;
}
.bannerDot {
  position: absolute;
  bottom: 15px;
  left: 50%;
  margin-left: -138px;
}
.bannerDot span:first-child,
.bannerDot span:hover {
  height: 5px;
}
.bannerDot span {
  display: inline-block;
  width: 42px;
  height: 2px;
  background-color: white;
  margin: 0 5px;
  cursor: pointer;
}
@keyframes move {
  0% {
    margin-left: 0px;
  }
  18% {
    margin-left: 0px;
  }
  20% {
    margin-left: -1200px;
  }
  38% {
    margin-left: -1200px;
  }
  40% {
    margin-left: -2400px;
  }
  58% {
    margin-left: -2400px;
  }
  60% {
    margin-left: -3600px;
  }
  78% {
    margin-left: -3600px;
  }
  80% {
    margin-left: -4800px;
  }
  98% {
    margin-left: -4800px;
  }
  100% {
    margin-left: -6000px;
  }
}
</style>