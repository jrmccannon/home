<template>
  <div id="sidenav">
    <button class="toggle">Sidebar</button>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

defineComponent({
  name: 'Sidenav',

})
</script>

<style>
  #sidenav {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: grey;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
  }

  #sidenav a {
    display: block;
    text-decoration: none;
    font-size: 20px;
    color: black;
    padding: 8px 8px 8px 32px;
  }

  #sidenav a:hover {
    color: lightseagreen;
  }

  #sidenav .toggle {
    position: absolute;
    top: 0;
    right: 25px;
    font-size: small;
  }

</style>