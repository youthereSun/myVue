<template>
    <div @click="handleClick" class="sun_button_container">
        <div class="sun_button">
            {{text}}
        </div>

    </div>
</template>

<script>
    export default {
        name: "sun_button",
        props: {
            text: {
                type: String,
                require: false,
                default: "点击我"
            }
        },
        methods: {
            handleClick() {
                this.$emit("click")
            }
        }
    }
</script>

<style lang="less" scoped>
    .sun_button_container {
        position: absolute;
        padding: 10px 20px;
        background-color: seagreen;
        color: white;
        border-radius: 5px;
    }

</style>
