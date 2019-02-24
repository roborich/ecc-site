<template>
  <div class="layout">
    <header class="header">
      <g-link to="/">
        <g-image width="317" height="45" src="../assets/images/logo.png"/>
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
  components: { DefaultFooter },
};
</script>
<style lang="scss">
@import '../assets/scss/base.scss';

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
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
footer {
  background: $footer-blue;
  color: $footer-foreground;
}
</style>
