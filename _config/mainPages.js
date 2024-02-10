export default {
  categories: {
    permission: 'ibooking.categories.manage',
    activated: true,
    authenticated: true,
    path: '/booking/categories/index',
    name: 'qbooking.main.categories',
    crud: import('modules/qbooking/_crud/categories'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ibooking.cms.sidebar.adminCategories',
    icon: 'fa-light fa-layer-group',
    subHeader: {
      refresh: true,
    }
  },
  services: {
    permission: 'ibooking.services.manage',
    activated: true,
    authenticated: true,
    path: '/booking/services/index',
    name: 'qbooking.main.services',
    crud: import('modules/qbooking/_crud/services'),
    page: () => import('modules/qcrud/_pages/admin/crudPage'),
    layout: () => import('layouts/master.vue'),
    title: 'ibooking.cms.sidebar.adminServices',
    icon: 'fa-light fa-handshake',
    subHeader: {
      refresh: true,
    }
  },
  reservations: {
    permission: 'ibooking.reservations.manage',
    activated: true,
    authenticated: true,
    path: '/booking/reservations/index',
    name: 'qbooking.panel.reservations.index',
    page: () => import('modules/qbooking/_pages/main/reservations'),
    layout: () => import('layouts/master.vue'),
    title: 'ibooking.cms.sidebar.panelReservations',
    icon: 'fa-light fa-check-to-slot',
    subHeader: {
      refresh: true,
    }
  },
  newReservation: {
    permission: 'ibooking.reservations.create',
    activated: true,
    authenticated: true,
    path: '/booking/reservations/create',
    name: 'qbooking.panel.reservations.create',
    page: () => import('modules/qbooking/_pages/main/formReservation'),
    layout: () => import('layouts/master.vue'),
    title: 'ibooking.cms.sidebar.panelNewReservation',
    icon: 'fa-light fa-check-to-slot',
    subHeader: {
      refresh: true,
    }
  },
  newPublicReservation: {
    //permission: 'ibooking.reservations.create',
    activated: true,
    //authenticated: true,
    path: '/booking/reservations/create/public',
    name: 'qbooking.panel.reservations.create.public',
    page: () => import('modules/qbooking/_pages/main/formReservation'),
    layout: () => import('layouts/blankLogo.vue'),
    title: 'ibooking.cms.sidebar.panelNewReservation',
    icon: 'fa-light fa-check-to-slot'
  }
}
