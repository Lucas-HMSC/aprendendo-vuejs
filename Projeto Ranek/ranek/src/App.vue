<template>
  <div id="app">
    <TheHeader />
    <main id="main">
      <transition mode='out-in'>
        <RouterView />
      </transition>
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { api } from '@/services';

import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
  created() {
    if (window.localStorage.token) {
      api
        .validateToken()
        .then(() => {
          this.$store.dispatch('getUsuario')
        })
        .catch(() => {
          window.localStorage.removeItem('token');
        })
    }
  },
}
</script>

<style>
* {
  box-sizing: border-box;
}

body, ul, li, h1, h2, p {
  padding: 0px;
  margin: 0px;
}

ul {
  list-style: none;
}

body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  color: #345;
  background: url('./assets/pattern.svg') repeat top;
}

a {
  color: #345;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

.btn {
  display: block;
  padding: 10px 30px;
  background: #87f;
  border-radius: 4px;
  color: #FFF;
  text-align: center;
  font-size: 1rem;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
  transition: all .3s;
  border: none;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  cursor: pointer;
}

.btn:hover {
  background: #65D;
  transform: scale(1.1);
}

.btn-disabled,
.btn-disabled:hover {
  background: #bbc;
  transform: scale(1); 
}

#app {
  display: flex;
  min-height: 100vh;
  flex-direction: column;
}

#main {
  flex: 1;
}

label {
  margin-bottom: 5px;
}

input,
textarea {
  border-radius: 4px;
  border: 1px solid #FFF;
  padding: 15px;
  box-shadow: 0 4px 8px rgba(30, 60, 90, 0.1);
  transition: all .3s;
  font-size: 1rem;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  margin-bottom: 15px;
}


input:hover,
input:focus,
textarea:focus,
textarea:hover {
  outline: none;
  box-shadow: 0 6px 12px rgba(30, 60, 90, 0.2);
  border-color: #87f;
}

.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter {
  transform: translate3d(0, -20px, 0);
}

.v-leave-to {
  transform: translate3d(0, 20px, 0);
}

.v-enter-active,
.v-leave-active {
  transition: all .3s;
}
</style>