import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import fangdaixinxi from '@/views/modules/fangdaixinxi/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import shenqingdaikuan from '@/views/modules/shenqingdaikuan/list'
    import zhuxuedaikuan from '@/views/modules/zhuxuedaikuan/list'
    import haidaixinxi from '@/views/modules/haidaixinxi/list'
    import xuexiao from '@/views/modules/xuexiao/list'
    import yinxing from '@/views/modules/yinxing/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告资讯',
        component: news
      }
      ,{
	path: '/fangdaixinxi',
        name: '放贷信息',
        component: fangdaixinxi
      }
      ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
      ,{
	path: '/shenqingdaikuan',
        name: '申请贷款',
        component: shenqingdaikuan
      }
      ,{
	path: '/zhuxuedaikuan',
        name: '助学贷款',
        component: zhuxuedaikuan
      }
      ,{
	path: '/haidaixinxi',
        name: '还贷信息',
        component: haidaixinxi
      }
      ,{
	path: '/xuexiao',
        name: '学校',
        component: xuexiao
      }
      ,{
	path: '/yinxing',
        name: '银行',
        component: yinxing
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
