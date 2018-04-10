import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        fname: "",
        fid:"",
        cname:"",
        cid:"",
        startdatatime:"",
        enddatatime:"",
        tname:"",
        tid:"",
        radioInfo:[],
        checkInfo:[],
        jiandaInfo:[]
    },
    mutations: {

        setFname(state,obj){
            state.fname=obj.fname;
            state.fid=obj.fid;
        },
        setCname(state,obj){
            state.cname=obj.cname;
            state.cid=obj.cid;
        },
        setTname(state,obj){
            state.tname=obj.tname;
            state.tid=obj.tid;
        },
        setstartdatatime(state,val){
            state.startdatatime=val;
        },
        setenddatatime(state,val){
            state.enddatatime=val;
        },
        setRadioInfo(state,val){
            state.radioInfo=val;
        },
        setCheckInfo(state,val){
            state.checkInfo=val;
        },
        setJiandaInfo(state,val){
            state.jiandaInfo=val;
        }

    }
})

export default store