export default {
  path: '/daybook',
  component: () => import(/* webpackChunkName: "daybook" */ '@/modules/daybook/layouts/daybook-layout.vue'),
  children: [
    {
      name: 'no-entry',
      path: '',
      component: () => import(/* webpackChunkName: "daybook-no-entry" */ '@/modules/daybook/views/no-entry-selected.vue'),
    },
    {
      name: 'entry',
      path: ':id',
      component: () => import(/* webpackChunkName: "daybook-entry" */ '@/modules/daybook/views/entry-view.vue'),
    }
  ]
}
