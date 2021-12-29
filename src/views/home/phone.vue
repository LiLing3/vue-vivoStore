
<template>
  <div class="bestPhone">
    <div class="ti">
      <p>精品手机</p>
    </div>
    <ul class="phone">
      <li>
        <a href="#">
          <img src="static/images/S10系列.png.webp" class="s10" alt />
        </a>
      </li>
      <li>
        <a href="#">
          <img src="static/images/vivoX70星云.png.webp" class="img" alt />
        </a>
        <div class="phmsg">
          <p>vivo X70 12GB+256GB 星云</p>
          <p>蔡司专业影像</p>
          <p>￥4299.00</p>
        </div>
      </li>
      <li>
        <a href="#">
          <img src="static/images/vivoT1电光青.png.webp" class="img" alt />
        </a>
        <div class="phmsg">
          <p>vivo T1 8GB+128GB 电光青</p>
          <p>高通骁龙778G</p>
          <p>￥4198.00</p>
        </div>
      </li>
      <li>
        <a href="#">
          <img src="static/images/iqooZ5蓝色起源.png.webp" class="img" alt />
        </a>
        <div class="phmsg">
          <p>iQOO Z5 8GB+128GB 蓝色起源</p>
          <p>高通骁龙778G</p>
          <p>￥1899.00</p>
        </div>
      </li>
      <li>
        <a href="#">
          <img src="static/images/iqoo8燃.png.webp" class="img" alt />
        </a>
        <div class="phmsg">
          <p>iQOO 8 12GB+256GB 燃</p>
          <p>光致变色</p>
          <p>￥3899.00</p>
        </div>
      </li>
      <li>
        <a href="#">
          <img src="static/images/iqooNeo5.png.webp" class="img" alt />
        </a>
        <div class="phmsg">
          <p>iQOO Neo5</p>
          <p>高通骁龙870</p>
          <p>￥2699.00</p>
        </div>
      </li>
      <li>
        <a href="#">
          <img src="static/images/iqoo7.png.webp" class="img" alt />
        </a>
        <div class="phmsg">
          <p>iQOO 7</p>
          <p>高通骁龙888</p>
          <p>￥4198.00</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    name: 'bestphone'
}
</script>
<style>
.bestPhone{
    width: 1200px;
    height: 867px;
    margin: 10px auto;
}
.phone{
    width: 1200px;
    margin: 0 auto;
    padding: 0;
}
.phone li,.pjimg li{
    width: 290px;
    height: 380px;
    background-color: white;
    transition: all .2s linear;
    float: left;
    margin: 5px;
}
.phone li:first-child,.phone li:first-child img{
    width: 590px;
    height: 380px;
}
.phmsg p:nth-child(1),.pjmsg p:nth-child(1){
    font-size: 16px;
    padding-top: 16px;
}
.phmsg p:nth-child(2),.pjmsg p:nth-child(2){
    font-size: 12px;
    padding-top: 10px;
}
.phmsg p:nth-child(3),.pjmsg p:nth-child(3){
    font-size: 16px;
    padding-top: 20px;
    color: red;
}
</style>