<template>
  <div :class="{'ecc-nav': true, 'ecc-nav--open': isOpen}">
    <div class="ecc-nav__control" @click="isOpen = true">
      <fa-icon icon="bars" size="lg" color="#999"/>
    </div>
    <div class="ecc-nav__overlay" @click="isOpen = false"></div>
    <div class="ecc-nav__panel">
      <g-link class="ecc-nav__link" to="/">Home</g-link>
      <g-link class="ecc-nav__link" to="/sermons">Sermons</g-link>
      <g-link class="ecc-nav__link" to="/blog">Blog</g-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>
<style lang="scss">
.ecc-nav {
  &__panel {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    background: white;
    z-index: 2;
    padding: 32px 16px 16px;
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
  &__link {
    // margin-left: 20px;
    text-transform: uppercase;
    text-decoration: none;
    color: #999;
    display: block;
    line-height: 2;
  }
}
</style>
