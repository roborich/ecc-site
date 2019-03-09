<template>
  <div>
    <div class="title">Share</div>
    <a v-for="service of services" :key="service.link" :href="service.link" target="_blank">
      <font-awesome-layers :key="service.color" class="social-icon fa-2x">
        <fa-icon icon="circle" :style="{color: service.color}" fixed-width/>
        <fa-icon :icon="service.icon" transform="shrink-6" fixed-width :style="{color: 'white'}"/>
      </font-awesome-layers>
    </a>
  </div>
</template>
<static-query>
query MetaData {
  metaData {
    siteUrl
  }
}
</static-query>
<script>
import camelCase from 'lodash/camelCase';
import { FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
const FACEBOOK_BLUE = '#3B5998';
const TWITTER_BLUE = '#1da1f2';
const PINTEREST_RED = '#bd081c';

export default {
  name: 'Share',
  props: {
    title: {
      typs: String,
    },
    snippet: {
      type: String,
    },
    tags: {
      type: Array,
    },
  },
  computed: {
    currentPage() {
      return `${this.$static.metaData.siteUrl}${this.$route.fullPath}`;
    },
    facebookLink() {
      return [
        'https://www.facebook.com/sharer/sharer.php',
        `?u=${this.currentPage}`,
        this.title !== undefined ? `&t=${encodeURI(this.title)}` : '',
      ].join('');
    },
    twitterLink() {
      return [
        'https://twitter.com/intent/tweet',
        `?url=${this.currentPage}`,
        this.title !== undefined ? `&text=${encodeURI(this.title + '\n')}` : '',
        this.tags !== undefined
          ? `&hashtags=${encodeURI(this.tags.map(camelCase).join(','))}`
          : '',
      ].join('');
    },

    pinterestLink() {
      return [
        'https://pinterest.com/pin/create/button/',
        `?url=${this.currentPage}`,
        this.snippet !== undefined
          ? `&description=${encodeURI(this.snippet)}`
          : '',
      ].join('');
    },
    emailLink() {
      return [
        'mailto:',
        this.title !== undefined ? `?subject=${this.title}` : '',
        `&body=${this.snippet || ''} ${this.currentPage}`,
      ].join('');
    },
    services() {
      return [
        {
          icon: ['fab', 'facebook-f'],
          color: FACEBOOK_BLUE,
          link: this.facebookLink,
        },
        {
          icon: ['fab', 'twitter'],
          color: TWITTER_BLUE,
          link: this.twitterLink,
        },
        {
          icon: ['fab', 'pinterest-p'],
          color: PINTEREST_RED,
          link: this.pinterestLink,
        },
        {
          icon: 'envelope',
          color: '#999',
          link: this.emailLink,
        },
      ];
    },
  },
  components: { FontAwesomeLayers },
};
</script>
<style lang="scss">
@import '../assets/scss/library';

.title {
  color: $header-blue;
  font-size: 24px;
  font-weight: 700;
}
// margin-bottom: 0.25em;

.social-icon {
  padding-right: 0.2em;
  cursor: pointer;
  transition: transform 0.2s ease, opacity 0.2s ease;
  &:hover {
    transform: scale(1.1);
    opacity: 0.8;
  }
}
</style>