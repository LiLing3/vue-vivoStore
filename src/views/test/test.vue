<template>
<div>
    <testScoped id="test">
    </testScoped>
</div>
    
</template>
<script>
import testScoped from './testScoped.vue'
export default {
    name:'test',
    components:{testScoped}
}
</script>
<style scoped lang='less'>
@import './../style/detailPagestyle.less';
#test /deep/ #in{
    background-color: seagreen;
}

</style>
