export default {
  name: 'Component1',
  data() {
    return {
      time: 0,
    }
  },
  methods: {
    async fetchTime() {
      const data = await fetch('https://www.metaweather.com/api/location/455827/'); 
      const response = await data.json();
      this.time = response.consolidated_weather[0].the_temp.toFixed(1);
    },
  },
  created() {
    this.fetchTime();
  },
  template: `
    <div>
      <p>Temperatura atual em São Paulo: {{ time }}º C</p>
    </div>
  `,
}