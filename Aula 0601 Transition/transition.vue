<template>
  <div>
    <button @click="ativo = !ativo">Ativar</button>
    <transition 
      appear
      name='fade'
      @enter='enter'
      @leave='leave'
    >
      <h1>Serviços</h1>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ativo: false,
    }
  },
  methods: {
    enter(elemento) {
      console.log(elemento);
    },
    leave() {
      console.log('Elemento sumiu.');
    },
  }
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>