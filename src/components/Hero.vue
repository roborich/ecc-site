<template>
  <!-- todo: change class name -->
  <div class="ecc-hero" :style="style">
    <div class="ecc-hero__centered">
      <div class="ecc-responsive-container">
        <slot/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 200,
    },
    backgroundImage: {
      type: String,
    },
    parallax: {
      type: Number,
    },
  },
  data() {
    return {
      offsetY: 0,
    };
  },
  computed: {
    style() {
      const css = {
        '--offsetY': `${this.offsetY}px`,
        backgroundImage:
          this.backgroundImage === undefined
            ? undefined
            : `url('${this.backgroundImage}')`,
        minHeight: `${this.height}px`,
      };
      if (this.parallax !== undefined && this.$mq === 'desktop') {
        // todo only implement on large screens
        css.backgroundPosition = `50% calc(50% + calc(calc(var(--scrollY) - var(--offsetY)) * ${
          this.parallax
        }))`;
      }
      return css;
    },
  },
  mounted() {
    console.log('ok?');
    this.offsetY = this.$el.offsetTop || 0;
  },
};
</script>
<style lang="scss">
@import '../assets/scss/library';

.ecc-hero {
  box-sizing: border-box;
  display: flex;

  color: white;
  font-family: $proxima-nova;
  font-weight: 900;
  font-size: 50px;

  h1 {
    font-size: 50px;
  }
  background-color: $ecc-blue;
  background-color: $header-blue;
  background-image: linear-gradient(30deg, rgba(black, 0), rgba(black, 0.8));
  background-size: cover;

  background-position: 50% 50%;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  position: relative;
  overflow: hidden;

  &__centered {
    position: relative;
    z-index: 1;
    flex: 0 0 auto;
    padding: $container-gutter 0;
  }
}
</style>