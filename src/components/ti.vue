<template>
     <div>
         <header class="mui-bar mui-bar-nav">
             <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
             <h1 class="mui-title">出题</h1>
         </header>

         <div class="mui-content">
         <ul class="mui-table-view">
             <li class="mui-table-view-cell">
                 <router-link class="mui-navigate-right" to="/selectFangxiang">选择方向 {{fname}}</router-link>
             </li>
             <li class="mui-table-view-cell">
                 <router-link to="/selectBanji" class="mui-navigate-right">选择班级 {{cname}}</router-link>
             </li>
             <li class="mui-table-view-cell">
                 <a class="mui-navigate-right">选择类型</a>
             </li>
         </ul>
         </div>
     </div>
</template>

<script>
    export default {
        name: "ti",
        methods:{
            back(e){
                this.$router.go(-1);
            }
        },
        computed:{
            fname(){
                return this.$store.state.fname==""?"":"("+this.$store.state.fname+")";
            },
            cname(){
                return this.$store.state.cname==""?"":"("+this.$store.state.cname+")";
            }
        }
    }
</script>

<style scoped>

</style>