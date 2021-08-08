import Component2 from './Component2.js';

export default {
  name: 'Component3',
  data() {
    return {
      appleMarketCap: 0,
    }
  },
  methods: {
    async fetchQuote() {
      const data = await fetch('https://api.origamid.dev/stock/aapl/quote');
      const response = await data.json();
      this.appleMarketCap = response.marketCap.toFixed(1);
    }
  },
  created() {
    this.fetchQuote();
  },
  components: {
    Component2,
  },
  template: `
    <div>
      <component2></component2>
      <p>Valor de Mercado da Apple: $ {{ appleMarketCap }}</p>
    </div>
  `,
}