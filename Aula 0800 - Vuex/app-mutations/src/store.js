import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    aulasCompletas: [],
    acao: null,
    livros: [
      {
        nome: "O Senhor dos Anéis",
        lido: true,
      },
      {
        nome: "Harry Potter",
        lido: true,
      },
      {
        nome: "As Crônicas de Gelo e Fogo",
        lido: false,
      }
    ]
  },
  getters: {
    livrosLidos: (state) => (lido) => state.livros.filter(livro => livro.lido === lido),
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
