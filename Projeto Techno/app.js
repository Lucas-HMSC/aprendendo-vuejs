const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
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
    },
    async fetchProduto(id) {
      const data = await fetch(`./api/produtos/${id}/dados.json`);
      this.produto = await data.json();
    },
    abrirModal(id) {
      this.fetchProduto(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
    fecharModal({ target, currentTarget }) {
      if (target === currentTarget) this.produto = false;
    },
  },
  created() {
    this.fetchProdutos();
  },
});