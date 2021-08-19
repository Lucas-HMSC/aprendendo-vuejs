export default {
  data() {
      return {
        loading: true,
        api: null,
      }
    },
  methods: {
    async fetchData(url) {
      this.loading = true;
      this.api = null;
      const data = await fetch(`http://localhost:3000${url}`);
      setTimeout(async () => {
        this.api = await data.json();
        this.loading = false;
      }, 1500);
    },
  },
}