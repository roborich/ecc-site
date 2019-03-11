<template>
  <Layout>
    <div class="ecc-content ecc-blog-post ecc-responsive-container">
      <h1>{{$page.post.title}}</h1>
      <div
        class="ecc-blog-post__info"
      >Posted on {{$page.post.date | formatDate}} by {{$page.post.author}}</div>
      <g-image :src="$page.post.image"/>
      <div v-html="$page.post.content"/>
      <Tags :tags="$page.post.tags"/>
      <Share :title="$page.post.title" :snippet="$page.post.summary" :tags="$page.post.tags"/>
    </div>
  </Layout>
</template>
<page-query>
query Post ($path: String!) {
    post (path: $path) {
        title
        image
        date
        content
        author
        category
        tags
        summary
    }
}
</page-query>
<script>
import { formatDate } from '../lib/filters';
import Tags from '../components/Tags';
import Share from '../components/Share';
export default {
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