<template>
  <div class="font-sans">
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
  }

  body {
    width: 100%;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>