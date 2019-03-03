<template>
  <!-- todo: change class name -->
  <div class="ecc-content-hero" :style="style">
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
        backgroundImage: this.backgroundImage === undefined 
          ? undefined
          : `url('${this.backgroundImage}')`,
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
  box-sizing: border-box;
  display: flex;

  color: white;
  font-family: $proxima-nova;
  font-weight: 900;
  font-size: 50px;

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
  }
}
</style>