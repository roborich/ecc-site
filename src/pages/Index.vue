<template>
  <Layout>
    <Hero :height="600" class="ecc-index__hero" :parallax="0.1">
      <div class="ecc-index__hero-content">
        <h1>
          <div>Making Disciples.</div>
          <div>Changing our Community.</div>
        </h1>
        <g-link to="/about" class="ecc-index__white-border-button">New Here?
          <fa-icon icon="long-arrow-alt-right"/>
        </g-link>
        <g-link to="/about" class="ecc-index__white-border-button">The Gospel
          <fa-icon icon="long-arrow-alt-right"/>
        </g-link>
        <g-link to="/about" class="ecc-index__white-border-button">What We Believe
          <fa-icon icon="long-arrow-alt-right"/>
        </g-link>
      </div>
    </Hero>
    <div class="ecc-index__welcome">
      <h2>Welcome to Elmira Christian Center</h2>
      <p>We are a gospel-centered church committed to worshiping the triune God, making disciples, and changing our community with the good news of Jesus Christ.</p>
    </div>
    <div class="ecc-index__grow-boxes">
      <g-link to="/what-to-expect" class="ecc-index__grow-box">
        <div class="ecc-index__grow-box__inner">
          <g-image src="../assets/images/what2expect-btn.jpg"/>
          <div>What to Expect</div>
        </div>
      </g-link>
      <g-link to="/sermons" class="ecc-index__grow-box">
        <div class="ecc-index__grow-box__inner">
          <g-image src="../assets/images/sermons-at-elmira-christian-center.jpg"/>
          <div to="/sermons">Sermons</div>
        </div>
      </g-link>
      <div class="ecc-index__grow-box">
        <div class="ecc-index__grow-box__inner">
          <g-image src="../assets/images/CGROUPS-featured_ECC.jpg"/>
          <div>Community Groups</div>
        </div>
      </div>
    </div>
    <div class="ecc-index__acts-section">
      <div>
        <h2>Current Sermon Series: Acts</h2>
        <div class="ecc-index__acts-flex">
          <div class="ecc-index__acts-flex__side">
            <p>The book of Acts is the story of God's kingdom under the saving rule of Jesus Christ. Though ascended to heaven after his death and resurrection, Luke records how Jesus continued to build his church as the gospel began to be proclaimed to the nations. This book then is all about the acts of the risen Lord Jesus, accomplished through the witness of his people in the power of the Holy Spirit, in fulfillment of God's purposes for the world. Acts shows us that our God is faithful to his covenant promises and will continue to strengthen his church today by his Spirit through the Word of his grace.</p>
            <g-link to="/about" class="ecc-index__white-border-button">
              <fa-icon icon="long-arrow-alt-right"/>&nbsp;Learn More
            </g-link>

            <g-link to="/about" class="ecc-index__white-border-button">
              <fa-icon icon="headphones"/>&nbsp;Listen
            </g-link>
          </div>
          <div class="ecc-index__acts-flex__side">
            <g-image src="../assets/images/acts-series.jpg"/>
          </div>
        </div>
      </div>
    </div>
    <Hero
      :height="400"
      class="ecc-index__join-us"
      backgroundImage="/images/Elmira-Christian-Center-Gospel-Centered-Church-bl.jpg"
      :parallax="0.1"
    >
      <h2>Join us Sundays at 10:30am</h2>
      <p>235 East Miller St. Elmira, NY 14904</p>
      <g-link to="/about" class="ecc-index__white-border-button">Directions</g-link>
      <g-link to="/about" class="ecc-index__white-border-button">Our Liturgy</g-link>
      <g-link to="/about" class="ecc-index__white-border-button">Sunday Classes</g-link>
    </Hero>
  </Layout>
</template>

<script>
import Hero from '../components/Hero';
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
  components: { Hero },
};
</script>

<style lang="scss">
@import '../assets/scss/library.scss';
.ecc-index {
  &__white-border-button {
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
  &__hero.ecc-content-hero {
    background-image: url('../assets/images/elmira-christian-center_gospel-centered-church.jpg');
  }
  &__hero-content {
    h1 {
      line-height: 1.2;
      font-size: 55px;
      margin: 0;
    }
    a {
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
  &__grow-boxes {
    // padding: 96px 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  &__grow-box {
    flex: 1 0 $content-width / 3;
    background: $ecc-blue;
    color: white;
    text-align: center;
    &__inner {
      height: 0;
      padding-top: 56.25%;
      position: relative;
      overflow: hidden;
      img {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        transition: transform 0.3s ease-out, opacity 0.3s ease-out;
        transform: translateY(-50%) scale(1);
      }
      div {
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 0;
        width: 100%;
        transform: translateY(-50%);
        text-align: center;
        font-size: 2.5vw;
        text-decoration: none;
        font-weight: 600;
        color: white;
        text-transform: uppercase;
      }
    }
    &:hover &__inner img {
      transform: translateY(-50%) scale(1.1);
      opacity: 0.75;
    }
  }
  $act-content-width: 970px;
  &__acts-section {
    background: $acts-red;
    color: white;
    padding: 96px 32px;
    h2 {
      font-size: 32px;
      text-align: center;
    }
    p {
      color: white;
      margin-right: 32px;
    }
  }
  &__acts-flex {
    display: flex;
    flex-wrap: wrap;
    max-width: 1080px;
    margin: 0 auto;

    &__side {
      flex: 1 0 $content-width / 2;
      img {
        width: 100%;
      }
    }
  }
  &__join-us {
    h2 {
      font-size: 32px;
    }
    p {
      font-size: 16px; // todo these might not be needed if I take away hero font sizes.
      color: white;
    }
  }
}

.home-links a {
  margin-right: 1rem;
}
</style>
  