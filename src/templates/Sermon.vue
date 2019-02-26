<template>
  <Layout>
    <div class="hero">
      <div>Sermons</div>
    </div>
    <div class="body">
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
import Tags from '../components/Tags';
export default {
  name: "SermonTemplate",
  components: { Share, Tags },
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
.hero {
  background-color: $header-blue;
  background-image: linear-gradient(30deg, rgba(black, 0), rgba(black, 0.8));
  padding: 16px 32px;
  color: white;
  font-family: $proxima-nova;
  font-weight: 900;
  font-size: 36px;
  div {
    padding: 32px 0;
    max-width: 800px;
    margin: auto;
    text-shadow: 0 2px 3px rgba(0, 0, 0, 0.25);
  }
}
.body {
  padding: 32px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8em;
}
</style>