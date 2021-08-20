<template>
  <div id="app">
    <TheHeader />
    <RouterView class='container' />
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
}
</script>

<style>
body {
  margin: 0px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #234;
}

ul {
  list-style: none;
  padding: 0px;
  margin: 0px;
}

a {
  font-weight: bold;
  text-decoration: none;
  color: #234;
}

a.router-link-active {
  color: #4b8;
}

img {
  max-width: 100%;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.v-enter {
  opacity: 0;
  transform: translate3d(-29px, 0, 0);
}

.v-enter-active {
  transition: all .3s;
}

.conteudo {
  display: grid;
  grid-template-columns: 1fr minmax(200px, 400px);
  grid-gap: 30px;
}

@media screen and (max-width: 400px) {
  .conteudo {
    display: block;
  }
}
</style>