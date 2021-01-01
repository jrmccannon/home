<template>
  <div class="home">
    <Posts title="Latest"></Posts>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import Posts from './Posts';

export default defineComponent({
  name: 'Home',
  components: {
    Posts
  }
});
</script>
