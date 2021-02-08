<template>
  <div class="font-sans">
    <Header></Header>
    <router-view class=""></router-view>
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
  }

  body {
  }

  .content {
  }
</style>