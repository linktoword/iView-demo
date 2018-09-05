import Vue from 'vue'
import Vuex from 'vuex'
import grid from './modules/grid'
import commonStore from './common/common'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    grid,
    commonStore
  },
//   strict: debug,
//   plugins: debug ? [createLogger()] : []
})