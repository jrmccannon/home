<template>
  <div>
    <Sidenav></Sidenav>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidenav from './components/Sidenav.vue';

export default {
  name: 'App',
  components: {
    Sidenav
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  body {
    width: 1000px;
    margin: 0 auto;
    overflow: auto;
  }
</style>