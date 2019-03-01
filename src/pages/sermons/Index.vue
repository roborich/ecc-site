<template>
  <Layout>
    <Hero>
      Sermons
      <img slot="image" src="../../assets/images/sermons.jpg">
    </Hero>
    <div class="ecc-content ecc-content__body">
      <h1 class="ecc-content__h1">Sermon Series</h1>
      <div class="sermon-cards">
        <g-link :to="series.node.path" class="sermon-card" v-for="series of $page.allSeries.edges" :key="series.node.title">
          <div class="sermon-card__inner" :style="`background-image: url('${series.node.image}')`"></div>
        </g-link>
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
                image
            }
        }
    }
}
</page-query>
<script>
import Hero from "../../components/Hero.vue";
export default {
  name: "SeriesIndex",
  components: { Hero }
};
</script>
<style lang="scss" scoped>
.sermon-cards {
  display: flex;
  flex-wrap: wrap;
}
.sermon-card {
  flex: 1 0 300px;
  margin: 8px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.14), 0 3px 4px 0 rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;
  cursor: pointer;
  &:hover {
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14), 0 4px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
  }
  &__inner {
    height: 0;
    padding-top: 56.25%;
    background-size: cover;
    background-position: 50% 50%;
  }
}
</style>