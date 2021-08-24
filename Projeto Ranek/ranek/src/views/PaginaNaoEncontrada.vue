<template>
  <div>
    <h1>Página não encontrada.</h1>
    <RouterLink to='/' class="home">
      Voltar para Home
    </RouterLink>
  </div>
</template>

<script>
export default {
  name: 'PaginaNaoEncontrada',
}
</script>

<style scoped>
h1 {
  margin: 20px auto;
  text-align: center;
}

.home {
  display: block;
  text-align: center;
}
</style>