<template>
  <h2>{{title}} Posts</h2>
  <ol>
    <li :key="index" v-for="(post, index) in posts">{{post.title}}</li>
  </ol>
</template>

public mounted() {
const post = new Post();
post.title = 'fish';
post.body = 'body body body';

this.posts.push(post);
}
}
<script lang="ts">
import {defineComponent} from 'vue';
import Posts from "../models/Posts";

export default defineComponent({
  name: 'PostList',
  props: {
    title: {
      type: String,
      required: true,
      default: 'Recent'
    },
    posts: {
      type: Posts,
      required: false
    }
  }
});
</script>