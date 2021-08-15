<template>
  <div>
    <h1>Curso Ativo: {{ curso }}</h1>
    <RouterLink :to='{ name: "curso", params: { curso: "javascript" } }'>JavaScript</RouterLink>
    <RouterLink :to='{ name: "curso", params: { curso: "vuejs" } }'>VueJS</RouterLink>
    <RouterLink :to='{ name: "curso", params: { curso: "html" } }'>HTML</RouterLink>
    
    <transition mode='out-in'> 
      <RouterView :key='curso' />
    </transition>
  </div>
</template>

<script>
export default {
  props: ['curso'],
}
</script>

<style>
.v-enter,
.v-leave-to {
  transform: translate3d(-20px, 0, 0);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}
</style>