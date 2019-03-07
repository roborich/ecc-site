<template>
  <Layout>
    <Hero backgroundImage="/images/sermons.jpg">Sermons</Hero>

    <div class="ecc-content ecc-content__body">
      <h1 class="ecc-content__h1">{{ $page.series.title }}</h1>
      <div v-for="sermon of $page.sermon.edges" :key="sermon.node.title" class="sermon">
        <g-link class="sermon-title" :to="sermon.node.path">
          {{sermon.node.title}}
          <span>{{sermon.node.scripture}}</span>
          <button v-if="false">
            <fa-icon icon="headphones"/>Listen
          </button>
        </g-link>
        <div class="sermon-details">
          <span>Delivered on</span>
          <span>{{ sermon.node.date | formatDate }}</span>
          <span>by Pastor</span>
          <span>{{ sermon.node.speaker }}</span>
        </div>
        <p>{{ sermon.node.content | exerpt}}</p>
        <button @click="$router.push(sermon.node.path)">Continue Reading
          <fa-icon icon="long-arrow-alt-right"/>
        </button>
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
                speaker
                scripture
                excerpt
                content
                date
            }
        }
    }
}
</page-query>
<script>
import Hero from '../components/Hero';
import { formatDate } from '../lib/filters';
export default {
  name: 'SermonTemplate',
  components: { Hero },
  filters: {
    formatDate,
    exerpt: content =>
      content
        .replace(/<[^>]*>/g, '')
        .split(' ')
        .slice(0, 45)
        .join(' ')
        .concat('...'),
  },
};
</script>
<style lang="scss">
@import '../assets/scss/library';
.sermon {
  margin-bottom: 64px;
}
.sermon-title {
  text-decoration: none;
  color: $ecc-blue;
  font-family: $proxima-nova;
  font-weight: 700;
  font-size: 20px;
  &:hover {
    text-decoration: underline;
  }
  span {
    font-style: italic;
    opacity: 0.9;
    &:before {
      content: '(';
    }
    &:after {
      content: ')';
    }
  }
}
.sermon-details {
  font-size: 14px;
  color: $gray;
}
// todo put this in the library
button {
  font-size: 12px;
  line-height: 12px;
  border: none;
  padding: 0.75em 1em;
  // margin: 0 0.75em;
  color: white;
  background: $gray;
  border-radius: 3px;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;
}
// todo put this in the library
input[type='text'] {
  border: none;
  padding: 0.75em 1em;
  font-size: 12px;
  line-height: 12px;
  border-radius: 0;
  outline: none;
  border-bottom: solid 3px $ecc-blue;
}
</style>
