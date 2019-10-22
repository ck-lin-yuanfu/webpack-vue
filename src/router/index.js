import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
	routes: [
		// use import load *.vue  need install @babel/plugin-syntax-dynamic-import
		// npm install --save-dev @babel/plugin-syntax-dynamic-import
		{ path: '/404', component: () => import('@/views/error-page/404.vue')},
		{ path: '/login', component: () => import('@/views/login/index.vue')},
		{ path: '/index', component: () => import('@/views/index/index.vue')},
		{ path: '/', component: () => import('@/views/index/index.vue')},
		{ path: '*', redirect: '/404' }
	]
});