const sysRouterConfig = [
  {
    path: '/',
    component: resolve => require(['./components/Mainframe.vue'], resolve),
    children: [
      {
        path: '',
        component: resolve => require(['./components/homePage/HomePage.vue'], resolve)
      },
      {
        path: '/messageDetail',
        component: resolve => require(['./components/messageDetailList/MessageDetailList.vue'], resolve)
      }
    ]
  },
  {
    path: '/Hello',
    component: resolve => require(['./components/Hello.vue'], resolve)
  }
]

export default sysRouterConfig
