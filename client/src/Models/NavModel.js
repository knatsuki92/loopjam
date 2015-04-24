define([
], function(){
  var NavModel = Backbone.Model.extend({
    defaults: {
      isLogged: false,
      username: 'joe'
    },

    initialize: function(param){
      this.sessionModel = param.sessionModel;
      
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
          this.set('isLogged', true);
          this.set('username', 'joe');
        }.bind(this),
        error: function(resp){
          console.error(resp);
        }
      });
    },
    logout: function(user){
      $.ajax({
        type: "GET",
        url: "/auth/logout",
        data: user,
        success: function(resp){
          console.log(resp);
          this.set('isLogged', true);
          this.set('username', 'joe');
        }.bind(this),
        error: function(resp){
          console.error(resp);
        }
      });
    }

  });
  return NavModel;
});
