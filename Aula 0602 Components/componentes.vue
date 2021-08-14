<template>
  <div>
    <button @click='estoque++'>Adicionar Estoque</button>
    <button @click='estoque = 0'>Excluir Estoque</button>
    <transition mode='out-in'>
      <p v-if='estoque >= 5' key='estoque'>Itens em estoque {{ estoque }}</p>
      <p v-else-if='estoque >= 1 && estoque < 5' key='acabando'>Itens quase acabando</p>
      <p v-else key='esgotado'>Produto fora de estoque</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      estoque: 0,
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity .3s;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}
</style>