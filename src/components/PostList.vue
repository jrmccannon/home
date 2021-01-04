<template>
  <h2>{{ title }} Posts</h2>
  <ol>
    <li :key="index" v-for="(post, index) in postsValue.posts">{{ post.title }}</li>
  </ol>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Posts from "../models/Posts";
import Post from "../models/Post";

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
    },
  },
  data() {
    return {
      postsValue: []
    };
  },
  mounted() {
    this.postsValue = this.dummyData();
  },
  methods: {
    dummyData: function () {
      const post = new Post();
      post.title = 'fish';
      post.body = 'body body body';

      const post2 = new Post();
      post2.title = 'cats';
      post2.body = 'body body body';

      const post3 = new Post();
      post3.title = 'dog';
      post3.body = 'body body body';

      const data = new Posts();
      data.posts = [];
      data.posts.push(post);
      data.posts.push(post2);
      data.posts.push(post3);

      return data;
    }
  }
});
</script>