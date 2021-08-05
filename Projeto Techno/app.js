const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
    carrinho : [],
  },
  filters: {
    numeroPreco(valor) {
      return valor.toLocaleString("pt-BR", {
        style: 'currency',
        currency: 'BRL'
      });
    },
  },
  computed: {
    carrinhoTotal() {
      let total = 0;

      if (this.carrinho.length) {
        this.carrinho.forEach((item) => {
          total += item.preco;
        });
      }

      return total;
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
    adicionarItem() {
      this.produto.estoque--;
      const { id, nome, preco } = this.produto;
      this.carrinho.push({ id, nome, preco });
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
  },
  created() {
    this.fetchProdutos();
  },
});