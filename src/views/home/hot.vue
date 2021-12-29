<template>
    <div class="hot">
    <div class="ti">
        <p>热卖专区</p>
    </div>
    <div class="thi">
        <ul>
            <li>
                <a href="#">
                    <img src="static/images/iqooZ5透镜黑.png.webp" class="pic" alt="iqooZ5透镜黑">
                </a>
                <div class="ms">
                    <p>iQOO Z5 8GB+128G 透镜黑</p>
                    <p>天玑900</p>
                    <p>￥1699.00</p>
                </div>
            </li>
            <li>
                <a href="#">
                    <img src="static/images/vivoX70星云.png.webp" class="pic" alt="vivoX70星云">
                </a>
                <div class="ms">
                    <p>vivo X70 Pro 8GB+256GB 星云</p>
                    <p>蔡司专业影像</p>
                    <p>￥4599.00</p>
                </div>
            </li>
            <li>
                <a href="#">
                    <img src="static/images/iqoo8传奇版.png.webp" class="pic" alt="iqoo8传奇版">
                </a>               
                <div class="ms">
                    <p>iQOO 8 12GB+256GB 传奇版</p>
                    <p>120W超快闪充</p>
                    <p>￥3899.00</p>
                </div>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name : 'hot'
}
</script>
<style lang='less'>
body{
    background-color: #f7f7f5;
}
.hot{
    width: 1200px;
    height: 608px;
    margin: 10px auto;
}
.ti p{
    text-align: center;
    font-size: 24px;
    padding: 30px 0 20px;

}
.thi{
    width: 1200px;
    height: 511px;
    margin: auto;
    ul{
        width: 1200px;
        padding: 0;
    }
    li{
        width: 390px;
        height: 511px;
        background-color: white;
        float: left;
        margin: 0 5px;
        transition: all .2s linear;
    } 
} 
.thi,.phone,.pjimg{
    a{
        display: block;
        text-align: center;
    }
} 
    
.pic{
    text-align: center;
    width: 230px;
    height: 230px;
    margin-top:58px;

}
.ms p{
    &:nth-child(1){
        font-size: 20px;
        padding-top: 30px;
    }
    &:nth-child(2){
        font-size: 14px;
        padding-top: 5px;
        padding-bottom: 40px;
    }
    &:nth-child(3){
        font-size: 18px;
        color: red;
    }
}
</style>