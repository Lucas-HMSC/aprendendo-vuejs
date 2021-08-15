<template>
  <div>
    <h1>{{ curso }}</h1>
    <RouterLink :to='{name: "descricao"}'>Descrição</RouterLink>
    <RouterLink :to='{name: "aulas"}'>Aulas</RouterLink>
    <RouterView />
  </div>
</template>

<script>
export default {
  props: ['curso'],
  computed: { 
    cursoComputed() {
      return this.$route.params.curso;
    },
  },
  created() {
    console.log('Componente Cursos criado.');
  },
  beforeRouteUpdate(to, from, next) {
    // console.log(to, from);
    next();
  },
}
</script>

<style>

</style>