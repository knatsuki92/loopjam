require.config({
  baseUrl: './src', 
  paths: {
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    templates: '../templates',
    base64Binary:'base64-binary',
    bufferLoader: 'bufferLoader',
    utilities: 'utilities'
  }
});

define([
  'text',
  'router'

], function(text, AppRouter){
  $(function(){
    var appRouter = new AppRouter();

    Backbone.history.start();
    // Backbone.history.start({pushState: true });
  });
});


