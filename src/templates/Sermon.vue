<template>
  <Layout>
    <div class="hero">Sermons</div>
    <div class="body">
      <h1>{{$page.sermon.title}}</h1>
      <audio :src="$page.sermon.audio" controls/>
      <div v-html="$page.sermon.content"/>
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
    }
}
</page-query>
<script>
import Share from "../components/Share";
export default {
  name: "SermonTemplate",
  components: { Share }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/library.scss";
h1 {
  color: $ecc-blue;
}
.hero {
  background-color: $header-blue;
  background-image: linear-gradient(30deg, rgba(black, 0), rgba(black, 0.8));
  padding: 16px 32px;
  color: white;
  font-family: $proxima-nova;
  font-weight: 900;
  font-size: 36px;
}
.body {
  padding: 32px;
  max-width: 800px;
  margin: 0 auto;
}
</style>