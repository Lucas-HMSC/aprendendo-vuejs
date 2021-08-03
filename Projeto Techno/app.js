const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: 'currency',
        currency: 'BRL'
      });
    },
  },
  methods: {
    async fetchProdutos() {
      const data = await fetch('./api/produtos.json');
      this.produtos = await data.json();
    }
  },
  created() {
    this.fetchProdutos();
  },
});