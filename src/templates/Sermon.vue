<template>
  <Layout>
    <Hero>
      Sermons
      <img slot="image" src="../assets/images/sermons.jpg">
    </Hero>
    <div class="ecc-content ecc-content__body">
      <h1 class="ecc-content__h1">
        {{$page.sermon.title}}
        <span>{{$page.sermon.scripture}}</span>
      </h1>
      <p class="sermon-info">
        <fa-icon icon="calendar-day"></fa-icon>
        {{ $page.sermon.date | formatDate}} | Pastor {{$page.sermon.speaker}}
      </p>
      <audio :src="$page.sermon.audio" controls/>
      <div v-html="$page.sermon.content"/>
      <Tags :tags="$page.sermon.tags"/>
      <Share/>
    </div>
  </Layout>
</template>
<page-query>
query Sermon ($path: String!) {
    sermon (path: $path) {
        title
        content
        date
        audio
        scripture
        tags
        speaker
    }
}
</page-query>
<script>
import Share from "../components/Share";
import Tags from "../components/Tags";
import Hero from "../components/Hero";
import { formatDate } from "../lib/filters";
export default {
  name: "SermonTemplate",
  components: { Share, Tags, Hero },
  filters: { formatDate }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/library.scss";
h1 {
  span {
    font-style: italic;
    opacity: 0.9;
    &:before {
      content: "(";
    }
    &:after {
      content: ")";
    }
  }
}

audio {
  width: 100%;
}

.sermon-info {
  color: $gray;
  font-size: 12px;
}
</style>