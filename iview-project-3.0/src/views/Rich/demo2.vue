<template>
    <sider-menu
    :activeName="activeName"
    :sideMenuList="sideMenuList"
    ></sider-menu>
</template>
<script>
import siderMenu from '../common/siderMenu'
export default {
    components: {
        'sider-menu': siderMenu
    },
    data() {
        return {
            activeName: 1,
            sideMenuList: [
                {
                    id: 1,
                    title: '菜单1',
                    list: [
                        {
                            id: 1,
                            name: 1,
                            iconType: 'ios-paper',
                            text: '节目单1'

                        },
                        {
                            id: 2,
                            name: 2,
                            iconType: 'ios-paper',
                            text: '节目单3'

                        },
                        {
                            id: 3,
                            name: 3,
                            iconType: 'ios-paper',
                            text: '节目单3'

                        }
                    ]
                },
                {
                    id: 2,
                    title: '菜单2',
                    list: [
                        {
                            id: 1,
                            name: 4,
                            iconType: 'ios-paper',
                            text: '节目1'

                        },
                        {
                            id: 2,
                            name: 5,
                            iconType: 'ios-paper',
                            text: '节目3'

                        },
                        {
                            id: 3,
                            name: 6,
                            iconType: 'ios-paper',
                            text: '节目3'

                        }
                    ]
                }
            ]
        }
    },
    methods: {

        created() {

        }
    }
}
</script>

<style lang="less">

</style>