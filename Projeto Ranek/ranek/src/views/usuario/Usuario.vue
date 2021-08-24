<template>
  <section class="usuario">
    <nav class="sidenav">
      <ul>
        <li>
          <RouterLink :to='{ name: "Usuario" }'>Produtos</RouterLink>
        </li>
        <li>
          <RouterLink :to='{ name: "Compras" }'>Compras</RouterLink>
        </li>
        <li>
          <RouterLink :to='{ name: "Vendas" }'>Vendas</RouterLink>
        </li>
        <li>
          <RouterLink :to='{ name: "Usuario-Editar" }'>Editar Usuário</RouterLink>
        </li>
        <li>
          <button @click.prevent='deslogar'>Deslogar</button>
        </li>
      </ul>
    </nav>
    <transition mode='out-in'>
      <RouterView />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'Usuario',
  methods: {
    deslogar() {
      this.$store.dispatch('deslogarUsuario');
      this.$router.push('/login');
    },
  },
}
</script>

<style>

</style>