import Vue from 'vue'
import VueRouter from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views - Main
const Dashboard = () => import('@/views/Dashboard')

// Views - MSIS
const MsisModules = () => import('@/views/msis/Modules')
const MsisReports = () => import('@/views/msis/Reports')

// Views - Components

// Views - Pages
const Page404 = () => import('@/views/pages/Page404')
const Page500 = () => import('@/views/pages/Page500')
const Login = () => import('@/views/pages/Login')
const Register = () => import('@/views/pages/Register')

Vue.use(VueRouter)

export default new VueRouter({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      redirect: '/pages/login',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'msismodules',
          name: 'MSIS Modules',
          component: MsisModules
        },
        {
          path: 'msisreports',
          name: 'MSIS Reports',
          component: MsisReports
        }
      ]
    },
    {
      path: '/pages',
      redirect: '/pages/404',
      name: 'Pages',
      component: {
        render (c) { return c('router-view') }
      },
      children: [
        {
          path: '404',
          name: 'Page404',
          component: Page404
        },
        {
          path: '500',
          name: 'Page500',
          component: Page500
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        },
        {
          path: 'register',
          name: 'Register',
          component: Register
        }
      ]
    }
  ]
})
