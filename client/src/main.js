require.config({
  baseUrl: './src', 
  paths: {
    text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.12/text.min',
    templates: '../templates',
    base64Binary:'utilities/base64-binary',
    bufferLoader: 'utilities/bufferLoader',
    utilities: 'utilities/utilities',
    recorder: 'utilities/recordmp3'
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


