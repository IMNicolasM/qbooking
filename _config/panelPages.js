export default {
  //Resource User
  userResource: {
    permission: 'ibooking.resources.manage',
    activated: true,
    authenticated: true,
    path: '/booking/resource/user',
    name: 'qbooking.panel.resource.user',
    page: () => import('@imagina/qbooking/_pages/panel/userResource'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'qbooking.sidebar.panelUserResource',
    icon: 'fas fa-chess-knight',
    subHeader: {
      refresh: true,
    }
  }
}