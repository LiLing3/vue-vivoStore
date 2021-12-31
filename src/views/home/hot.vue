<template>
    <div class="hot">
    <div class="title">
        <p>热卖专区</p>
    </div>
    <div class="thi">
        <ul>
            <li v-for="hotinfo in hotinfos" id="box" :key="hotinfo.name">
                <div id="goods">
                    <a href="#">
                        <img :src="hotinfo.url" class="goodsimg" alt="hotinfo.alt">
                    </a>
                <div class="msg">
                    <p>{{hotinfo.name}}</p>
                    <p>{{hotinfo.msg}}</p>
                    <p>{{hotinfo.price}}</p>
                </div>
                </div>
                
            </li>
            
        </ul>
    </div>
</div>
</template>
<script>
export default {
    name : 'hot',
    data(){
        return{
            hotinfos:[
                {
                    url:'static/images/iqooZ5透镜黑.png.webp',
                    alt:'iqooZ5透镜黑',
                    name:"iQOO Z5 8GB+128G 透镜黑",
                    msg:"天玑900",
                    price:"￥1699.00"
                },
                {
                    url:'static/images/vivoX70星云.png.webp',
                    alt:'vivoX70星云',
                    name:"vivo X70 Pro 8GB+256GB 星云",
                    msg:"蔡司专业影像",
                    price:"￥4599.00"
                },
                {
                    url:'static/images/iqoo8传奇版.png.webp',
                    alt:'iqoo8传奇版',
                    name:"iQOO 8 12GB+256GB 传奇版",
                    msg:"120W超快闪充",
                    price:"￥3899.00"
                }
            ]
        }
    }

}
</script>
<style scoped lang='less'>
@import "./../style/publicStyle.less";
.goodsstyle(390px;511px;230px;230px;58px);
.hot{
    .size(1200px;608px);
    //width: 1200px;
    //height: 608px;
    margin: 10px auto;
}
.title p{
    text-align: center;
    font-size: 24px;
    padding: 30px 0 20px;
}
.thi{
    width: 1200px;
    height: 511px;
    margin: auto;
    li{
        float: left;
        margin: 0 5px;
    } 

    
} 
</style>