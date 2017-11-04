module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

  grunt.initConfig({
    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('pixrem')(), // add fallbacks for rem units
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
          require('cssnano')() // minify the result
        ]
      },
      dist: {
        src: 'css/**/*.css'
      }
    },
    sass: {
      dist: {
        files: [{
          expand: true,
          src: [
            'countdown/**/*.scss'
          ],
          dest: 'css',
          ext: '.css'
        }]
      }
    },
    watch : {
      scss: {
        files: '**/*.scss',
        tasks: ['default']
      }
    }
  });

  grunt.registerTask('default', ['sass', 'postcss']);
};
