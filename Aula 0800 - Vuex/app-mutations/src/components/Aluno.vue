<template>
  <p>Aluno {{ aulasCompletas }}</p>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['aulasCompletas']),
  },
}
</script>

<style>

</style>