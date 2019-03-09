// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function(api) {
  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api

    // just trying this out
    const books = store.addContentType('Book');
    [
      'Bible',
      'The Greate Divorce',
      'The Institutes of the Christian Religion',
    ].forEach(book =>
      books.addNode({
        title: book,
        fields: {
          bookName: book,
        },
      }),
    );
  });
};
