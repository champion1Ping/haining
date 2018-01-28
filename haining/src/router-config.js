
// import activePublic from './page/activePublic/index.vue'
// import step1 from './page/activePublic/step1.vue'
// import step2 from './page/activePublic/step2.vue'
// import step3 from './page/activePublic/step3.vue'
// import step4 from './page/activePublic/step4.vue'

// import totalpages from './page/activeManage/totalpages.vue'
// import activeManage from './page/activeManage/index.vue'
// import detail from './page/activeManage/detail.vue'

// import page1 from './page/activeManage/page1.vue'
// import page2 from './page/activeManage/page2.vue'
// import page3 from './page/activeManage/page3.vue'
// import page4 from './page/activeManage/page4.vue'
// import page5 from './page/activeManage/page5.vue'

import login from  './page/login/login.vue'
import personinfo from './page/login/personinfo.vue'
import contractgain from './page/datakeeper/contractgain.vue'
import phoneLogin from './page/login/phoneLogin.vue'
import systemNotice from './page/systemmanager/systemNotice.vue'
import agencymanager from './page/systemmanager/agencymanager.vue'
import usermanager from './page/systemmanager/usermanager.vue'
import productgain from './page/systemmanager/productgain.vue'  
import customerIncomeRegister from './page/datakeeper/customerIncomeRegister.vue'
import customerGain from './page/profitinquiry/customerGain.vue'
import agencyprofit from './page/profitinquiry/agencyprofit.vue'
import customerRecommend from './page/profitinquiry/customerRecommend.vue'
import resetpw from './page/login/resetpassword.vue'
import updatepw from './page/login/updatepassword.vue'
import notices from './page/login/notices.vue'
// import test from '/page/login/test.vue'
export default [
      {path:'/login',component:login,meta:{  requiresAuth: false    }},
      {path:'/reset',component:resetpw,meta:{  requiresAuth: false    }},
      {path:'/updatepw',component:updatepw,meta:{  requiresAuth: true    }},
      {path:'/personinfo',component:personinfo,meta:{  requiresAuth: true    }},
      {path:'/contractgain',component:contractgain,meta:{  requiresAuth: true    }},
      {path:'/phoneLogin',component:phoneLogin,
             meta:{  requiresAuth: false    } 
      },
      {path:'/systemNotice',component:systemNotice,meta:{  requiresAuth: true    }},
      {path:'/agencymanager',component:agencymanager,meta:{  requiresAuth: true    }},
      {path:'/usermanager',component:usermanager,meta:{  requiresAuth: true    }},
      {path:'/productgain',component:productgain,meta:{  requiresAuth: true    }},
      {path:'/customer', component:customerIncomeRegister,meta:{  requiresAuth: true    }},
      {path:'/customergain',component:customerGain,meta:{  requiresAuth: true    }},
      {path:'/agencyprofit',component:agencyprofit,meta:{  requiresAuth: true    }},
      {path:'/customerRecommend',component:customerRecommend,meta:{  requiresAuth: true    }},
      {path:'/notices',component:notices,
              meta:{  requiresAuth: true    }
                            
      }
      
  // {
  //   path: '/activeManage',component:totalpages,
  //   children:[
  //     { path: ''      , component: activeManage  },
  //     {
  //       path: 'detail', component: detail,

  //       children: [
  //         {path:'',component: page1},
  //         {
  //           path: 'page1', component: page1,
  //           children: [
  //             {path: '', component: step1},
  //             {path: 'step1', component: step1},
  //             {path: 'step2', component: step2},
  //             {path: 'step3', component: step3},
  //             {path: 'step4', component: step4}
  //           ]
  //         },
  //         { path: 'page2', component: page2  },
  //         { path: 'page3', component: page3  },
  //         { path: 'page4', component: page4  },
  //         { path: 'page5', component: page5  }
  //       ]
  //     },
  //   ]
  // },{
  //   path:'/activePublic',component:activePublic,
  //   children:[
  //     { path: ''      , component: step1  },
  //     { path: 'step1', component: step1  },
  //     { path: 'step2', component: step2  },
  //     { path: 'step3', component: step3  },
  //     { path: 'step4', component: step4  }
  //   ]
  // }
]
