<template>
  <Layout>
    <Hero height="180">Sermon</Hero>
    <div class="body ecc-content">
      <h1>
        {{$page.sermon.title}}
        <span>{{$page.sermon.scripture}}</span>
      </h1>
      <audio :src="$page.sermon.audio" controls/>
      <div v-html="$page.sermon.content"/>
      <Tags :tags="$page.sermon.tags"/>
      <Share/>
    </div>
  </Layout>
</template>
<page-query>
query Sermon ($path: String!) {
    sermon (path: $path) {
        title
        content
        audio
        scripture
        tags
    }
}
</page-query>
<script>
import Share from "../components/Share";
import Tags from "../components/Tags";
import Hero from "../components/Hero";
export default {
  name: "SermonTemplate",
  components: { Share, Tags, Hero }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/library.scss";
h1 {
  color: $ecc-blue;
  span {
    font-style: italic;
    opacity: 0.9;
    &:before {
      content: "(";
    }
    &:after {
      content: ")";
    }
  }
}
.body {
  padding: 32px;
  line-height: 1.8em;
}
</style>