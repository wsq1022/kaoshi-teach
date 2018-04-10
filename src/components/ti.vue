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
                 <router-link to="/selectType">选择类型{{tname}}</router-link>

             </li>
             <li class="mui-table-view-cell">
                <span>
                    开始时间
                </span>
                <span @click="getdate">
                    日期
                </span>
                 |
                 <span @click="gettime">
                    时间
                </span>

                 {{startdatatime}}
             </li>

             <li class="mui-table-view-cell">
                <span>
                    结束时间
                </span>
                 <span @click="getdate1">
                    日期
                </span>
                 |
                 <span @click="gettime1">
                    时间
                </span>

                 {{enddatatime}}
             </li>
         </ul>



             <button type="button" class="mui-btn mui-btn-primary" @click="go">开始组题</button>
         </div>
     </div>
</template>

<script>

   import DateTimePicker from "date-time-picker"
    export default {
        name: "ti",
        data(){
            return {
               start:"",
               end:""
            }
        },

        methods:{
            go(){
                this.$router.push("/zuti")

            },
            back(e){
                this.$router.go(-1);
            },
            getdate(){
                var datePicker = new DateTimePicker.Date({lang:"zh-CN"}, {})

                datePicker.on('selected', (formatTime, now)=> {
                   this.start=formatTime
                })
            },
            gettime(){
                var datePicker = new DateTimePicker.Time({lang:"zh-CN"}, {})

                datePicker.on('selected', (formatTime, now)=> {
                    this.start+=" "+(formatTime)
                    this.$store.commit("setstartdatatime",this.start)
                })
            },

            getdate1(){
                var datePicker = new DateTimePicker.Date({lang:"zh-CN"}, {})

                datePicker.on('selected', (formatTime, now)=> {
                    this.end=formatTime
                })
            },
            gettime1(){
                var datePicker = new DateTimePicker.Time({lang:"zh-CN"}, {})

                datePicker.on('selected', (formatTime, now)=> {
                    this.end+=" "+(formatTime);
                    this.$store.commit("setenddatatime",this.end)
                })
            }


        },
        computed:{
            fname(){
                return this.$store.state.fname==""?"":"("+this.$store.state.fname+")";
            },
            cname(){
                return this.$store.state.cname==""?"":"("+this.$store.state.cname+")";
            },
            startdatatime(){
                return this.$store.state.startdatatime
            },
            enddatatime(){
                return this.$store.state.enddatatime
            },
            tname(){
                return this.$store.state.tname==""?"":"("+this.$store.state.tname+")";
            }
        }
    }
</script>

<style scoped>

</style>