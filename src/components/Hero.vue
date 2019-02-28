<template>
  <!-- todo: change class name -->
  <div class="ecc-content-hero" :style="style">
    <div class="ecc-content-hero__image">
      <slot class="lolol" name="image"/>
    </div>
    <div class="ecc-content-hero__centered">
      <div class="ecc-content">
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
      default: 200
    },
    backgroundImage: {
      type: String
    }
  },
  computed: {
    style() {
      return {
        backgroundImage: this.backgroundImage,
        minHeight: `${this.height}px`
      };
    }
  }
};
</script>
<style lang="scss">
@import "../assets/scss/library";
// todo: change class name
.ecc-content-hero {
  // min-height: 330px;
  box-sizing: border-box;
  display: flex;

  color: white;
  font-family: $proxima-nova;
  font-weight: 900;
  font-size: 36px;

  background-color: $ecc-blue;
  background-color: $header-blue;
  background-image: linear-gradient(30deg, rgba(black, 0), rgba(black, 0.8));
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  position: relative;
  overflow: hidden;
  &__image {
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    right: 0;
  }
  &__centered {
    position: relative;
    z-index: 1;
    flex: 0 0 auto;
  }
}
</style>