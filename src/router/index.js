import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store/index'

const Category = () => import('../views/category/Category.vue')
const Detail = () => import('../views/detail/Detail.vue')
const Home = () => import('../views/home/Home.vue')
const Profile = () => import('../views/profile/Profile')
const Address = () => import('../views/profile/Address')
const AddressEdit = () => import('../views/profile/AddressEdit')
const Register = () => import('../views/profile/Register')
const Login = () => import('../views/profile/Login')
const ShopCart = () => import('../views/shopcart/ShopCart')
const CreateOrder = () => import('../views/order/CreateOrder')
const OrderDetail = () => import('../views/order/OrderDetail')
const Order = () => import('../views/order/Order')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: "home"
    }
  },
  {
    path: '/home',
    redirect: "/"
  },
  {
    path: '/category',
    name: 'Category',
    component: Category,
    meta: {
      title: "category",
      isAuthRequired: true
    }
  },
  {
    path: '/detail',
    name: 'Detail',
    component: Detail,
    meta: {
      title: "detail",
      isAuthRequired: true
    }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: {
      title: "Order",
      isAuthRequired: true

    }
  },
  {
    path: '/orderdetail',
    name: 'OrderDetail',
    component: OrderDetail,
    meta: {
      title: "OrderDetail",
      isAuthRequired: true

    }
  },
  {
    path: '/createOrder',
    name: 'CreateOrder',
    component: CreateOrder,
    meta: {
      title: "CreateOrder",
      isAuthRequired: true

    }
  },
  {
    path: '/shopcart',
    name: 'ShopCart',
    component: ShopCart,
    meta: {
      title: "shopcart",
      isAuthRequired: true

    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    meta: {
      title: "profile",
      isAuthRequired: true
    }
  },
  {
    path: '/address',
    name: 'Address',
    component: Address,
    meta: {
      title: "address",
      isAuthRequired: true
    }
  }, {
    path: '/addressedit',
    name: 'AddressEdit',
    component: AddressEdit,
    meta: {
      title: "AddressEdit",
      isAuthRequired: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      title: "register"
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: {
      title: "login",
    }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/vhome',
    name: 'VHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/VueHome.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.isAuthRequired && store.state.user.isLogin === false) {
    return next('/login')
  }
  document.title = to.meta.title;
  return next()
})

export default router
