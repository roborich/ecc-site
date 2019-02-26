<template>
  <Layout>
    <div class="ecc-hero">
      <h1>
        <div>Making Disciples.</div>
        <div>Changing our Community.</div>
      </h1>
      <g-link to="/about">New Here?</g-link>
      <g-link to="/about">The Gospel</g-link>
      <g-link to="/about">What We Believe</g-link>
    </div>
    <div>
      <h2>Welcome to Elmira Christian Center</h2>
      <p>We are a gospel-centered church committed to worshiping the triune God, making disciples, and changing our community with the good news of Jesus Christ.</p>
    </div>
    <div>
      <div>What to Expect</div>
      <div>Sermons</div>
      <div>Community Groups</div>
    </div>
    <div class="ecc-acts-section">
      <h2>Current Sermon Series: Acts</h2>
      <p>The book of Acts is the story of God's kingdom under the saving rule of Jesus Christ. Though ascended to heaven after his death and resurrection, Luke records how Jesus continued to build his church as the gospel began to be proclaimed to the nations. This book then is all about the acts of the risen Lord Jesus, accomplished through the witness of his people in the power of the Holy Spirit, in fulfillment of God's purposes for the world. Acts shows us that our God is faithful to his covenant promises and will continue to strengthen his church today by his Spirit through the Word of his grace.</p>
      <g-link to="/about">Learn More</g-link>
      <g-link to="/about">Listen</g-link>
      <g-image src="../assets/images/acts-series.jpg"/>
    </div>
    <div>
      <h2>
        Join us Sundays at 10:30am
      </h2>
      <p>
        235 East Miller St. Elmira, NY 14904
      </p>
      <g-link to="/about">Directions</g-link>
      <g-link to="/about">Our Liturgy</g-link>
      <g-link to="/about">Sunday Classes</g-link>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  },
};
</script>

<style lang="scss">
@import '../assets/scss/library.scss';
.ecc-hero {
  background-image: url("../assets/images/elmira-christian-center_gospel-centered-church.jpg");
  background-position: center center;
  background-size: cover;
  min-height: 599px;
  padding: 32px;

  a {
    margin: 20px;
    display: inline-block;
    border: 2px solid #fff;
    color: #fff;
    font-weight: 600;
    word-spacing: 0;
    letter-spacing: 1px;
    font-size: 16px;
    padding: 15px 20px;
    line-height: 1.33;
    border-radius: 3px;
  }
}
.ecc-acts-section {
  background: $acts-red;
  color: white;
}
.home-links a {
  margin-right: 1rem;
}
</style>
  