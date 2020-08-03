import sun_button from "./sun_button/sun_button";

const components=[sun_button]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component)
    })
}


//      使用 Vue.component(component.name, component)注册组件
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}
export default {
    sun_button
}
