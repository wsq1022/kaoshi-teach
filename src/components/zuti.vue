<template>
    <div>
        <header class="mui-bar mui-bar-nav">
            <a class="mui-icon mui-icon-left-nav mui-pull-left" @click.prevent="back($event)"></a>
            <h1 class="mui-title">组题</h1>
        </header>

        <div class="mui-content">


            <div v-for="item in datas">
                    {{item.title}}
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "zuti",

        data(){
            return {
                datas:[]
            }
        },
        mounted(){

            var fid=this.$store.state.fid;
            var tid=this.$store.state.tid;
            var params="fid="+fid+"&tid="+tid;

            console.log(params);

            fetch("/api/teachtest/select?"+params).then(function (e) {
                return e.json();
            }).then((e)=>{
                this.datas=e;
            })
        }
    }
</script>

<style scoped>

</style>