module.exports = function(grunt) {

  // PROJECT CONFIGURATION
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    htmlmin: {
      dist: {
      options: {
        removeComments: true,
        collapseWhitespace: true
      },
      files: {
        '../dist/index.html': '../src/index.html'
      }
    },
  });

  // LOAD PLUGINS
  //grunt.loadNpmTasks('');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  // DEFAULT TASKS
  grunt.registerTask('default', ['htmlmin']);
};