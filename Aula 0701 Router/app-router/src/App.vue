<template>
  <div id="app">
    <h1 @click='mostrarRouter'>Logo</h1>
    <nav>
      <RouterLink to='/'>Home</RouterLink>
      <RouterLink to='/cursos'>Cursos</RouterLink>
      <RouterLink to='/acoes'>Acoes</RouterLink>
    </nav>
      <RouterView />
      <RouterView 
        name='sidebar'
      />
    <!-- <transition mode='out-in'>
    </transition> -->
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
  color: #234;
  border: 4px solid;
  margin: 20px;
  padding: 20px;
}

nav {
  padding: 20px 0;
  /* margin-top: 2000px; */
}

a {
  padding: 10px;
  color: #234;
}

.router-link-exact-active {
  color: #4b8;
  font-weight: bold;
}

.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}
</style>
