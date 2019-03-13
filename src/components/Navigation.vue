<template>
  <div :class="baseClass">
    <div v-if="!isDesktop" class="ecc-nav__control" @click="isOpen = true">
      <fa-icon icon="bars" size="lg" color="#999"/>
    </div>
    <div v-if="!isDesktop" class="ecc-nav__overlay" @click="isOpen = false"></div>
    <div class="ecc-nav__panel">
      <div
        :class="{'ecc-nav__category': true, 'ecc-nav__category--with-items': 'items' in category}"
        v-for="category in navigationItems"
        :key="category.text"
      >
        <g-link
          v-if="'link' in category"
          class="ecc-nav__category__title"
          :to="category.link"
          :key="category.text"
        >{{category.text}}</g-link>
        <div v-else class="ecc-nav__category__title">{{category.text}}</div>
        <div class="ecc-nav__group" v-if="'items' in category">
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
  computed: {
    isDesktop() {
      return this.$mq === 'desktop';
    },
    baseClass() {
      return {
        'ecc-nav': true,
        'ecc-nav--open': this.isOpen,
        'ecc-nav--mobile': !this.isDesktop,
        'ecc-nav--desktop': this.isDesktop,
      };
    },
  },
};
</script>
<style lang="scss">
@import '../assets/scss/library';
$header-height: 75px;
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes line-grow {
  from {
    line-height: 0;
  }
}
.ecc-nav--mobile .ecc-nav {
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

  &__category__title {
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
.ecc-nav--open .ecc-nav__overlay {
  display: block;
  opacity: 1;
}
.ecc-nav--open .ecc-nav__panel {
  transform: translateX(0);
  box-shadow: 0 8px 10px -5px rgba(0, 0, 0, 0.2),
    0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);
}

.ecc-nav--desktop .ecc-nav {
  &__panel {
    display: flex;
  }
  &__category {
    padding: 0 16px;
    // background: red;
    line-height: $header-height;
    position: relative;
    &--with-items:hover:after {
      content: '';
      position: absolute;
      top: $header-height - 5px;
      width: 0;
      height: 0;
      margin-left: -10px;
      left: 50%;
      animation: fade-in 0.5s ease;
      border: solid 10px transparent;
      border-bottom-color: white;
    }
    &--with-items:hover:before {
      content: '';
      position: absolute;
      left: 0;
      width: 100%;
      top: $header-height;
      height: 15px;
    }
  }
  &__category__title {
    font-size: 16px;
    text-transform: uppercase;
    color: #5e5e5e;
    letter-spacing: 1px;
    font-weight: 600;
    text-decoration: none;
  }
  $corner-radius: 3px;
  &__group {
    display: none;
    position: absolute;

    left: 50%;
    transform: translateX(-50%);
    top: $header-height + 15px;
    animation: fade-in 0.5s ease;
    border-radius: $corner-radius;
    transition: box-shadow 0.5s ease;
    box-shadow: 0 0 0 0 rgba(black, 0);

    a {
      text-decoration: none;
      color: #5e5e5e;
      letter-spacing: 1px;
      font-size: 18px;
      line-height: 2.5;
      display: block;
      padding: 0 16px;
      white-space: nowrap;
      background-color: white;
      background-image: linear-gradient(white, white);
      transition: background-image 1.2s ease;
      animation: line-grow 0.2s ease;
      overflow: hidden;
      border-bottom: solid 1px #eee;
      &:hover {
        background-image: linear-gradient(white, #f7f7f7);
      }
      &:first-child {
        border-radius: $corner-radius $corner-radius 0 0;
      }
      &:last-child {
        border-radius: 0 0 $corner-radius $corner-radius;
      }
    }
  }
  &__category:hover .ecc-nav__group {
    display: block;
    box-shadow: elevation(4);
  }
}
</style>
