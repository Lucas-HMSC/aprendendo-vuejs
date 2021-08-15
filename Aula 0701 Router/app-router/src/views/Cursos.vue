<template>
  <div>
    <h1>Curso Ativo: {{ curso }}</h1>
    <RouterLink :to='{ name: "curso", params: { curso: "javascript" } }'>JavaScript</RouterLink>
    <RouterLink :to='{ name: "curso", params: { curso: "vuejs" } }'>VueJS</RouterLink>
    <RouterLink :to='{ name: "curso", params: { curso: "html" } }'>HTML</RouterLink>
    
    <RouterView />
  </div>
</template>

<script>
export default {
  props: ['curso'],
}
</script>

<style>

</style>