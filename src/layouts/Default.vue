<template>
  <div class="layout">
    <header class="header">
      <g-link to="/">
        <g-image
          width="634"
          height="90"
          quality="100"
          class="header__logo"
          src="../assets/images/logo.png"
        />
      </g-link>
      <nav class="nav"></nav>
      <Navigation/>
    </header>
    <slot/>
    <default-footer/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>
<script>
import DefaultFooter from '../components/DefaultFooter.vue';
import Navigation from '../components/Navigation';
export default {
  components: { DefaultFooter, Navigation },
};
</script>
<style lang="scss">
@import '../assets/scss/base.scss';

body {
  font-family: Proxima-Nova, 'serif';
  margin: 0;
  padding: 0;
  line-height: 1.5;
  margin-top: 75px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  height: 75px;
  padding: 16px;
  box-sizing: border-box;
  position: fixed;
  z-index: 4;
  width: 100%;
  top: 0;
  background: white;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &__logo {
    height: 45px;
    width: 317px;
    @media (max-width: 700px) {
      transform: scale(0.8);
      transform-origin: 0 50%;
    }
  }
}

.nav__link {
  margin-left: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: #999;
}
footer {
  background: $footer-blue;
  color: $footer-foreground;
}
</style>
