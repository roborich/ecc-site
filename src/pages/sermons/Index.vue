<template>
  <Layout>
    <Hero>Sermons Series</Hero>
    <div class="ecc-content">
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