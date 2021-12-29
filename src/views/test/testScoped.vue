<template>
    <div id="out">
        外部
        <div id="in">
            内部
        </div>
    </div>
</template>
<script>
export default {
    name:'testScoped'
}
</script>
<style scoped lang='less'>
#out{
    background-color:salmon;
    #in{
        background-color:sienna;
    }
}
</style>