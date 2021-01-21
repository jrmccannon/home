<template>
  <div>
    <Header></Header>
    <router-view class="content"></router-view>
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: {
    Header
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
    margin: 0 0;
    overflow: auto;
  }

  .content {
    padding: 0px 400px 0px;
  }
</style>