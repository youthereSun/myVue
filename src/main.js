import Vue from "vue"; // 引入vue
import App from "./App"; // 引入组件App
import router from './router'
import store from './store'
import sun_button from "./components/sun_ui";
Vue.use(sun_button)

import '@/assets/styles/test.less'
//transform-object-rest-spread
/*处理babel不解析...符号导致报错,出现于vuex中的...mapGetters， ...mapState*/

new Vue ({
    el: '#app', // 挂载到index.html中的#app上
    router,
    store,
    render: h => h (App) // 用App.vue渲染
})
