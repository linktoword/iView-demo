<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <div>
        <demo-menu></demo-menu>
        <router-view></router-view>
    </div>
</template>
<script>
import Menu from './views/common/menu'
    export default {
        components: {
            'demo-menu': Menu
        },
        data () {
            return {}
        },
        mounted () {

        },
        beforeDestroy () {

        },
        methods: {

        }
    }
</script>
