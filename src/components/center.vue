<template>
     <div>
         <header class="mui-bar mui-bar-nav">
             <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
             <h1 class="mui-title">个人中心</h1>
         </header>
         <div class="mui-content">

             <ul class="mui-table-view">
                 <li class="mui-table-view-cell">
                     <router-link class="mui-navigate-right" to="/editPass">修改密码</router-link>
                 </li>
             </ul>
         </div>
     </div>
</template>
<script>
    import Vue from 'vue'
    import Calendar from 'vue-mobile-calendar'
    import DateTimePicker from "date-time-picker"
    Vue.use(Calendar)
    export default {
            methods:{
                back(e){
                    this.$router.go(-1);
                }
            },
        data(){

        }

    }
</script>
<style scoped>

</style>