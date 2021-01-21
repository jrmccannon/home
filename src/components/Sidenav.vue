<template>
  <div id="sidenav">
    <button id="toggle" @click="toggle">
        <svg class="h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
    <nav id="links" :class="{hidden: !showMenu}">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Sidenav',
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
})
</script>

<style>
  #sidenav {
    position: absolute;
    display: block;
    align-content: center;
  }

  #toggle {
    @apply flex items-center px-3 py-2 border rounded;
  }

  #links {
    height: 100vh;
    background-color: grey;
    overflow-x: hidden;
    z-index: 1;
    margin: -50px 0px -300px -30px;
    padding: 90px 20px 0px;
  }

  #links a {
    display: block;
    padding: 10px;
  }

  .hidden {
    display: none
  }
</style>