module.exports = function(grunt){

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      clientApp: ["client-app/src/**/*.js"]
    },

    clean: {
      entries: ["client-app/build/entries", "web/public/client-app/entries.js"],
      common: ["client-app/build/common"]
    },

    babel: {
      options: {
        sourceMap: true
      },
      build: {
        files: [{
          expand: true,
          cwd: "client-app/src",
          src: ["**/*.js"],
          dest: "client-app/build/"
        }]
      }
    },

    browserify: {
      options:{
        browserifyOptions: {
          debug: true,
          paths: [
            "client-app/build/common"
          ]
        }
      },
      entries: {
        files: {
          "web/public/client-app/entries.js": "client-app/build/entries/index.js"
        },
      }
    },

    watch: {
      clientApp: {
        files: ["client-app/src/**/*.js"],
        tasks: ["clean", "jshint:clientApp", "babel", "browserify"]
      }
    }
  });

  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-browserify");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-watch");
  
  grunt.registerTask("default", ["watch"]);
};
