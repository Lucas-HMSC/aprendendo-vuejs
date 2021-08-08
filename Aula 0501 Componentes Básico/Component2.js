export default {
  name: 'Component2',
  data() {
    return {
      dolar: 0,
    }
  },
  methods: {
    async fetchDolarValue() {
      const data = await fetch('https://api.exchangeratesapi.io/latest?base=USD');
      const response = await data.json();
      this.dolar = response.rates.BRL;
    }
  },
  created() {
    this.fetchDolarValue();
  },
  template: `
    <div>
      <p>1 Dólar está valendo {{ dolar }} reais.</p>
    </div>
  `,
}