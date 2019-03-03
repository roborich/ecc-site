<template>
  <Layout>
    <Hero>Blog</Hero>
    <div class="ecc-content ecc-content__body">
      <div class="blog-tile" v-for="post in $page.allPost.posts" :key="post.node.title">
        <div class="blog-tile__image">
          <img :src="post.node.image">
        </div>
        <div class="blog-tile__body">
          <span class="blog-tile__category">{{post.node.category}}</span>
          <div class="blog-tile__title">{{post.node.title}}</div>
          <div class="blog-tile__summary">{{post.node.summary}}</div>
          <div class="blog-tile__date">Posted on {{ post.node.date | formatDate}}</div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Posts {
  allPost(sortBy: "date") {
    posts: edges {
      node {
        title
        image
        summary
        date
        path
        category
      }
    }
  }
}
</page-query>
<script>
import { formatDate } from "../lib/filters";
export default {
  filters: { formatDate }
};
</script>
<style lang="scss">
@import "../assets/scss/library";
.blog-tile {
  width: 350px;

  text-align: center;

  &__image {
    position: relative;
    height: 230px;
    overflow: hidden;
    z-index: -1;
    margin-bottom: -20px;
    img {
      transform: scale(1);
      transition: transform 0.5s ease;
      width: 100%;
    }
  }

  &__category {
    background: $header-blue;
    font-family: $tisa;
    font-weight: 300;
    margin-bottom: -8px;
    font-size: 14px;
    display: inline-block;
    height: 28px;
    line-height: 28px;
    padding: 0 0.5em;
    color: white;
    position: relative;
    top: -14px;
  }

  &__body {
    background: white;
    margin: 0 16px;
  }

  &__summary {
    padding: 16px;
    font-family: $tisa;
    color: $paragraph-color;
  }
  &__date {
    padding: 0 16px;
    font-family: $tisa;
    color: $paragraph-color;
    opacity: 0.8;
    font-size: 14px;
  }
  &__title {
    color: $header-blue;
    font-weight: 700;
    font-size: 24px;
    padding: 0 16px;
  }

  &:hover &__image img {
    transform: scale(1.1);
  }
  &:hover &__body {
    box-shadow: 0 -5px 4px rgba(black, 0.25);
  }
}
</style>