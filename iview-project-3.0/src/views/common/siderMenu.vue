<template>
    <Menu :theme="this.$store.state.commonStore.theme" :active-name="activeName" class="slide-menu-class" style="width: 200px;">
        <MenuGroup :title="item.title" v-for="item in sideMenuList" :key="item.id">
            <MenuItem :name="childList.name" v-for="childList in item.list" :key="childList.id" :to="childList.routerName">
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
.slide-menu-class {
    height: calc(~"100vh - 64px");
}
</style>