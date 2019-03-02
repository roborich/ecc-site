<template>
  <Layout>
    <Hero>
      Sermons
      <img slot="image" src="../assets/images/sermons.jpg">
    </Hero>
    <div class="ecc-content ecc-content__body">
      <h1 class="ecc-content__h1">{{ $page.series.title }}</h1>
      <div v-for="sermon of $page.sermon.edges" :key="sermon.node.title">
        <g-link class="ecc-content__h1" :to="sermon.node.path">{{sermon.node.title}}</g-link>
        <div>{{ sermon.node.content | exerpt}}</div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Sermons($id: String!, $title: String!) {
   series (id: $id){
     title
   }
   sermon: allSermon(filter: { series: { eq: $title }}) {
        edges {
            node {
                title
                path
                excerpt
                content
            }
        }
    }
}
</page-query>
<script>
import Hero from "../components/Hero";
export default {
  name: "SermonTemplate",
  components: { Hero },
  filters: {
    exerpt: content =>
      content
        .replace(/<[^>]*>/g, "")
        .split(" ")
        .slice(0, 45)
        .join(" ")
        .concat('...')
  }
};
</script>