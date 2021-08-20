import Vue from 'vue';
import Vuex from 'vuex';

import acao from '@/store/acao.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    acao,
  },
  state: {
    aulasCompletas: [],
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
  },
  actions: {
    completarAula(context, payload) {
      context.commit('COMPLETAR_AULA', payload);
    },
  },
})
