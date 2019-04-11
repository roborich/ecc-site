<template>
  <Layout>
    <Hero>
      <h1>Blog</h1>
    </Hero>
    <div class="ecc-container ecc-blog-grid">
      <BlogTile v-for="post in posts" :key="post.title" :post="post"/>
    </div>
  </Layout>
</template>
<page-query>
query Posts {
  allWordPressPost(sortBy: "date") {
    edges {
      node {
        title
        featuredMedia {
          sourceUrl
          altText
        }
        excerpt
        date
        path
        categories {
          title
        }
      }
    }
  }
}
</page-query>
<script>
import BlogTile from '../components/BlogTile';
import { formatDate } from '../lib/filters';
export default {
  computed: {
    posts(){
      return this.$page.allWordPressPost.edges.map(({node}) => node);
    }
  },
  components: { BlogTile },
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

.ecc-blog-grid {
  margin-top: 16px;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr 1fr;
  @media (max-width: $container-width) {
    // todo use breakpoint mixin
    grid-template-columns: 1fr;
  }
}
</style>