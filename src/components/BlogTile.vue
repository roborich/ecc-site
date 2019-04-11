<template>
  <div class="blog-tile">
    <g-link class="blog-tile__image">
      <g-image
        :src="post.featuredMedia.sourceUrl"
        :alt="post.featuredMedia.altText"
        quality="10"
        width="4"
      />
    </g-link>
    <div class="blog-tile__body">
      <span class="blog-tile__category">{{post.categories[0].title}}</span>
      <g-link :to="post.path" class="blog-tile__title">{{title}}</g-link>
      <div class="blog-tile__summary" v-html="post.excerpt"/>
      <div class="blog-tile__date">Posted on {{ post.date | formatDate}}</div>
    </div>
  </div>
</template>
<script>
import { formatDate } from '../lib/filters';
import he from 'he';
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  computed: {
    title() {
      return he.decode(this.post.title);
    },
  },
  filters: { formatDate },
};
</script>
<style lang="scss">
@import '../assets/scss/library';
.blog-tile {
  text-align: center;

  &__image {
    display: block;
    position: relative;
    height: 0;
    padding-top: 56.25%;
    overflow: hidden;
    z-index: -1;
    margin-bottom: -20px;
    box-shadow: 0 40px 5px -16px rgba(black, 0.15);
    transition: box-shadow 0.5s ease;

    img {
      transform: scale(1);
      transition: transform 0.5s ease;
      width: 100%;
      position: absolute;
      top: 0;
      left: 0;
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
    box-shadow: 0 0 0 transparent;
    transition: box-shadow 0.5s ease;
  }

  &__summary {
    padding: 16px;
    font-family: $tisa;
    color: $paragraph-color;
  }
  &__date {
    padding: 0 16px 16px;
    font-family: $tisa;
    color: $paragraph-color;
    opacity: 0.8;
    font-size: 14px;
  }
  &__title {
    color: $header-blue;
    text-decoration: none;
    display: block;
    font-weight: 700;
    font-size: 24px;
    padding: 0 16px;
  }

  &:hover &__image {
    // box-shadow: 0 20px 25px -7px rgba(0, 0, 0, 0.1);
    img {
      transform: scale(1.1);
    }
  }
  &:hover &__body {
    box-shadow: 0 1px 2px rgba(black, 0.25);
  }
}
</style>