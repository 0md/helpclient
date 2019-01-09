import Vue from 'vue'
import Router from 'vue-router'
import main from '../pages/main/index.vue'
import wxdayin from '../pages/dayin.vue'
//用户模块
import login from '../pages/user/login/login.vue'
import userList from '../pages/user/list/list.vue'
import updatepwd from '../pages/user/updatepwd/updatepwd.vue'
import userInfo from '../pages/user/info/info.vue'

//权限模块
import authList from '../pages/auth/list/list.vue'

//平台总览
import overview from '../pages/overview/overview.vue'

import agentEdit from '../pages/agent/agent_edit.vue'
import agent from '../pages/agent/agent.vue'

import area from '../pages/area/area.vue'
import area_edit from '../pages/area/area_edit.vue'

import server from '../pages/server/server.vue'
import wxuserList from '../pages/wxuser/list/list.vue'

import daiqu from '../pages/order/daiqu.vue'
import dayin from '../pages/order/dayin.vue'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/dayin_wx',
      name: '打印',
      component: wxdayin
    },
    {
      path: '/',
      name: 'main',
      component: main,
      children: [{
          path: '/user/list',
          name: '用户列表',
          component: userList
        },
        {
          path: '/user/info',
          name: '用户信息',
          component: userInfo
        },
        {
          path: '/auth/list',
          name: '权限列表',
          component: authList
        },
        {
          path: '/updatepwd',
          name: '修改密码',
          component: updatepwd
        },
        {
          path: '/overview',
          name: '平台总览',
          component: overview
        },
        {
          path: '/agent_edit',
          name: '新增代理商',
          component: agentEdit
        },
        {
          path: '/agent',
          name: '代理商列表',
          component: agent
        },
        {
          path: '/area',
          name: '代理地区列表',
          component: area
        },
        {
          path: '/area_edit',
          name: '编辑地区',
          component: area_edit
        },
        {
          path: '/server',
          name: '编辑服务',
          component: server
        },
        {
          path: '/wxuser_list',
          name: '微信用户',
          component: wxuserList
        },
        {
          path: '/daiqu',
          name: '快递代取订单',
          component: daiqu
        },
        {
          path: '/dayin',
          name: '项目管理',
          component: dayin
        },

      ]
    }
  ]
})
