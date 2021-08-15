<template>
  <div id="app">
    <h1 @click='mostrarRouter'>Logo</h1>
    <nav>
      <RouterLink to='/'>Home</RouterLink>
      <RouterLink to='/cursos'>Cursos</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    mostrarRouter() {
      console.log(this.$route);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
  padding: 10px;
}

.router-link-exact-active {
  color: #84e;
  font-weight: bold;
}
</style>
