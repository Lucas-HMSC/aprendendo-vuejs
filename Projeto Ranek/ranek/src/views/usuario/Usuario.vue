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
          <button @click='deslogar'>Deslogar</button>
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
  created() {
    document.title = 'Usuário';
  },
}
</script>

<style scoped>
.usuario {
  display: grid;
  grid-template-columns: minmax(140px, 200px) 1fr;
  max-width: 900px;
  margin: 40px auto;
  grid-gap: 30px;
  padding: 20px;
}

@media screen and (max-width: 500px) {
 .usuario {
    grid-template-columns: 1fr;
    margin: 0 auto;
  } 
}

.sidenav a,
.sidenav button {
  padding: 10px;
  display: block;
  background: #f4f7fc;
  margin-bottom: 10px;
  border-radius: 4px;
}

.sidenav a.router-link-exact-active,
.sidenav a:hover,
.sidenav button:hover {
  background: #87f;
  color: #FFF;
}

.sidenav button {
  border: none;
  width: 100%;
  font-size: 1rem;
  text-align: left;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}
</style>