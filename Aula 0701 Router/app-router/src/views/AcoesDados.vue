<template>
  <div>
    <div v-if='loading'>
      <p>Carregando...</p>
    </div>

    <div v-else>
      <p>{{ simbolo }}</p>
      <div>
        {{ acao }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      acao: null,
    }
  },
  props: ['simbolo'],
  methods: {
    async puxarAcao() {
      this.loading = true;
      this.acao = null;
      const data = await fetch(`https://api.origamid.dev/stock/${this.simbolo}/quote`);
      this.acao = await data.json();
      this.loading = false;
    },
  },
  created() {
    this.puxarAcao();
  },
  watch: {
    $route: 'puxarAcao',
  },
  // beforeRouteUpdate(to, from, next) {
  //   this.puxarAcao(to.params.simbolo);
  //   next();
  // },
}
</script>

<style>

</style>