<template>
  <div id="app">
    <ModalPrincipal>
      <template v-slot:header="{logo}">
        Esse é o header
        {{ logo }}
      </template>
      <template v-slot:default="{user}">
        {{ user.name }}
        <p>Teste</p>
        <button>Comprar</button>
      </template>
      <template v-slot:footer>
        <p>Esse é o footer</p>
      </template>
    </ModalPrincipal>
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal.vue';

export default {
  name: 'App',
  components: {
    ModalPrincipal,
  },
}
</script>

<style>

</style>
