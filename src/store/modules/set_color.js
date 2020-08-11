const state = {
    menuColor:'',
    navColor:''
}

const mutations = {
    SETMENUCOLOR:(state,colorvalue)=>{
        state.menuColor = colorvalue
    },
    SETNAVCOLOR:(state,colorvalue)=>{
        state.navColor = colorvalue
    }
}

const actions = {
    setmenucolor({commit},color){
        commit('SETMENUCOLOR',color)
    },
    setnavcolor({commit},color){
        commit('SETNAVCOLOR',color)
    }
}

export default {
    state,mutations,actions
}
