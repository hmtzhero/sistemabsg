import VueRouter    from 'vue-router'
import Ejemplo      from './components/example.vue'
import EjemploTabla from './components/exampletable.vue'

const routes  = [
    { path : '/ejemplo', component:Ejemplo },
    { path : '/ejemplotabla', component:EjemploTabla }
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    next()
})

export default router