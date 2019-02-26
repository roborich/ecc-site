<template>
  <Layout>
    <div class="hero">Sermons Series</div>
    <div v-for="series of $page.allSeries.edges" :key="series.node.title">
      <g-link :to="series.node.path">{{ series.node.title }}</g-link>
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
<style lang="scss" scoped>
@import '../../assets/scss/library';
.hero {
  padding: 16px 32px;
  color: white;
  font-family: $proxima-nova;
  font-weight: 900;
  font-size: 36px;
  min-height: 200px;
  line-height: 200px;
  box-sizing: border-box;
  background-image: url('../../assets/images/sermons.jpg');
  background-size: cover;
}
</style>