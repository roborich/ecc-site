<template>
  <Layout>
    <Hero>
      Sermons
      <img slot="image" src="../assets/images/sermons.jpg"/>
    </Hero>
    <div class="ecc-content ecc-content__body">
      <h1 class="ecc-content__h1">
        {{ $route.params.title }}
      </h1>
      <div v-for="sermon of $page.allSermon.edges" :key="sermon.node.title">
        <g-link :to="sermon.node.path">{{sermon.node.title}}</g-link>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Sermons {
   allSermon {
        edges {
            node {
                title
                path
                excerpt
            }
        }
    }
}
</page-query>
<script>
import Hero from "../components/Hero";
export default {
  name: "SermonTemplate",
  components: { Hero }
};
</script>