import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'dashboard',
    component: () => import('./../views/Dashboard')
  }, 
  {
    path: '/about',
    name: 'about',
    component: () => import('./../views/About')
  },
  {
    path: '/requests',
    name: 'requests',
    component: () => import('./../views/doctor/PatientRequest')
  },
  {
    path: '/appointment',
    name: 'appointment',
    component: () => import('./../views/Appointment')
  },
  {
    path: '/hospitals',
    name: 'hospitals',
    component: () => import('./../views/hospital/Hospitals')
  },
  {
    path: '/messenger',
    name: 'messenger',
    component: () => import('./../components/Chat/Messenger')
  },
   
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
