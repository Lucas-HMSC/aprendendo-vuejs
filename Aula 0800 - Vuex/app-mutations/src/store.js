import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    acao: null,
  },
  mutations: {
    COMPLETAR_AULA(state, payload) {
      state.aulasCompletas.push(payload);
    },
    UPDATE_ACAO(state, payload) {
      state.acao = payload;
    },
  },
  actions: {
    completarAula(context, payload) {
      context.commit('COMPLETAR_AULA', payload);
    },
    async puxarAcao(context) {
      const data = await fetch('https://api.origamid.dev/stock/aapl/quote');
      const response = await data.json();
      
      context.commit('UPDATE_ACAO', response);
    }
  },
})
