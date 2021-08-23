<template>
  <header>
    <nav>
      <RouterLink to='/' class="logo">
        <img src="@/assets/ranek.svg" alt="Ranek">
      </RouterLink>
      <RouterLink 
        to='/usuario'
        class="btn"
        v-if='$store.state.login'
      >
        {{ nome }}
      </RouterLink>
      <RouterLink 
        to='/login' 
        class="btn"
        v-else
      >
        Vender / Login
      </RouterLink>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  computed: {
    nome() {
      return this.$store.state.usuario.nome.replace(/ .*/, '');
    },
  },
}
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  box-shadow: 0 2px 4px rgba(30, 60, 90, 0.1);
}

.logo {
  padding: 10px 0;
}

.logo img {
  width: 90px;
}
</style>