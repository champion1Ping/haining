import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 测试数据 */
const xialakuang = {
    shengfen:[
        { label:'北京',value:'1'},
        { label:'天津',value:'1'},
        { label:'河北',value:'1'},
        { label:'山西',value:'1'},
        { label:'内蒙古',value:'1'},
        { label:'辽宁',value:'1'},
        { label:'吉林',value:'1'},
        { label:'黑龙江',value:'1'},
        { label:'上海',value:'1'},
        { label:'江苏',value:'1'},
        { label:'浙江省',value:'1'},
        { label:'安徽',value:'1'},
        { label:'福建',value:'1'},
        { label:'江西',value:'1'},
        { label:'山东',value:'1'},
        { label:'河南',value:'1'},
        { label:'湖北',value:'1'},
        { label:'湖南',value:'1'},
        { label:'广东',value:'1'},
        { label:'广西',value:'1'},
        { label:'海南',value:'1'},
        { label:'重庆',value:'1'},
        { label:'四川',value:'1'},
        { label:'贵州',value:'1'},
        { label:'云南',value:'1'},
        { label:'西藏',value:'1'},
        { label:'陕西',value:'1'},
        { label:'甘肃省',value:'1'},
        { label:'青海',value:'1'},
        { label:'宁夏',value:'1'},
        { label:'新疆',value:'1'},
    ]
}

/* 活动管理测试数据 */
/*
 * ruleForm  1、活动信息的表单
 * signFrom  2、报名的表单
 * shareFrom 3、报名的表单
 * selfFrom  4、个性设置的表单
 * activeList 活动列表
 * */
const state = {
    xialakuang:xialakuang,
    userid:'11',
    roleId:1,
    
}
const mutations = {
    saveRoleId(state,id) {
        state.roleId = id;
    }
}



export default  new Vuex.Store({
    state,
    mutations,
})
