<template>
  <div id="sidenav">
    <button id="toggle" @click="toggle">
      Toggle
    </button>
    <div id="links" :class="{hidden: !showMenu}">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
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
    align-content: center;
    padding: 0px 10px;
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