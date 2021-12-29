<template>
    <div class="zoneArea">
    <ul>
        <li>
            <div >
                <img src="static/images/手机专区.jpg" alt="手机专区">
            </div>
        </li>
        <li>
            <div>
                <img src="static/images/配件专区.jpg" alt="配件专区">
            </div>
        </li>
        <li>
            <div>
                <img src="static/images/免费定制.jpg" alt="免费定制">
            </div>
        </li>
    </ul> 
</div>
</template>
<script>
export default {
    name :'zoneArea'
}
</script>
<style>
.zoneArea{
    width: 1200px;
    height: 200px;
    margin: 20px auto;
}
.zoneArea ul{
    width: 1200px;
    height: 200px;
    margin: auto;
    padding: 0;
}
.zoneArea ul li{
    float: left;
    margin: 0 5px;
    transition: all .2s linear;
}
.zoneArea ul li:hover,.thing:hover,.thi li:hover,.phone li:hover,.pjimg li:hover{
    box-shadow: 0 15px 30px rgb(0 0 0 / 10%);
    transform: translate3d(0, -2px, 0);
}
</style>