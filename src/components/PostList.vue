<template>
  <div id="posts-list">
    <h2>{{ title }} Posts</h2>
    <ol>
      <li :key="index" v-for="(post, index) in postsValue.posts">{{ post.title }}</li>
    </ol>
  </div>
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
      post.title = 'Making a personal website: Part 1';
      post.body = 'body body body';

      const post2 = new Post();
      post2.title = 'Vue 3 is a weird world and the composition api is strange';
      post2.body = 'body body body';

      const post3 = new Post();
      post3.title = 'How do I use CSS?!?!?!';
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

<style>
  #posts-list {
    position: relative;
    align-content: center;
    margin-left: -275px;
    width: 700px;
  }
</style>