<template>
  <form>
    <input 
      name="busca"
      id="busca"
      type="text"
      v-model='busca'
    >
    <input 
      id="lupa"
      type="submit"
      value="Buscar"
      @click.prevent='buscarProdutos'
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: '',
    }
  },
  methods: {
    buscarProdutos() {
      this.$router.push({
        query: {
          q: this.busca
        }
      });
    },
  },
}
</script>

<style>

</style>