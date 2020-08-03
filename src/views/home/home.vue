<template>
    <div id="page_home">
        <sun_button text="我是按钮组件"/>
        <div class="appInfo">
        <p  v-for="(val, key, i) in appinfo" :key="i">{{key}}:{{val}}</p>
        </div>
        <img class="sun" src="@/assets/imgs/sun.png">
 <!-- 大图片      <img class="sun" src="@/assets/imgs/bar.png">-->
        <div class="grass"></div>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    export default {
        name: "home",
        data(){
            return{

            }
        },
        computed: {
            ...mapState({
                appinfo: state => state.local.appinfo
            })
        },

    }
</script>
