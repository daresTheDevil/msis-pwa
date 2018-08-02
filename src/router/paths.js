export default [
  { path: '*', }
]

const routes = [
  { path: '/', component: 'Signin' },
  { path: '/signin', redirect: '/' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home' },
  { path: '/msis', component: 'Msis' }
]
