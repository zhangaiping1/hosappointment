import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../pages/home";
import Index from "../pages/index";
import Product from "../pages/product";
import Detail from "../pages/detail";
import Cart from "../pages/cart";
import Order from "../pages/order";
import OrderConfirm from "../pages/orderConfirm";
import OrderList from "../pages/orderList";
import OrderPay from "../pages/orderPay";
import AliPay from "../pages/alipay";
import Login from "../pages/login"

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect:'/index',
      children:[                  //子路由
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/product/:id',  //动态路由
          name: 'product',
          component: Product,
        },
        {
          path: '/detail/:id',
          name: 'detail',
          component: Detail,
        },
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')       箭头函数方式引入

    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm
        },
        {
          path: 'list',
          name: 'order-list',
          component: OrderList
        },
        {
          path: 'pay',
          name: 'order-pay',
          component: OrderPay
        },
        {
          path: 'alipay',
          name: 'alipay',
          component: AliPay
        }
      ]
    },
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
