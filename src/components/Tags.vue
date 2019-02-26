<template>
  <div class="tags" v-if="tags !== undefined && tags.length > 0">
    <div class="title">Tags</div>
    <span v-for="(tag, i) of tags" :key="tag">
      <span v-if="i !== 0">•</span>
      <g-link to="/about">{{tag}}</g-link>
    </span>
  </div>
</template>
<script>
export default {
  name: "Tags",
  props: {
    tags: {
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/library";
.tags {
  margin-bottom: 16px;
  a {
    text-decoration: none;
    color: #999;
    font-weight: 700;
    display: inline-block;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    padding: 0 4px;
    border-bottom: solid 1px rgba($link-underline-gray, 0);
    &:hover {
      border-bottom: solid 1px $link-underline-gray;
    }
  }
}
</style>