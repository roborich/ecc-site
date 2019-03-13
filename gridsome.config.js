// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  // css: {
  //   loaderOptions: {
  //     scss: {},
  //   },
  // },
  siteName: 'Elmira Christian Center',
  siteUrl: 'https://elmirachristiancenter.com',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
    },
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/sermons/*.md',
        typeName: 'Sermon',
        route: 'sermons/:series/:slug',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/series/*.md',
        typeName: 'Series',
        route: 'sermons/:title',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/posts/*.md',
        typeName: 'Post',
        route: 'blog/:slug',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/pages/*.md',
        typeName: 'ContentPage',
        route: ':fileInfo__name',
      },
    },
  ],
};
