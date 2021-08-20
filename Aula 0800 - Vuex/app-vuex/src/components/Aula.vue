<template>
  <div>
    <p>Aula {{ totalAulas }}, usuario {{ user }}, {{ aulasCompletas }}</p>
    <button @click='handleClick'>
      Modificar Usuário
    </button>
    <button @click='COMPLETAR_AULA'>
      Completar Aula
    </button>
    <input type="text" v-model='novoUser'/>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data() {
    return {
      totalAulas: 25,
      novoUser: '', 
    }
  },
  computed: {
    ...mapState(['user', 'aulasCompletas']),
  },
  methods: {
    ...mapMutations(['CHANGE_USER', 'COMPLETAR_AULA']),
    handleClick() {
      this.CHANGE_USER({
        user: this.novoUser,
        totalAulas: this.totalAulas,
      });
    },
  },
}
</script>

<style>

</style>