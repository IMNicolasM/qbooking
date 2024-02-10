export default {
  //Resource User
  userResource: {
    permission: 'ibooking.resources.manage',
    activated: true,
    authenticated: true,
    path: '/booking/resource/user',
    name: 'qbooking.panel.resource.user',
    page: () => import('modules/qbooking/_pages/panel/userResource'),
    layout: () => import('layouts/master.vue'),
    title: 'ibooking.cms.sidebar.panelUserResource',
    icon: 'fa-light fa-calendar-lines-pen',
    subHeader: {
      refresh: true,
    }
  }
}
