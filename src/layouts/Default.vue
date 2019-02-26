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
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about">About</g-link>
      </nav>
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
import DefaultFooter from "../components/DefaultFooter.vue";
export default {
  components: { DefaultFooter }
};
</script>
<style lang="scss">
@import "../assets/scss/base.scss";

body {
  font-family: Proxima-Nova, "serif";
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1;
  height: 75px;
  padding: 16px;
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 2px 2px 0 rgba(0, 0, 0, 0.14),
     0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &__logo {
    height: 45px;
    width: 317px;
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
