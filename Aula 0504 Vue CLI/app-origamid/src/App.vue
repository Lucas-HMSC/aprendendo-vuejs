<template>
  <div id="app">
    <HeaderPrincipal />
    <p>{{ mensagem }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mensagem: 'Essa é uma mensagem',
    }
  },
}
</script>

<style>

</style>
