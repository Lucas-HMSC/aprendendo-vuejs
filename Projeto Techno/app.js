const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
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