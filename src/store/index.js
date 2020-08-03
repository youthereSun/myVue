import Vue from 'vue';
import Vuex from 'vuex';
import MODULE_LOCAL from './module/local.module';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        local: MODULE_LOCAL,

    }
});
