<template>
  <div>
    <p>Aulas</p>
    <ul>
      <li v-for='aula in aulas' :key='aula.nome'>
        <p>{{ aula.nome }} | {{ aula.duracao }}</p>
        <button @click='COMPLETAR_AULA(aula)'>Completar Aula</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  data() {
    return {
      aulas: [
        {
          nome: "HTML e CSS",
          duracao: 15
        },
        {
          nome: "JavaScript",
          duracao: 30
        },
        {
          nome: "UX Design",
          duracao: 20
        },
      ],
    }
  },
  methods: {
    ...mapMutations(['COMPLETAR_AULA']),
  },
}
</script>

<style>

</style>