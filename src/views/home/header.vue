<template>
  <div class="vivoHeader">
    <div class="head">
      <div class="nav">
        <div class="navCenter">
          <ul>
            <li><a href="#">品牌</a></li>
            <li><a href="#">OriginOs</a></li>
            <li><a href="#">体验店</a></li>
            <li><a href="#">社区</a></li>
          </ul>
          <div class="navright">
            <ul>
              <li>
                <a href="#">
                  <i class="iconfont icon-download"></i>
                  下载APP
                </a>
              </li>
              |
              <li><a href="#">购物车</a></li>
              <li><a href="#">个人中心</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "vivoHeader",
  data() {
    return {
      message: "欢迎来到菜鸟教程！",
    };
  },
};
</script>

<style lang="less">
@import "./../style/publicStyle.less";
.head {
  .size(100%;40px);
  overflow: hidden;
  margin: 0;
}
.nav {
  .size(100%;40px);
  color: #676768;
  position: relative;
  background-color: black;
}
.navCenter {
  .size(1200px;40px);
  line-height: 40px;
  margin: 0 auto;
  padding: 0;
  ul {
    float: left;
    margin: 0;
    list-style: none;
    li {
      display: inline-block;
      cursor: pointer;
      padding: 0 21px;
      a {
        .linkcolor(@origin-color:#4a5261;@hover-color:white);
      }
    }
  }
}
.navCenter .navright {
  float: right;
  right: 3%;
  ul {
    float: left;
    li {
      padding-left: 21px;
    }
  }
  i {
    right: 35px;
    top: 35px;
  }
}
i {
  font-family: "iconfont" !important;
  font-style: normal;
}
</style>