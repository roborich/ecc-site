<template>
  <Layout>
    <div class="ecc-error-404">
      <h1>404 - Page not found</h1>
      <p>This is not the web page you're looking for.</p>
    </div>
  </Layout>
</template>
<style lang="scss">
@import '../assets/scss/library';

.ecc-error-404 {
  padding: 100px 0;
  text-align: center;
  h1 {
    color: $header-blue;
    font-family: $proxima-nova;
    font-weight: 300;
    font-size: 44px;
  }
  p {
    font-size: 16px;
  }
}
</style>