import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

// 路由点击两次报错解决
export const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};


const constRoutes = [{
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
    component: () => import('@/views/dashboard/index.vue'),
    children: [{
        path: '/home',
        name: 'home',
        component: () => import('@/components/home/homeindex'),
        meta: {
          title: '首页',
          icon: '',
          rule: false
        }
      },
      {
        path: '/user',
        name: 'user',
        redirect: 'userinfo',
        meta: {
          title: '用户管理',
          icon: '',
          rule: false
        },
        children: [{
            path: '/userinfo',
            name: 'userinfo',
            meta: {
              title: '用户详情',
              icon: '',
              rule: false
            }
          },
          {
            path: '/userrule',
            name: 'userrule',
            meta: {
              title: '用户权限',
              icon: '',
              rule: false
            }
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: constRoutes
});


export default router;