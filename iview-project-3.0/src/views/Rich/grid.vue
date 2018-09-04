<template>
    <div>
        <!-- 表格 -->
        <Table border ref="selection" 
        :columns="columns" 
        :data="showGridData"
        @on-selection-change="changeSelected"
        @on-row-click="clickOneRow"
        :row-class-name="rowClassName"
        height="521">
        </Table>

        <!-- 分页 -->
        <Page :total="dataCount" 
                show-total
                show-sizer
                :page-size="pageSize"
                @on-change="pageNumChange"
                @on-page-size-change="showNumChange"
                class-name="pageClass"
                 />

        <!-- 删除提示 -->
        <Modal
        v-model="modal1"
        title="提示"
        @on-ok="deleteOk"
        @on-cancel="deleteCancel"
        class-name="vertical-center-modal">
        <h2>{{ deleteTip }}</h2>
    </Modal>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                showGridData: [], // 展示的数据
                allGridData: [], // 所有数据

                selectionAll:[],
                modal1: false, // 提示框显示与隐藏控制
                deleteTip: "确定删除吗？",
                removeOneIndex: null,

                dataCount: 200, // 分页显示的总条数
                pageSize: 10, // 每页显示多少条
                pageNum: 1, // 在第n页
                columns: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        title: 'Name',
                        key: 'name',
                        sortable: true
                    },
                    {
                        title: 'Age',
                        key: 'age',
                        sortable: true,
                    },
                    {
                        title: 'Address',
                        key: 'address'
                    },
                    {
                        title: 'Action',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.show(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: (e) => {
                                            e.stopPropagation();
                                            this.modal1 = true;
                                            this.removeOneIndex = params.index;
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ]
            }
        },
        methods: {
            changeSelected(selection){
                // 每次改变选择的时候选择的数据
                console.log(selection);
                // this.selectionAll = selection;
            },

            clickOneRow(row, index){
                // 实现单击整行选中每行的选择框
                this.$refs.selection.toggleSelect(index);

            },

            rowClassName (row, index) {
                // 如果被选中则增加选中样式
                if(row._isChecked == true) {
                    return 'demo-table-info-row';
                }
            },

            show (index) {
                this.$Modal.info({
                    title: 'User Info',
                    content: `Name：${this.showGridData[index].name}<br>Age：${this.showGridData[index].age}<br>Address：${this.showGridData[index].address}`
                })
            },

            // 移除数据方法
            remove (index) {
                // this.showGridData.splice(index, 1);
                this.allGridData.splice(this.pageSize * (this.pageNum - 1) + index,1);
                this.pageNumChange(this.pageNum);
            },

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

            // 页码改变后的回调方法
            pageNumChange (pageNum) {
                this.pageNum = pageNum;
                let _start = ( pageNum - 1 ) * this.pageSize;
                let _end = pageNum * this.pageSize;
                this.showGridData = this.allGridData.slice(_start,_end);
            },

            // 每页显示总条数改变回调
            showNumChange (showNum) {
                // console.log(showNum);
                this.pageSize = showNum;
                if(this.allGridData.length < this.pageSize){
                    this.showGridData = this.allGridData;
                }else{
                    this.showGridData = this.allGridData.slice(0,this.pageSize);
                }
            },

             // 获取历史记录信息
            getGridListData () {
                // 保存取到的所有数据
                this.allGridData = this.$store.state.grid.gridDatas;
                this.dataCount = this.allGridData.length;
                // 初始化显示，小于每页显示条数，全显，大于每页显示条数，取前每页条数显示
                if(this.allGridData.length < this.pageSize){
                    this.showGridData = this.allGridData;
                }else{
                    this.showGridData = this.allGridData.slice(0,this.pageSize);
                }
            }
        },

        created () {
             this.getGridListData(); // 获取列表数据
             this.pageNum = 1;
        }
    }

     
</script>

<style>
.ivu-table .demo-table-info-row td {
        background-color: #2db6f5;
        color: #fff;
    }
.vertical-center-modal {
    display: flex;
    align-items: center;
    justify-content: center;
}
.vertical-center-modal .ivu-modal {
    top: 0;
}
.pageClass {
    display: flex;
    justify-content: flex-end;
    margin: 10px 10px 0 0; 
}
</style>