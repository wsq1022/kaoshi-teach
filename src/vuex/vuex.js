import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        fname: "",
        fid:"",
        cname:"",
        cid:""
    },
    mutations: {
        setFname(state,fname,fid){
            state.fname=fname;
            state.fid=fid;
        },
        setCname(state,cname,cid){
            state.cname=cname;
            state.cid=cid;
        }
    }
})

export default store