<template>
  <div>
    <vivoHeader></vivoHeader>
    <vivoNav></vivoNav>

    <div class="detail">
      <div class="pageUrl">
        <p>商城首页>配件产品>充电器</p>
      </div>
      <div>
        <ul class="show">
          <li>
            <div id="detailPic">
              <img :src="details[i].url" alt="" />
              <!-- <span> {{details[i]}}</span> -->
            </div>
            <ul>
              <li
                v-for="(img, index) in details[i].imgs"
                :key="index"
                v-on:click="channge(img)"
              >
                <img :src="img" alt="" />
              </li>
            </ul>
          </li>
          <li>
            <div>
              <h1>{{ details[i].title }}</h1>
              <p class="detailInfo">
                <span>{{details[i].detailInfo.infoDiscont}}</span>
                {{details[i].detailInfo.infoText}}
              </p>
              <p class="detailTime">
                <span class="iconfont icon-shouye">秒杀中</span>
                距离结束
                <span>00</span>天 <span>03</span>时 <span>21</span>分
                <span>41</span>秒
                <span>
                  <a href="http://localhost:8080/#/morSeckill" target="_blank">
                    更多活动
                    <i class="iconfont icon-youjiantou"></i>
                  </a>
                </span>
              </p>
            </div>
            <div class="price">
              <div class="moneyPrice">
                <p>{{details[i].moneyPrice.presentPrice}}</p>
                <p>{{details[i].moneyPrice.originalPrice}}</p>
              </div>
              <div class="pointPrice">
                <p><span>{{details[i].pointPrice.point}}</span>{{details[i].pointPrice.pointText}}</p>
              </div>
            </div>
            <div class="support">
              <span>商品支持：</span>
              <span class="iconfont icon-guanzhu2">花呗分期</span>
              <span class="iconfont icon-guanzhu2">以旧换新</span>
              <span class="iconfont icon-guanzhu2">积分抵现</span>
            </div>
            <div class="design">
              <p>款式:</p>
              <div> 
                  <span>新款</span>
                  <span>旧款</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    
  </div>
</template>
<script>
import vivoHeader from "./../home/header.vue";
import vivoNav from "./../home/nav.vue";
export default {
  name: "detail",
  data() {
    return {
      details:[
        {
          url: "static/images/detialshow1.png.webp",
          imgs: [
          "static/images/detialshow1.png.webp",
          "static/images/detialshow2.png.webp",
          "static/images/detialshow3.png.webp",
          "static/images/detialshow4.png.webp",
          "static/images/detialshow5.png.webp",
          ],
          title:"vivo 55W Type-C 闪充充电器套装",
          detailInfo:{
            infoDiscont:"【直降20元】",
            infoText:"原装正品，支持55W/44W/33W/22.5W/18W双引擎闪充（温馨提示：本套装内数据线为接口。）注：如需退换货，需整套一起办理。"
          },
          moneyPrice:{
            originalPrice:"￥149",
            presentPrice:"￥129.00"
          },
          pointPrice:{
            point:"积分",
            pointText:"购物送积分"
          },
        },
        {
          url: "static/images/detialshow1.png.webp",
          imgs: [
          "static/images/detialshow1.png.webp",
          "static/images/detialshow2.png.webp",
          "static/images/detialshow3.png.webp",
          "static/images/detialshow4.png.webp",
          "static/images/detialshow5.png.webp",
          ],
          title:"vivo啦啦啦啦啦",
          detailInfo:{
            infoDiscont:"【直降20元】",
            infoText:"原装正品，支持55W/44W/33W/22.5W/18W双引擎闪充（温馨提示：本套装内数据线为接口。）注：如需退换货，需整套一起办理。"
          },
          moneyPrice:{
            originalPrice:"￥149",
            presentPrice:"￥129.00"
          },
          pointPrice:{
            point:"积分",
            pointText:"购物送积分"
          },
        },
        {
          url: "static/images/detialshow1.png.webp",
          imgs: [
          "static/images/detialshow1.png.webp",
          "static/images/detialshow2.png.webp",
          "static/images/detialshow3.png.webp",
          "static/images/detialshow4.png.webp",
          "static/images/detialshow5.png.webp",
          ],
          title:"vivo哈哈哈",
          detailInfo:{
            infoDiscont:"【直降20元】",
            infoText:"原装正品，支持55W/44W/33W/22.5W/18W双引擎闪充（温馨提示：本套装内数据线为接口。）注：如需退换货，需整套一起办理。"
          },
          moneyPrice:{
            originalPrice:"￥149",
            presentPrice:"￥129.00"
          },
          pointPrice:{
            point:"积分",
            pointText:"购物送积分"
          },
        },
      ],
      i:0,
    };
  
  },
  mounted(){
    console.log(this.$route.query);
    this.i=this.$route.query.id; 
  },
  methods: {
    channge(u) {
      console.log(this.details[this.$route.query.id].url);
      this.details[this.$route.query.id].url = u;
      //this.$set(details[i].url,i,u);
    },
  },
  components: { vivoHeader, vivoNav },
};
</script>
<style scoped lang="less">
@import './../style/detailPagestyle.less';
#outtest {
  background-color: salmon;
  /deep/ #intest{
  background-color: red;
}
}
.pageUrl {
  width: 1200px;
  background-color: white;
  margin: 0 auto;
  font-size: 12px;
}
.detailInfo {
  font-size: 12px;
  span {
    color: red;
  }
}
/*
@import 'detailPage.vue';
*/
.show > li {
  width: 520px;
  float: left;
  margin: 20px;
}
.detail {
  background-color: white;
  width: 100%;
  height: 1300px;
}
#detailPic img {
  width: 520px;
  height: 520px;
}
ul li img {
    width: 85px;
    height: 85px;
}
.detailTime {
  color: white;
  background-color: tomato;
  a {
    text-decoration: none;
    color: white;
    float: right;
  }
}
li {
  list-style: none;
  float: left;
}
.price {
  width: 510px;
  height: 80px;
  display: flex;
  div {
    flex: 1;
  }
}
.moneyPrice p {
  margin: 0;
  &:first-child {
    color: red;
    font-size: 30px;
  }
  &:last-child {
    font-size: 15px;
    color: #d7d7d7;
    text-decoration: line-through;
  }
}
.pointPrice {
  border-left: thin solid #d7d7d7;
  padding-left: 20px;
  font-size: 16px;
  span {
    color: white;
    background-color: red;
    font-size: 10px;
    margin-right: 10px;
  }
}
.support{
  margin: 20px auto;
  padding:10px 0 ;
  border-top: thin solid #d7d7d7;
  span{
    font-size: 12px;
    margin-right: 20px;
  }
} 
.design span{
  width: 200px;
  height: 50px;
  display: inline-block;
  border: thin solid #d7d7d7;
  color: #9b9898;
  border-radius: 10px;
  text-align: center;
  line-height: 50px;
  margin: auto 20px;
  &:visited{
    border: thin solid red;
  }
}
</style>