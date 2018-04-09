<template>
     <div>
         <header class="mui-bar mui-bar-nav">
             <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
             <h1 class="mui-title">个人中心</h1>
         </header>
     </div>
</template>
<script>
    export default {
            methods:{
                back(e){
                    this.$router.go(-1);
                }
            }
    }
</script>
<style scoped>

</style>