const vm = new Vue({
  el: '#app',
  data: {
    produtos: [],
    produto: false,
    carrinho : [],
    carrinhoAtivo: true,
    mensagemAlerta: "",
    alertaAtivo: false,
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
      this.alerta(`${nome} adicionado ao carrinho.`);
    },
    removerItem(index) {
      this.carrinho.splice(index, 1);
    },
    checarLocalStorage() {
      if (window.localStorage.carrinho) this.carrinho = JSON.parse(window.localStorage.carrinho);
    },
    alerta(mensagem) {
      this.mensagemAlerta = mensagem;
      this.alertaAtivo = true;
      setTimeout(() => {
        this.alertaAtivo = false;
      }, 1500);
    },
    router() {
      const hash = document.location.hash;
      if (hash) this.fetchProduto(hash.replace("#", ""));
    },
  },
  watch: {
    produto() {
      document.title = this.produto.nome || "Techno";
      const hash = this.produto.id || '';
      history.pushState(null, null, `#${hash}`);
    },
    carrinho() {
      window.localStorage.carrinho = JSON.stringify(this.carrinho);
    },
  },
  created() {
    this.fetchProdutos();
    this.router();
    this.checarLocalStorage();
  },
});