<template>
    <div class="case">
    <div class="jptitle">
        <p class="jppj">精品配件</p>
        <ul>
            <li>手机充电</li>
            <li>手机配件</li>
            <li>音乐设备</li>
            <li>更多<span>></span></li>
        </ul>
    </div>
    <ul class="pjimg">
        <li>
            <a href="#">
                <img src="static/images/vivo TWS2.png.webp" class="img" alt>
            </a>
            <div class="pjmsg">
                <p>vivo TWS 2</p>
                <p>真无线降噪耳机</p>
                <p>￥499.00</p>
            </div>
        </li>
        <li>
            <a href="#">
                <img src="static/images/vivo TWS Neo.png.webp" class="img" alt>
            </a>
            <div class="pjmsg">
                <p>vivo TWS Neo</p>
                <p>好音质，延迟低</p>
                <p>￥499.00</p>
            </div>
        </li>
        <li>
            <a href="#">
                <img src="static/images/iqoo移动电源.png.webp" class="img" alt>
            </a>
            <div class="pjmsg">
                <p>iQOO移动电源</p>
                <p>20W PD 双向快充</p>
                <p>￥129.00</p>
            </div>
        </li>
        <li>
            <a href="#">
                <img src="static/images/vivo 44W闪充充电器.png.webp" class="img" alt>
            </a>
            <div class="pjmsg">
                <p>vivo 44W闪充充电器套装</p>
                <p>九重安全保护</p>
                <p>￥149.00</p>
            </div>
        </li>
        <li>
            <a href="#">
                <img src="static/images/iQOO闪电手柄.png.webp" class="img" alt>
            </a>
            <div class="pjmsg">
                <p>iQOO 闪电手柄</p>
                <p>电竞级手感</p>
                <p>￥199.00</p>
            </div>
        </li>
        <li>
            <a href="#">
                <img src="static/images/iqoo疾风散热背夹.png.webp" class="img" alt>
            </a>
            <div class="pjmsg">
                <p>iQOO 极风散热背夹</p>
                <p>秒速制冷降温</p>
                <p>￥169.00</p>
            </div>
        </li>
        <li>
            <a href="#">
                <img src="static/images/vivo 2A usb数据线.webp" class="img" alt>
            </a>
            <div class="pjmsg">
                <p>vivo 2A USB数据线</p>
                <p>支持双向引擎闪充</p>
                <p>￥19.00</p>
            </div>
        </li>
        <li>
            <a href="#">
                <img src="static/images/vivo XE 110有线耳机.png.webp" class="img" alt>
            </a>
            <div class="pjmsg">
                <p>vivo XE110耳机</p>
                <p>动听音质，高清通话</p>
                <p>￥49.00</p>
            </div>
        </li>
    </ul>
</div>
</template>
<script>
export default {
    name :'case'
}
</script>
<style>
.case{
    width: 1200px;
    height: 867px;
    margin: 10px auto;
}
.jptitle{
    width: 1200px;
    height: 87px;
    margin: 0 auto;
    position: relative;
}
.jppj{
    padding: 38px 0 25px;
    font-size: 24px;
    line-height: 1;
    text-align: center;
}

.case .pjimg{
    width: 1200px;
    height: 867px;
    padding: 0;
    margin: 0 auto;
}
.jptitle ul{
    position: absolute;
    right: 0;
    padding: 0;
    bottom: 10px;

}
.jptitle ul li{
    margin-left: 20px;
    float: left;
    outline: 0;
}
</style>