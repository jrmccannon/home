<template>
  <div id="header">
    <Sidenav></Sidenav>
    Jared McCannon's Blog
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Sidenav from './Sidenav.vue';

export default defineComponent({
  components: {
    Sidenav
  },
  name: 'Header'
});
</script>

<style>
#header {
  padding: 30px;
  text-align: center;
  color: white;
  background-color: lightseagreen;
  font-size: medium;
  width: 100%;
}
</style>