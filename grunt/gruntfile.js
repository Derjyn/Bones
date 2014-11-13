///////////////////////////////////////////////////////////////
module.exports = function(grunt) {
  // PROJECT CONFIGURATION ////////////////////
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    // CSSMIN TASKS ///////////
    cssmin: {
      combine: {
        files: {
          '../dist/demo/bones_demo.css': ['../src/bones.css', '../src/custom.css']
        }
      },
      minify: {
        expand: true,
        cwd: '../src/',
        src: 'bones.css',
        dest: '../dist/',
        ext: '.min.css'
      }
    },
    // PRETTIFY TASKS /////////
    prettify: {
      dist:{
        options: {
          indent: 2,
          indent_char: ' ',
          wrap_line_length: 78,
          brace_style: 'expand',
          preserve_newlines: true
        },
        files: {
          '../dist/demo/demo.html': '../dist/demo/demo.html',
          '../dist/demo/layout.html': '../dist/demo/layout.html',          
          '../dist/index.html': '../dist/index.html'        
        }
      }
    },
    // PROCESSHTML TASKS //////
    processhtml: {
      dist: {
        files: {
          '../dist/demo/demo.html': '../src/demo/demo.html',
          '../dist/demo/layout.html': '../src/demo/layout.html',          
          '../dist/index.html': '../src/index.html'
        }
      }
    },
    // COP TASKS //////////////
    copy: {
      dist: {
        src: '../src/bones.css',
        dest: '../dist/bones.css'
      }
    },
  });

  // LOAD PLUGINS /////////////////////////////
  //grunt.loadNpmTasks('');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-prettify');
  grunt.loadNpmTasks('grunt-processhtml');

  // DEFAULT TASKS ////////////////////////////
  grunt.registerTask('default', [
    'processhtml',
    'copy',
    'cssmin:combine',
    'cssmin:minify'  
  ]);
};
// EOF ////////////////////////////////////////////////////////