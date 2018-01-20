import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/* 测试数据 */
const xialakuang = {
    shengfen:[
          { label:'北京',value:'1'},
          { label:'天津',value:'2'},
          { label:'河北',value:'3'},
          { label:'山西',value:'4'},
          { label:'内蒙古',value:'5'},
          { label:'辽宁',value:'6'},
          { label:'吉林',value:'7'},
          { label:'黑龙江',value:'8'},
          { label:'上海',value:'9'},
          { label:'江苏',value:'10'},
          { label:'浙江省',value:'11'},
          { label:'安徽',value:'12'},
          { label:'福建',value:'13'},
          { label:'江西',value:'14'},
          { label:'山东',value:'15'},
          { label:'河南',value:'16'},
          { label:'湖北',value:'17'},
          { label:'湖南',value:'18'},
          { label:'广东',value:'19'},
          { label:'广西',value:'20'},
          { label:'海南',value:'21'},
          { label:'重庆',value:'22'},
          { label:'四川',value:'23'},
          { label:'贵州',value:'24'},
          { label:'云南',value:'25'},
          { label:'西藏',value:'26'},
          { label:'陕西',value:'27'},
          { label:'甘肃省',value:'28'},
          { label:'青海',value:'29'},
          { label:'宁夏',value:'30'},
          { label:'新疆',value:'31'},
    ],
    yesorno:[
      {label:'是',value:1},
      {label:'否',value:0}
    ],
    //交易状态
    dealStatus:[
        {label:'正常',value:'0'},
        {label:'结束',value:'1'},
        {label:'提前终止',value:'2'},
        {label:'未交易',value:'3'},

    ],
    //投资金额
    investMoney:[
        {label:'小于100000',value:'0'},
        {label:'大于100000',value:'1'},
    ],
    sex:[
        {label:'男',value:1},
        {label:'女',value:2},
    ],
    certificateType:[
        {label:'身份证',value:'1'},
        {label:'护照',value:'2'},
        {label:'港澳通行证',value:'3'},
        {label:'其他',value:'4'},

    ]
}
const usertype={
    usermanager:[
      {label:'管理员',value:'3'},
      {label:'代理商',value:'1'}
    ],
    notice:[
       {label:'全部', value:4},
       {label:'管理员',value:3},
       {label:'代理商',value:1},
       {label:'客户',value:2}
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
    roleId:0,
    token:'',
    agentCode:'',
    realName:'',
    nextDocumentNum:'',
    directRecommendationAccount:'',
    indirectRecommendationAccount:'',
    usertype:usertype,
    
}
const mutations = {
    saveRoleId(state,id) {
        state.roleId = id;
    },
    saveToken(state,token){
        state.token = token;
    },
    saveAgentCode(state,agentCode){
      state.agentCode = agentCode;
    },
    saveDirect(state, directRecommendationAccount){
      state.directRecommendationAccount = directRecommendationAccount;
    },
    saveInDirect(state,indirectRecommendationAccount){
      state.indirectRecommendationAccount = indirectRecommendationAccount;
    },
    saveRealName(state, realName){
      state.realName = realName;
    },
    saveNextDocumentCode(state,documentCode){
      state.documentCode = documentCode;
    }
}



export default  new Vuex.Store({
    state,
    mutations,
})
