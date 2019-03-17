<template>
  <Layout>
    <Hero :background-image="$page.contentPage.image" parallax="0.1">
      <h1>{{$page.contentPage.title}}</h1>
    </Hero>
    <div class="ecc-content ecc-responsive-container" v-html="$page.contentPage.content"></div>
  </Layout>
</template>
<page-query>
query ContentPage ($path: String!) {
  contentPage (path: $path) {
    title
    content
    image
  }
}
</page-query>
<script>
export default {
  metaInfo: {
    // title: this.$page.contentPage.title,
  },
};
</script>