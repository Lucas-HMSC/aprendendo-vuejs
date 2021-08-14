<template>
  <div id="app">
    <div>
      <button @click="componenteAtivo = 'Sobre'">Sobre</button>
      <button @click="componenteAtivo = 'Servicos'">Serviços</button>
      <button @click="componenteAtivo = 'Contato'">Contato</button>
    </div>
    <keep-alive>
      <component :is="componenteAtivo"></component>
    </keep-alive>
  </div>
</template>

<script>
import Servicos from './components/Servicos.vue';
import Sobre from './components/Sobre.vue';
import Contato from './components/Contato.vue';

export default {
  name: 'App',
  components: {
    Servicos,
    Sobre,
    Contato,
  },
  data() {
    return {
      componenteAtivo: 'Sobre',
    }
  },
}

/*
* Crie 3 componentes:
* 1: Componente falando sobre a empresa
* 2: Componente com os serviços da empresa
* 3: Componente com um formulário de contato
* Crie um menu, que ao clique ele mude os componentes
* acima de forma dinâmica. Não destrua o componente
*/
</script>

<style>

</style>
