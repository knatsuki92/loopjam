define([  
  'Models/SessionModel',
  'Models/NavModel',
], function(SessionModel, NavModel){
  var MainModel = Backbone.Model.extend({
    defaults: {
    },

    initialize: function(){
      this.sessionModel = new SessionModel();
      this.navModel = new NavModel( {sessionModel: this.sessionModel});      
    }

  });
  return MainModel;
});