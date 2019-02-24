<template>
  <footer class="ecc-footer">
    <div class="ecc-footer__info">
      <div class="ecc-footer__column">
        <div class="ecc-footer__title">Church Info</div>
        <div class="ecc-footer__subtitle">Sundays</div>
        <div>9:30am Classes</div>
        <div>10:30am Worship</div>
        <div class="ecc-footer__subtitle">Office Hours</div>
        <div>Monday-Friday</div>
        <div>8:30am-3:30pm</div>
        <div class="ecc-footer__subtitle">Location</div>
        <div>235 E Miller St</div>
        <div>Elmira, NY 14904</div>
        <div>(607) 734-7516 ext.224</div>
      </div>
      <div class="ecc-footer__column">
        <div class="ecc-footer__title">About ECC</div>

        <g-link to="/about">The Gospel</g-link>
        <g-link to="/about">Statement of Faith</g-link>
        <g-link to="/about">Distinctives</g-link>
        <g-link to="/about">Our Leadership</g-link>
        <g-link to="/about">What to Expect</g-link>
      </div>
      <div class="ecc-footer__column">
        <div class="ecc-footer__title">Connect</div>
        <g-link to="/about">Newsletter</g-link>
        <g-link to="/about">Sunday Classes</g-link>
        <g-link to="/about">Community Groups</g-link>
        <g-link to="/about">Membership</g-link>
        <g-link to="/about">Directions</g-link>
      </div>
      <div class="ecc-footer__column">
        <div class="ecc-footer__title">ECC Newsletter</div>
        <p>
          Stay up to date with what
          God is doing in and through
          our church!
        </p>
        <input type="text" placeholder="email address">
        <button>Subscribe</button>
      </div>
    </div>
    <div class="ecc-footer__bottom">
      <div
        class="ecc-footer__bottom__copyright"
      >&copy; {{ year }} Elmira Christian Center. All Rights Reserved</div>
      <div class="ecc-footer__bottom__social">
        <a href="https://www.facebook.com/elmirachristiancenter" target="_blank">
          <font-awesome-layers class="fa-2x">
            <fa-icon icon="circle" fixed-width/>
            <fa-icon
              :icon="['fab','facebook-f']"
              transform="shrink-6"
              fixed-width
              :style="{color: 'white'}"
            />
          </font-awesome-layers>
        </a>
        <a href="https://instagram.com/elmirachristiancenter" target="_blank">
          <font-awesome-layers class="fa-2x">
            <fa-icon icon="circle" fixed-width/>
            <fa-icon
              :icon="['fab', 'instagram']"
              transform="shrink-6"
              fixed-width
              :style="{color: 'white'}"
            />
          </font-awesome-layers>
        </a>
      </div>
    </div>
  </footer>
</template>
<script>
import { FontAwesomeLayers } from "@fortawesome/vue-fontawesome";
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  },
  components: {
    FontAwesomeLayers
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/library.scss";
.ecc-footer {
  font-size: 14px;
  &__info {
    background: $footer-blue;
    color: $footer-foreground;
    padding: 40px 40px 50px 40px;
    display: flex;
    flex-wrap: wrap;
  }
  &__title {
    color: $footer-title-foreground;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 16px;
    margin-bottom: 1em;
    text-transform: uppercase;
  }
  &__subtitle {
    font-size: 16px;
    font-weight: 700;
    margin: 0.25em 0;
    &:after {
      content: ":";
    }
  }
  &__column {
    flex: 1 0 160px;
    padding: 16px;

    a {
      font-family: $tisa;
      color: $footer-foreground;
      text-decoration: none;
      display: block;
      border-bottom: solid 1px;
      padding: 10px 0;
    }
  }
  &__bottom {
    background: $footer-bottom-color;
    color: $footer-bottom-foreground;
    padding: 1em 1em 0 1em;
    font-size: 16px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &__copyright {
      flex: 1 0 auto;
      line-height: 35px;
      margin-bottom: 1em;
    }
    &__social {
      flex: 0 1 80px;
      margin-bottom: 1em;
      a {
        color: $ecc-blue;
        margin: 0.25em;
      }
    }
  }
}
</style>