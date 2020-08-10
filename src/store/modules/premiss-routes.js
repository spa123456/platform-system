import {
    constRoutes
} from '@/router/index'

const state = {
    routes: [],
}

const mutations = {
    SET_ROUTES: (state, addRoutes) => {
        console.log("本地router:" + constRoutes);
        console.log("数据库存储的:" + addRoutes);
        state.routes = constRoutes.contat(addRoutes)
    }
}

const actions = {
    setRouterDataTree({
        commit
    }, getRouter) {
        commit('SET_ROUTES', getRouter)
    }
}

export default {
    state,
    mutations,
    actions
}