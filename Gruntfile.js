module.exports = function(grunt) {
    const config = {
        pkg: grunt.file.readJSON('package.json'),
        concat: {
          build: {
              src: 'src/**/*.js',
              dest: 'public/lib.js',
          }
        },
        // eslint: {
        //   options: {
        //     format: 'unix',
        //   },
        //   source: {
        //     src: ['src/**/*.js'],
        //   },
        //   fix: {
        //       options: {
        //         rules: {
        //           'no-undef': 0,
        //           'no-unused-vars': 0,
        //         },
        //         fix: true,
        //       },
        //     },
        // },
      };
    //   config.eslint.fix.src = Object.keys(config.eslint)
    //   .map((s) => config.eslint[s].src)
    //   .reduce((a, b) => a.concat(b), [])
    //   .filter((a) => a);
      

    // Project configuration.
    grunt.initConfig(config);

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-eslint');
  
    // Default task(s).
    grunt.registerTask('default', [/*'eslint'*/, 'concat:build']);
  
  };