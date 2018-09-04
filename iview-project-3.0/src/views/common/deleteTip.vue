<template>
 <!-- 删除提示 -->
    <Modal
        v-model="modal1"
        title="提示"
        @on-ok="deleteOk"
        @on-cancel="deleteCancel"
        class-name="vertical-center-modal">
    <h2>{{ deleteTip }}</h2>
    </Modal>
</template>

<script>
export default {
    data () {
        return {
            modal1: false, // 提示框显示与隐藏控制
            deleteTip: "确定删除吗？",
        }
    },
    methods: {
        // 删除提示框选择确定后执行的方法
        deleteOk () {
            this.$Message.info('Clicked ok');
            this.remove(this.removeOneIndex);
            this.dataCount = this.allGridData.length;
        },

        // 删除提示框选择取消后执行的方法
        deleteCancel () {
            this.$Message.info('Clicked cancel');
        },

    }
}
</script>

<style scoped>
.vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
}

.vertical-center-modal .ivu-modal {
    top: 0;
}
</style>