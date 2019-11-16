import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 导出实例！
export default new Vuex.Store({
  state: {
    // 用于存储数据的
    str_data:['1','3','5'],
    obj :{
      a:111,
    }
  },
  getters: {
    // 获取数据
    changeData(state){//可以改变数据,可以接受一个参数state，对应存储数据的state
      const oldData = state.str_data;
      const newData = oldData.map((value,index)=>{
        return 1;
      })
      return newData;
    },
    showData(state){
      console.log("state.str_data",state.str_data);
      return state.str_data.map(value=>{
        return value;
      })
      // return state.str_data[0];
      // return state.obj.a;
    }
  },
  mutations: {
    // 管理（操作）数据
    change(state,payload){
      for(let i in state.str_data){
        state.str_data[i] += 2;
      }
      state.str_data.push(payload);
      // state.obj.a += 10;
    }
  },
  actions: {
    // 操作mutations
    add(content){
      setTimeout(()=>{
        content.commit('change');
      },1000)
    }
  }
})
