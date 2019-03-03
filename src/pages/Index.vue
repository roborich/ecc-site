<template>
  <Layout>
    <Hero
      height="600"
      background-image="/images/elmira-christian-center_gospel-centered-church.jpg"
    >
      <div class="ecc-index__hero-content">
        <h1>
          <div>Making Disciples.</div>
          <div>Changing our Community.</div>
        </h1>
        <g-link to="/about">New Here?
          <fa-icon icon="long-arrow-alt-right"/>
        </g-link>
        <g-link to="/about">The Gospel
          <fa-icon icon="long-arrow-alt-right"/>
        </g-link>
        <g-link to="/about">What We Believe
          <fa-icon icon="long-arrow-alt-right"/>
        </g-link>
      </div>
    </Hero>
    <div class="ecc-index__welcome">
      <h2>Welcome to Elmira Christian Center</h2>
      <p>We are a gospel-centered church committed to worshiping the triune God, making disciples, and changing our community with the good news of Jesus Christ.</p>
    </div>
    <div>
      <div>What to Expect</div>
      <div>Sermons</div>
      <div>Community Groups</div>
    </div>
    <div class="ecc-index__acts-section">
      <div class="ecc-content">
        <h2>Current Sermon Series: Acts</h2>
        <div class="ecc-flexbox">
          <div class="ecc-index__act-side">
            <p>The book of Acts is the story of God's kingdom under the saving rule of Jesus Christ. Though ascended to heaven after his death and resurrection, Luke records how Jesus continued to build his church as the gospel began to be proclaimed to the nations. This book then is all about the acts of the risen Lord Jesus, accomplished through the witness of his people in the power of the Holy Spirit, in fulfillment of God's purposes for the world. Acts shows us that our God is faithful to his covenant promises and will continue to strengthen his church today by his Spirit through the Word of his grace.</p>
            <g-link to="/about">Learn More</g-link>
            <g-link to="/about">Listen</g-link>
          </div>
          <div class="ecc-index__act-side">
            <g-image src="../assets/images/acts-series.jpg" width="300"/>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2>Join us Sundays at 10:30am</h2>
      <p>235 East Miller St. Elmira, NY 14904</p>
      <g-link to="/about">Directions</g-link>
      <g-link to="/about">Our Liturgy</g-link>
      <g-link to="/about">Sunday Classes</g-link>
    </div>
  </Layout>
</template>

<script>
import Hero from "../components/Hero";
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  components: { Hero }
};
</script>

<style lang="scss">
@import "../assets/scss/library.scss";
.ecc-index {
  &__hero-content {
    h1 {
      line-height: 1.2;
      font-size: 55px;
      margin: 0;
    }
    a {
      margin-right: 32px;
      display: inline-block;
      border: 2px solid #fff;
      text-decoration: none;
      color: #fff;
      font-weight: 600;
      word-spacing: 0;
      letter-spacing: 1px;
      font-size: 16px;
      padding: 15px 20px;
      line-height: 1.33;
      border-radius: 3px;
      text-transform: uppercase;
      transition: background-color 0.2s ease, color 0.2s ease;
      &:first {
        margin-left: 0;
      }
      &:hover {
        background-color: rgba(white, 0.8);
        color: black;
      }
    }
  }
  &__welcome {
    text-align: center;
    padding: 96px $content-gutter;
    max-width: $content-width;
    margin: 0 auto;

    h2 {
      font-weight: 300;
      font-size: 36px;
      color: $header-blue;
    }
    p {
      font-size: 22px;
      line-height: 1.5;
    }
  }
  &__acts-section {
    background: $acts-red;
    color: white;
    padding: 96px 0;
    p {
      color: white;
    }
  }
  &__acts-side {
    flex: 0 0 $content-width / 2;

  }
}

.home-links a {
  margin-right: 1rem;
}
</style>
  