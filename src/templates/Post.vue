<template>
  <Layout>
    <div class="ecc-content ecc-content__body">
      <h1>{{$page.post.title}}</h1>
      <!-- <div class="post-info">
        <fa-icon icon="calendar-day"/>
        Posted on {{$page.post.date | formatDate}}
      </div>
      <div class="post-info">
        <fa-icon icon="user"/>
        Posted by {{$page.post.author}}
      </div>
      <div class="post-info">
        <fa-icon icon="archive"/>
        Categories: {{$page.post.category}}
      </div>-->
      <div class="post-info">Posted on {{$page.post.date | formatDate}} by {{$page.post.author}}</div>
      <g-image :src="$page.post.image"/>
      <div v-html="$page.post.content"/>
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
    }
}
</page-query>
<script>
import { formatDate } from '../lib/filters';
export default { filters: { formatDate } };
</script>

<style lang="scss">
@import '../assets/scss/library';
.post-info {
  display: block;
  color: #999;
  font-family: $tisa;
  font-size: 12px;
  text-align: center;
  margin-bottom: 1em;
}
.ecc-content__body {
  
  h1 {
    text-align: center;
  }
  
  img {
    max-width: 100%;
  }
  
  blockquote {
    margin: 0;
    padding: 1em 0 1em 2em;
    border-left: solid 3px $ecc-blue;
  }

  h1,
  h2,
  h3 {
    color: $header-blue;
  }
}
</style>