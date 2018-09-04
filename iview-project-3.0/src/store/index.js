import Vue from 'vue'
import Vuex from 'vuex'
import grid from './modules/grid'
// import products from './modules/products'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    grid
  },
//   strict: debug,
//   plugins: debug ? [createLogger()] : []
})