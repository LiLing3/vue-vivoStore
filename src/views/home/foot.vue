<template>
  <div class="foot">
    <div class="foot-top">
      <ul>
        <li v-for="footTop in footTops" :key="footTop.name">
          <i :class="footTop.iconClass"></i>
          <span>{{ footTop.name }}</span>
        </li>
      </ul>
    </div>
    <div class="foot-body">
      <ul class="foot-body-left">
        <li v-for="footBody in footBoays" :key="footBody.name">
          <dl>
            <dt>{{ footBody.list1 }}</dt>
            <dd>{{ footBody.list2 }}</dd>
            <dd>{{ footBody.list3 }}</dd>
            <dd>{{ footBody.list4 }}</dd>
            <dd>{{ footBody.list5 }}</dd>
            <dd>{{ footBody.list6 }}</dd>
            <dd>{{ footBody.list7 }}</dd>
            <dd>{{ footBody.list8 }}</dd>
            <dd>{{ footBody.list9 }}</dd>
            <dd>{{ footBody.list10 }}</dd>
          </dl>
        </li>
      </ul>
      <div class="foot-body-right">
        <ul>
          <li>
            <p><i class="iconfont icon-xinxi1"></i>在线客服</p>
          </li>
          <li>
            <p>
              <i class="iconfont icon-dianhua"></i>全国客户服务热线 7*24小时
            </p>
            <span class="telnum">400-678-9688</span>
          </li>
          <li>
            <p>
              <i class="iconfont icon-xiazai46"></i>NEX专属服务热线 7*24小时
            </p>
            <span class="telnum">400-679-9688</span>
          </li>
          <li>
            <p><i class="icon-xinfengyoujian"></i>服务监督邮箱</p>
            <span class="email">vivo@vivo.com</span>
          </li>
          <li>
            <p><i class="iconfont icon-guanzhu1"></i>关注vivo</p>
            <span class="connect">
              <i class="iconfont icon-weibo"></i>
              <i class="iconfont icon-weixin"></i>
              <i class="iconfont icon-changyonglogo30"></i>
              <i class="iconfont icon-lianjie"></i>
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="foot-buttom">
      <span>{{ vivoMessages.name }}</span>
      <span>{{ vivoMessages.loc }}<i class="iconfont icon-ziyuan"></i></span>
    </div>
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      footTops: [
        { name: "官方正品", iconClass: "iconfont icon-zhengpin" },
        { name: "顺丰极速达", iconClass: "iconfont icon-kuaidi" },
        { name: "全国联保", iconClass: "iconfont icon-aixin" },
        { name: "免费定制", iconClass: "iconfont icon-shandian" },
      ],
      footBoays: [
        
           {
            list1: "热门链接",
            list2: "X70 Pro+",
            list3: "S10系列v",
            list4: "NEX 3S",
            list5: "vivo摄影",
            list6: "查找手机",
            list7: "常见问题",
          },
        
         {
            list1: "在线购买",
            list2: "官方商城",
            list3: "选购手机",
            list4: "企业服务",
            list5: "以旧换新",
            list6: "保障服务",
          },
        
         {
            list1: "服务支持",
            list2: "体验店",
            list3: "服务首页",
            list4: "服务网点查询",
            list5: "真伪查询",
            list6: "预约维修",
            list7: "维修配件价格",
            list8: "服务政策",
            list9: "安全公告",
            list10: "环保回收",
          },
        
         {
            list1: "vivo社区",
            list2: "社区首页",
            list3: "摄影专区",
            list4: "新浪微博",
            list5: "百度贴吧",
          },
        
         {
            list1: "关于vivo",
            list2: "vivo简介",
            list3: "工作机会",
            list4: "新闻资讯",
            list5: "采购平台",
            list6: "供应商协同平台",
            list7: "开放平台",
            list8: "廉正合规",
          },
        
      ],
      vivoMessages: {
        name: "©2011-2021 广东天宸网络科技有限公司 版权所有 | 隐私政策 | 法律声明 |营业执照 | 粤B2-20150324 | 粤ICP备14052990号 | 粤公网安备44190002004246号",
        loc: "Select Location",
      },
    };
  },
};
</script>
<style>
.foot {
  width: 1200px;
  height: 800px;
  margin: 40px auto 0;
  background-color: white;
}
.foot .foot-top ul {
  width: 1200px;
  display: flex;
  margin: 0 auto;
  padding: 40px 0;
}
.foot .foot-top ul li {
  height: 90px;
  line-height: 90px;
  font-size: 18px;
  text-align: center;
  flex: 1;
}
.foot-body {
  max-width: 1400px;
  padding-top: 60px;
  margin: 0 auto;
}
.foot-body .foot-body-left {
  display: inline-table;
}
.foot-body .foot-body-left li {
  display: table-cell;
  width: 150px;
}
.foot-body .foot-body-right {
  float: right;
}
.foot-body-right ul li {
  position: relative;
  font-size: 16px;
  margin-bottom: 30px;
  cursor: pointer;
}
.foot-body-right ul li span {
  position: absolute;
  display: inline-block;
  left: 20px;
  margin-top: -20px;
}
.foot-body-left li dl dt {
  font-size: 16px;
  line-height: 17px;
  padding-bottom: 40px;
}
.foot-body-left li dl dd {
  color: #8a8f99;
  font-size: 14px;
  line-height: 17px;
  margin: 10px auto;
}
.telnum {
  color: #415fff;
  font-size: 24px;
  line-height: 30px;
}
.email {
  font-size: 14px;
  color: #8a8f99;
}
.connect i {
  display: inline-block;
  width: 30px;
  height: 30px;
  line-height: 30px;
  font-size: 25px;
  background-color: #f7f7f5;
  border-radius: 50%;
  text-align: center;
}
.foot-buttom {
  max-width: 1400px;
  padding: 30px 0;
  margin: 100px auto 0;
  font-size: 12px;
  color: #8a8f99;
}
.foot-buttom span:nth-child(1) {
  float: left;
}
.foot-buttom span:nth-child(2) {
  cursor: pointer;
  float: right;
}
</style>