define([
], function(){
  var SessionModel = Backbone.Model.extend({
    defaults: {
      isLogged: false,
      username: null
    },

    initialize: function(){
      
    },

  });
  return SessionModel;
});
