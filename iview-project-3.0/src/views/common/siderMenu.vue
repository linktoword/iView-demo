<template>
    <Menu :theme="this.$store.state.commonStore.theme" :active-name="activeName">
        <MenuGroup :title="item.title" v-for="item in sideMenuList" :key="item.id">
            <MenuItem :name="childList.name" v-for="childList in item.list" :key="childList.id">
            <Icon :type="childList.iconType" /> {{ childList.text }}
            </MenuItem>
        </MenuGroup>
    </Menu>
</template>
<script>
export default {
    props: {
        activeName: Number,
        sideMenuList: [Array, Object],
    },
    data() {
        return {

        }
    },
    methods: {

        created() {

        }
    }
}
</script>

<style scoped lang="less">

</style>