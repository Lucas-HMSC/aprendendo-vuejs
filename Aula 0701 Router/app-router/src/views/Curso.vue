<template>
  <div>
    <h1>{{ curso }}</h1>
    <RouterLink :to='{name: "descricao"}'>Descrição</RouterLink>
    <RouterLink :to='{name: "aulas"}'>Aulas</RouterLink>
    <RouterView />
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

</style>