<template>
  <div>
    <h1>{{ curso }}</h1>
    <RouterLink :to='{name: "descricao"}'>Descrição</RouterLink>
    <RouterLink :to='{name: "aulas"}'>Aulas</RouterLink>
    
    <transition mode='out-in' name='topDown'>
      <RouterView />
    </transition>
  </div>
</template>

<script>
export default {
  props: ['curso'],
  methods: {
    puxarDados() {
      console.log('Puxei API');
    },
  },
  beforeRouteEnter(to, from, next) {
    console.log(this);
    next((vm) => {
      console.log(vm);
      vm.puxarDados();
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.puxarDados();
    next();
  },
  beforeRouteLeave(to, from, next) {
    const confirmar = confirm('Você deseja sair?');
    if (confirmar) next();
  },
}
</script>

<style>
.topDown-enter,
.topDown-leave-to {
  transform: translate3d(0, -40px, 0) scale(.2);
  opacity: 0;
}

.topDown-enter-active,
.topDown-leave-active {
  transition: all .3s;
}
</style>