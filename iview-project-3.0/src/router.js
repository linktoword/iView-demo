const routers = [
    {
        path: '/',
        redirect: '/grid'
    },
    {
        path: '/index',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve),
        // children: [
        //     {
        //         name: 'grid',
        //         path: '/grid',
        //         meta: {
        //             title: '测试页'
        //         },
        //         component: (resolve) => require(['./views/Rich/grid.vue'], resolve)
        //     },
        //     {
        //         name: 'demo2',
        //         path: '/demo2',
        //         meta: {
        //             title: '测试页'
        //         },
        //         component: (resolve) => require(['./views/Rich/demo2.vue'], resolve)
        //     }
        // ]
    },
    {
        name: 'grid',
        path: '/grid',
        meta: {
            title: '表格页'
        },
        component: (resolve) => require(['./views/Rich/grid.vue'], resolve)
    },
    {
        name: 'demo2',
        path: '/demo2',
        meta: {
            title: '测试页2'
        },
        component: (resolve) => require(['./views/Rich/demo2.vue'], resolve),
        children: [
            {
                name: 'demo20',
                path: '/demo20',
                meta: {
                    title: 'demo20'
                },
                component: (resolve) => require(['./views/demo2/demo20.vue'], resolve)
            },
            {
                name: 'demo21',
                path: '/demo21',
                meta: {
                    title: 'demo21'
                },
                component: (resolve) => require(['./views/demo2/demo21.vue'], resolve)
            }
        ] 
    },
    {
        name: 'demo3',
        path: '/demo3',
        meta: {
            title: '测试页3'
        },
        component: (resolve) => require(['./views/Rich/demo3.vue'], resolve)
    },
    {
        name: 'demo4',
        path: '/demo4',
        meta: {
            title: '测试页4'
        },
        component: (resolve) => require(['./views/Rich/demo4.vue'], resolve)
    },
   
];
export default routers;