import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
    el: '#app1',
    router,
    render: h => h(App)
});