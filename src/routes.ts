export interface routes {
    [x: string]: any;
    title: string;
    path: string;
    icon?: string;
    breadcrumb?: string | JSX.Element;
    isLink?: boolean;
    routes?: routes[];
}

export interface bread {
    [propname: string]: any;
}

export const RoutesData: routes[] = [
    {
        title: '简报管理',
        path: '/brief-manage',
        routes: [
            {
                title: '总编室初稿',
                path: '/brief-firstDraft',
                isLink: true,
            },
            {
                title: '总编室审批',
                path: '/brief-examine',
                isLink: true
            },
            {
                title: '稿件合并',
                path: '/brief-combine',
                isLink: true
            },
            {
                title: '简报管理',
                path: '/brief-manage',
                isLink: true
            }
        ],
    },
    {
        title: '简报查询',
        path: '/brief-search',
        routes: [
            {
                title: '简报查询',
                path: '/brief-search',
                isLink: true
            }
        ]
    }
];
