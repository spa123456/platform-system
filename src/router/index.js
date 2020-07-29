import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
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
    children: [{
        path: '/home',
        name: 'home',
        compontent:()=>import('@/components/home/homeindex'),
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

const asyncRoute = []

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {

  if (to.path=="/dashboard") {
    // 请求后端数据
    console.log("getRouter");
  }else{
    next()
  }
})

export default router;