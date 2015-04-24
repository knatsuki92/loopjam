define([
], function(){
  var NavModel = Backbone.Model.extend({
    defaults: {
    
    },

    initialize: function(){
      
    },

    signup: function(newUser){
      $.ajax({
        type: "POST",
        url: "/auth/signup",
        data: newUser,
        success: function(resp){
          console.log(resp);
        },
        error: function(resp){
          console.error(resp);
        }
      });
    },
    login: function(user){
      $.ajax({
        type: "GET",
        url: "/auth/login",
        data: user,
        success: function(resp){
          console.log(resp);
        },
        error: function(resp){
          console.error(resp);
        }
      });
    }

  });
  return NavModel;
});
