import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from '@/views/dashboard/index.vue'

Vue.use(VueRouter);

// 路由点击两次报错解决
export const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};
const routers = [{
    path: "/",
    redirect: "login"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
  },
]

const constRoutes = [{
    path: '/home',
    name: 'home',
    component: Dashboard,
    redirect:'homefirst',
    meta: {
      title: '首页',
      icon: 'el-icon-location',
      rule: false
    },
    children: [{
      path: '/homefirst',
      name: 'homefirst',
      component: () => import('@/components/home/homeindex'),
      meta: {
        title: '首页',
        icon: 'el-icon-location',
        rule: false
      },
    }]
  },
  {
    path: '/user',
    name: 'user',
    redirect: 'userinfo',
    component: Dashboard,
    meta: {
      title: '用户管理',
      icon: 'el-icon-location',
      rule: false
    },
    children: [{
        path: '/userinfo',
        name: 'userinfo',
        component: () => import('@/components/user/userinfo'),
        meta: {
          title: '用户详情',
          icon: '',
          rule: false
        }
      },
      {
        path: '/userrule',
        name: 'userrule',
        component: () => import('@/components/user/userrule'),
        meta: {
          title: '用户权限',
          icon: '',
          rule: false
        }
      }
    ]
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [...constRoutes, ...routers]
});


export default router;