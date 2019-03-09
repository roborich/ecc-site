<template>
  <div :class="{'ecc-nav': true, 'ecc-nav--open': isOpen}">
    <div class="ecc-nav__control" @click="isOpen = true">
      <fa-icon icon="bars" size="lg" color="#999"/>
    </div>
    <div class="ecc-nav__overlay" @click="isOpen = false"></div>
    <div class="ecc-nav__panel">
      <div v-for="category in navigationItems" :key="category.text">
        <g-link
          v-if="'link' in category"
          class="ecc-nav__link-category"
          :to="category.link"
          :key="category.text"
        >{{category.text}}</g-link>
        <div v-else class="ecc-nav__link-category">{{category.text}}</div>
        <div v-if="'items' in category">
          <g-link
            v-for="item in category.items"
            :key="item.text"
            :to="item.link"
            class="ecc-nav__link"
          >{{item.text}}</g-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
      navigationItems: [
        {
          text: 'About',
          items: [
            {
              text: 'Who We Are',
              link: '/about',
            },
            {
              text: 'Our Leadership',
              link: '/our-leadership',
            },
            {
              text: 'Our History',
              link: '/our-history',
            },
          ],
        },
        {
          text: 'Beliefs',
          items: [
            {
              text: 'The Gospel',
              link: '/the-gospel',
            },
            {
              text: 'Statement of Faith',
              link: '/statement-of-faith',
            },
            {
              text: 'Distinctives',
              link: '/distinctives',
            },
            {
              text: 'Covenant',
              link: '/covenant',
            },
            {
              text: 'Creeds and Confessions',
              link: '/creeds-confessions',
            },
          ],
        },
        {
          text: 'Sundays',
          items: [
            {
              text: 'What to Expect',
              link: '/what-to-expect',
            },
            {
              text: 'Our Liturgy',
              link: '/our-liturgy',
            },
            {
              text: 'Sunday Classes',
              link: '/sunday-classes',
            },
            {
              text: 'Directions',
              link: '/directions',
            },
          ],
        },
        {
          text: 'Connect',
          items: [
            {
              text: 'Events',
              link: '/events',
            },
            {
              text: 'Membership',
              link: '/membership',
            },
            {
              text: 'Community Groups',
              link: '/community-groups',
            },
            {
              text: 'Newsletter',
              link: '/newsletter',
            },
          ],
        },
        {
          text: 'Resources',
          items: [
            {
              text: 'Sermons',
              link: '/sermons',
            },
            {
              text: 'Blog',
              link: '/blog',
            },
            {
              text: 'Recommended Resources',
              link: '/recommended-resources',
            },
            {
              text: 'Sunday Songs',
              link: '/sunday-songs',
            },
          ],
        },
        {
          text: 'Give',
          link: '/give',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
@import '../assets/scss/library';

.ecc-nav {
  &__panel {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: white;
    z-index: 2;
    padding: 32px 0 0;
    box-sizing: border-box;
    transform: translateX(100%);
    transition: transform 0.2s ease-in-out;
  }
  &__overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: rgba(black, 0.1);
    box-shadow: 0 0 0 0 transparent;
    z-index: 1;
    display: none;
    transition: opacity 0.2s ease;
    opacity: 0;
  }
  &--open &__overlay {
    display: block;
    opacity: 1;
  }
  &--open &__panel {
    transform: translateX(0);
    box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
      0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
  }
  &__link-category {
    // margin-left: 20px;
    text-transform: uppercase;
    text-decoration: none;
    color: #999;
    display: block;
    line-height: 2;
    padding: 0 16px;
    font-size: 18px;
  }
  &__link {
    text-decoration: none;
    color: #999;
    display: block;
    line-height: 1.5;
    font-size: 14px;
    padding: 0 32px;
    background-color: rgba($gray, 0);
    transition: background-color 0.2s ease;
    &:hover {
      background-color: rgba($gray, 0.1);
    }
  }
}
</style>
