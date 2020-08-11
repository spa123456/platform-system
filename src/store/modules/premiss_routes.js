import routerArr from '@/router/index'
let constRoutes = []
routerArr.options.routes.map(item=>{
    if (item.path!='/'&&item.path!='/login'&&item.path!='/dashboard') {
        constRoutes.push(item)    
    }
})

const state = {
    routes: [],
}

const mutations = {
    SET_ROUTES: (state, addRoutes) => {
        // 改造传入的router
        addRoutes.map(routerItem => {
            constRoutes.map(itemObj => {
                if (itemObj.name == routerItem) {
                    itemObj.meta.rule = true
                } else {
                    setMenu(itemObj, routerItem)
                }
            })
        })
        state.routes = constRoutes
    }
}

function setMenu(obj, routerValue) {
    if (obj.children) {
        obj.children.map(item => {
            if (item.name == routerValue) {
                item.meta.rule = true
                return
            } else {
                setMenu(item, routerValue)
            }
        })
    } else {
        return
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