<template>
  <section>
    <UsuarioForm>
      <button 
        class="btn"
        @click.prevent='atualizarUsuario'
      > 
        Atualizar Usuário
      </button>
    </UsuarioForm>
    <ErroNotificacao 
      :erros='erros'
    />
  </section>
</template>

<script>
import { api } from '@/services.js';

import UsuarioForm from '@/components/UsuarioForm.vue';

export default {
  name: 'UsuarioEditar',
  components: {
    UsuarioForm,
  },
  data() {
    return {
      erros: [],
    }
  },
  methods: {
    atualizarUsuario() {
      this.erros = [];
      api
        .put(`/usuario`, this.$store.state.usuario)
        .then(() => {
          this.$store.dispatch('getUsuario', this.$store.state.usuario.id);
          this.$router.push({ name: 'Usuario' });
        })
        .catch((error) => {
          this.erros.push(error.response.data.message);
        });
    },
  },
}
</script>

<style>

</style>