import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'
Vue.use(Vuex);

const moduleFiles = require.context('./modules', true, /\.js$/)

let modulesOBJ = {}

let modules = moduleFiles.keys().forEach(element => {
  const moduleName = element.replace(/^\.\/(.*)\.\w+$/, "$1")
  const value = moduleFiles(element)
  modulesOBJ[moduleName] = value.default
  return modulesOBJ
});

modules = modulesOBJ

export default new Vuex.Store({
  getters,
  modules
});