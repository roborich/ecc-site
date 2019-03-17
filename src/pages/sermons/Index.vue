<template>
  <Layout>
    <Hero backgroundImage="/images/sermons.jpg" :parallax="0.15">Sermons</Hero>
    <div class="sermon ecc-responsive-container">
      <div class="sermon__series">
        <h2 class="ecc-heading">Sermon Series</h2>

        <div class="sermon__series__cards">
          <g-link
            :to="series.node.path"
            class="sermon__series__card"
            v-for="series of $page.allSeries.edges"
            :key="series.node.title"
          >
            <div
              class="sermon__series__card__inner"
              :style="`background-image: url('${series.node.image}')`"
            ></div>
          </g-link>
        </div>
      </div>
      <div>
        <h2 class="ecc-heading">Recent Sermons</h2>
        <ul>
          <li v-for="sermon of $page.allSermon.edges" :key="sermon.node.title">
            <g-link :to="sermon.node.path">{{ sermon.node.title}}</g-link>
          </li>
        </ul>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Series {
    allSeries(sortBy: "end") {
        edges {
            node {
                title
                path
                image
            }
        }
    }
    allSermon {
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
  components: { Hero },
};
</script>
<style lang="scss" scoped>
@import '../../assets/scss/library';
.sermon {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 32px;
  margin-bottom: 32px;
  @include for-phone-only() {
    grid-template-columns: 1fr;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      padding: 8px 0;
      border-bottom: solid 1px #eee;
      a {
        font-size: 18px;
        color: $gray;
        font-family: $tisa;
        text-decoration: none;
      }
    }
  }

  &__series {
    &__cards {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 16px;
    }

    &__card {
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.14), 0 3px 4px 0 rgba(0, 0, 0, 0.12),
        0 1px 5px 0 rgba(0, 0, 0, 0.2);
      transition: box-shadow 0.2s ease;
      cursor: pointer;

      &:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.14),
          0 4px 5px 0 rgba(0, 0, 0, 0.12), 0 1px 8px 0 rgba(0, 0, 0, 0.2);
      }

      &__inner {
        height: 0;
        padding-top: 56.25%;
        background-size: cover;
        background-position: 50% 50%;
      }
    }
  }
}
</style>