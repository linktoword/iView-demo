<template>
    <div>
        <Layout class="layout">
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">LED-DEMO</div>
                    <div class="layout-nav">
                        <MenuItem name="1" to="grid">
                            <Icon type="ios-navigate"></Icon>
                            Grid
                        </MenuItem>
                            <MenuItem name="2" to="demo2">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </MenuItem>
                        <MenuItem name="3" to="demo3">
                            <Icon type="ios-analytics"></Icon>
                            Item 3
                        </MenuItem>
                        <MenuItem name="4" to="demo4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem>
                    </div>
                </Menu>
            </Header>
        </Layout>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                
            }
        }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    color: #fff;
    text-align: center;
    line-height: 30px;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
</style>