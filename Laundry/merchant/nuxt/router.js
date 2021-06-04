import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d5d1b0fc = () => interopDefault(import('../pages/appcenter.vue' /* webpackChunkName: "pages/appcenter" */))
const _d2a5c7c4 = () => interopDefault(import('../pages/bookings.vue' /* webpackChunkName: "pages/bookings" */))
const _03cc5496 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _5e0d1149 = () => interopDefault(import('../pages/orders.vue' /* webpackChunkName: "pages/orders" */))
const _5f2bd4a8 = () => interopDefault(import('../pages/staff.vue' /* webpackChunkName: "pages/staff" */))
const _67eaa396 = () => interopDefault(import('../pages/stores.vue' /* webpackChunkName: "pages/stores" */))
const _c5c6a27c = () => interopDefault(import('../pages/subscriptions.vue' /* webpackChunkName: "pages/subscriptions" */))
const _7c7e0d7a = () => interopDefault(import('../pages/voucher.vue' /* webpackChunkName: "pages/voucher" */))
const _9a3cac1e = () => interopDefault(import('../pages/menu/_id/index.vue' /* webpackChunkName: "pages/menu/_id/index" */))
const _b573c1e4 = () => interopDefault(import('../pages/apps/_type/_id/index.vue' /* webpackChunkName: "pages/apps/_type/_id/index" */))
const _3a56415a = () => interopDefault(import('../pages/apps/_type/_id/menu.vue' /* webpackChunkName: "pages/apps/_type/_id/menu" */))
const _07b6b2d9 = () => interopDefault(import('../pages/apps/_type/_id/orders.vue' /* webpackChunkName: "pages/apps/_type/_id/orders" */))
const _64a6f090 = () => interopDefault(import('../pages/apps/_type/_id/pos.vue' /* webpackChunkName: "pages/apps/_type/_id/pos" */))
const _32486339 = () => interopDefault(import('../pages/apps/_type/_id/setup.vue' /* webpackChunkName: "pages/apps/_type/_id/setup" */))
const _3472329e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/appcenter",
    component: _d5d1b0fc,
    name: "appcenter"
  }, {
    path: "/bookings",
    component: _d2a5c7c4,
    name: "bookings"
  }, {
    path: "/login",
    component: _03cc5496,
    name: "login"
  }, {
    path: "/orders",
    component: _5e0d1149,
    name: "orders"
  }, {
    path: "/staff",
    component: _5f2bd4a8,
    name: "staff"
  }, {
    path: "/stores",
    component: _67eaa396,
    name: "stores"
  }, {
    path: "/subscriptions",
    component: _c5c6a27c,
    name: "subscriptions"
  }, {
    path: "/voucher",
    component: _7c7e0d7a,
    name: "voucher"
  }, {
    path: "/menu/:id",
    component: _9a3cac1e,
    name: "menu-id"
  }, {
    path: "/apps/:type?/:id",
    component: _b573c1e4,
    name: "apps-type-id"
  }, {
    path: "/apps/:type?/:id?/menu",
    component: _3a56415a,
    name: "apps-type-id-menu"
  }, {
    path: "/apps/:type?/:id?/orders",
    component: _07b6b2d9,
    name: "apps-type-id-orders"
  }, {
    path: "/apps/:type?/:id?/pos",
    component: _64a6f090,
    name: "apps-type-id-pos"
  }, {
    path: "/apps/:type?/:id?/setup",
    component: _32486339,
    name: "apps-type-id-setup"
  }, {
    path: "/",
    component: _3472329e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
