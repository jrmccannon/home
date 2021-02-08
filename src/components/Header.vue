<template>
  <div id="header" class="flex items-center h-16 bg-indigo-500">
    <button id="toggle" class="flex-none p-5" @click="toggle">
      <svg class="h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
    <nav id="links" v-if="showMenu">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <div class="flex-grow ">
      Jared McCannon's Blog
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Header',
  data() {
    return {
      showMenu: true
    }
  },
  methods: {
    toggle() {
      this.showMenu = !this.showMenu;
    }
  }
});
</script>

<style>
</style>