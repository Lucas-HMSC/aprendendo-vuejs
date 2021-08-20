export default { 
  namespaced: true,
  state: {
    empresa: 'Apple',
    acao: null,
  },
  mutations: {
    UPDATE_ACAO(state, payload) {
      state.acao = payload;
    },
  },
  actions: {
    async puxarAcao(context) {
      const data = await fetch('https://api.origamid.dev/stock/aapl/quote');
      const response = await data.json();
      
      context.commit('UPDATE_ACAO', response);
    },
  },
}