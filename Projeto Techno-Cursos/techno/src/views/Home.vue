<template>
  <div>
    <div v-if='loading'>
      <p>Carregando</p>
    </div>
    <div v-if='api'>
      <h1>Home</h1>
      <p>{{ api }}</p>
    </div>
  </div>
</template>

<script>
import fetchData from '@/mixins/fetchData.js';

export default {
  name: 'Home',
  mixins: [fetchData],
  created() {
    this.fetchData('/home');
  },  
}
</script>
