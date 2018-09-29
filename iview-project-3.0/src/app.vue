<style scoped>
    @import 'styles/common.css';
</style>
<template>
    <Layout>
        <Header>
            <demo-menu></demo-menu>
        </Header>
        <Layout>
            <router-view></router-view>
        </Layout>
    </Layout>
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
