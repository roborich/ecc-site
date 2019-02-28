<template>
  <Layout>
    <Hero>
      Sermons
      <img slot="image" src="../../assets/images/sermons.jpg"/>
    </Hero>
    <div class="ecc-content ecc-content__body">
      <h1 class="ecc-content__h1">Sermon Series</h1>
      <div v-for="series of $page.allSeries.edges" :key="series.node.title">
        <g-link :to="series.node.path">{{ series.node.title }}</g-link>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Series {
    allSeries {
        edges {
            node {
                title
                path
            }
        }
    }
}
</page-query>
<script>
import Hero from '../../components/Hero.vue';
export default {
    name: 'SeriesIndex',
    components: {Hero},
}
</script>