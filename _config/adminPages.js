export default {
  resources: {
    permission: 'ibooking.resources.manage',
    activated: true,
    authenticated: true,
    path: '/booking/resources/index',
    name: 'qbooking.admin.resources',
    crud: import('@imagina/qbooking/_crud/resources'),
    page: () => import('@imagina/qcrud/_pages/admin/crudPage'),
    layout: () => import('@imagina/qsite/_layouts/master.vue'),
    title: 'ibooking.cms.sidebar.adminResources',
    icon: 'fas fa-chess-knight',
    subHeader: {
      refresh: true,
    }
  }
}
