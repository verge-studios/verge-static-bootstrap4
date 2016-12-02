module.exports = {
  files: {
    javascripts: {
      joinTo: {
        '/js/vendor.js': /^(?!app)/,
        '/js/app.js': /^app/
      }
    },
    stylesheets: {joinTo: '/css/app.css'}
  },
  plugins: {
    babel: {presets: ['es2015']},
    postcss: {processors: [require('autoprefixer')]},
    autoReload: {enabled: true}
  }
};
