<template>
  <Layout>
    <div v-for="sermon of $page.allSermon.edges" :key="sermon.node.title">
      <g-link :to="sermon.node.path">{{sermon.node.title}}</g-link>
    </div>
  </Layout>
</template>
<page-query>
query Sermons {
   allSermon {
        edges {
            node {
                title
                path
                excerpt
            }
        }
    }
}
</page-query>
