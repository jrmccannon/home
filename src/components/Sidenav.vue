<template>
  <div id="sidenav">
    <button @click.prevent="toggle">
      <i>Toggle</i>
    </button>
    <div id="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

defineComponent({
  name: 'Sidenav',
  data() {
    return {
      showMenu: true
    };
  },
  methods: {
    toggle($event) {
      console.log('test')
    }
  }
})
</script>

<style>
  #sidenav {
    position: absolute;
    display: block;
  }

  #toggle {
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
</style>