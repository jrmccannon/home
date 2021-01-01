<template>
  <div class="home">
    <PostList title="Latest"></PostList>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import PostList from './PostList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    PostList
  }
});
</script>
