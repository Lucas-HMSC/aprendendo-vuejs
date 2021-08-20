<template>
  <div>
    <div v-if='loading'>
      <PageLoading />
    </div>
    <transition>
      <div v-if='api' class="conteudo">
        <div>
          <h1>{{ api.nome }}</h1>
          <p>{{ api.descricao }}</p>
          <h2>Aulas</h2>
          <ul class="aulas">
            <li v-for='aula in api.aulas' :key='aula.id'>
              <RouterLink :to='{name: "aula", params: { aula: aula.id }}'>
                {{ aula.nome }}
              </RouterLink>
            </li>
          </ul>
        </div>
        <RouterView />
      </div>
    </transition>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'Curso',
  props: ['curso'],
  mixins: [fetchData],
  created() {
    this.fetchData(`/curso/${this.curso}`)
  },
}
</script>

<style>
.aulas li a {
  display: block;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  background: white;
  padding: 20px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.aulas li a.router-link-active {
  background: #4B8;
  color: white;
}
</style>