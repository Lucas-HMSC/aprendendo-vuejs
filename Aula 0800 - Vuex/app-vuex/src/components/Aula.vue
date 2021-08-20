<template>
  <div>
    <p>Aula {{ totalAulas }}, usuario {{ nomeMaiusculo }}, {{ aulasCompletas }}</p>
    <button @click='mostrarConsole'>
      Mostrar no Console
    </button>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      totalAulas: 25,
      nome: 'Lucas',
    }
  },
  computed: {
    ...mapState(['user', 'aulasCompletas']),
    nomeMaiusculo() {
      return this.nome.ToUpperCase();
    },
  },
  methods: {
    mostrarConsole() {
      console.log(this.user);
    },
  },
}
</script>

<style>

</style>