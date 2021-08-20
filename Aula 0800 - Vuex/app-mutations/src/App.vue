<template>
  <div id="app">
    <Aluno />
    <Curso />
  </div>
</template>

<script>
import Aluno from '@/components/Aluno.vue';
import Curso from '@/components/Curso.vue';

export default {
  name: 'App',
  components: {
    Aluno,
    Curso
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
