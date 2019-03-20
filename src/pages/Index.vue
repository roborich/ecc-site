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
        <g-link to="/the-gospel" class="ecc-index__white-border-button">The Gospel
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
    <div class="ecc-index__blog-section">
      <h2 class="ecc-title">From The Blog</h2>
      <div class="ecc-index__blog-section__grid">
        <BlogTile v-for="post in $page.allPost.posts" :key="post.node.title" :post="post"/>
      </div>
    </div>
    <div class="ecc-index__section ecc-index__additional">
      <div class="ecc-index__flex">
        <div class="ecc-index__half">
          <h2 class="ecc-title">Newsletter</h2>
          <p>
            Our weekly email newsletter helps us communicate important information.
            Stay connected with what God is doing in and through our church!
          </p>
          <button>Sign Up</button>
        </div>
        <div class="ecc-index__half">
          <h2 class="ecc-title">Resources</h2>
          <p>
            We provide resources to help you know read the Bible,
            grow in your understanding and practice of the Christian faith, and share the gospel.
          </p>
          <button>View Resources</button>
        </div>
      </div>
    </div>
  </Layout>
</template>
<page-query>
query Posts {
  allPost(sortBy: "date", perPage: 3) {
    posts: edges {
      node {
        title
        image
        summary
        date
        path
        category
      }
    }
  }
}
</page-query>
<script>
import Hero from '../components/Hero';
import BlogTile from '../components/BlogTile';

export default {
  metaInfo: {
    title: 'Welcome',
  },
  components: { Hero, BlogTile },
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
  &__hero.ecc-hero {
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
    padding: 96px $container-gutter;
    max-width: $container-width;
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
    max-width: 1080px;
    margin: 0 auto;
    @media (min-width: $container-width) {
      padding: 96px 16px;
      display: flex;
      font-size: 30px;
    }
    font-size: 5vw;
    // flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  &__grow-box {
    flex: 1 0 $container-width / 3;
    background: $ecc-blue;
    color: white;
    display: block;
    text-align: center;
    @media (max-width: $container-width) {
      margin: 16px;
    }
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

  &__acts-section {
    background: $acts-red;
    color: white;
    padding: 96px 32px 64px;
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
      flex: 1 1 $container-width / 2;
      margin-bottom: 32px;
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
  &__blog-section {
    padding: 96px 32px 64px;
    h2 {
      text-align: center;
    }

    &__grid {
      display: grid;
      max-width: $container-width;
      margin: 0 auto;
      grid-template-columns: 1fr;
      grid-gap: 16px;
      @include for-tablet-up() {
        grid-template-column: 1fr 1fr;
      }
      @include for-desktop() {
        max-width: $wide-container-width;
        grid-template-columns: 1fr 1fr 1fr;
      }
    }
  }
  &__section {
    padding: 96px 32px 64px;
  }
  &__flex {
    // flex container
    display: flex;
    margin: auto;
    max-width: $wide-container-width;
  }
  &__half {
    flex: 1 0 $wide-container-width / 2;
    text-align: center;
  }
  &__additional {
    background: $light-gray;
  }
}

.home-links a {
  margin-right: 1rem;
}
</style>
  