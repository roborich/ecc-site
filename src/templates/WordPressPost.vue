<template>
  <Layout>
    <div class="ecc-content ecc-blog-post ecc-container">
      <h1>{{$page.post.title}}</h1>
      <div
        class="ecc-blog-post__info"
      >Posted on {{$page.post.date | formatDate}} by {{$page.post.author.name}}</div>
      <g-image :src="$page.post.featuredMedia.sourceUrl" :alt="$page.post.featuredMedia.altText"/>
      <div v-html="$page.post.content"/>
      <Tags :tags="tags"/>
      <Share :title="$page.post.title" :snippet="$page.post.excerpt" :tags="$page.post.tags"/>
    </div>
  </Layout>
</template>
<page-query>
query Post ($path: String!) {
    post: wordPressPost (path: $path) {
        title
        content
        excerpt
        date
        featuredMedia {
          sourceUrl
          altText
        }
        author {
          name
          description
        }
        tags {
          title
          path
        }
    }
}
</page-query>
<script>
import { formatDate } from '../lib/filters';
import Tags from '../components/Tags';
import Share from '../components/Share';
export default {
  computed: {
    tags(){
      return this.$page.post.tags.map(tag => tag.name);
    }
  },
  filters: { formatDate },
  components: { Tags, Share },
  
};
</script>

<style lang="scss">
@import '../assets/scss/library';
.ecc-blog-post {
  padding-top: 0;
  &__info {
    display: block;
    color: #999;
    font-family: $tisa;
    font-size: 12px;
    text-align: center;
    margin-bottom: 1em;
  }
}
</style>