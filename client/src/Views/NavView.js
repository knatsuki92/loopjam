define([
  'text!templates/NavViewTemplate.html'
], function(template){
  var NavView = Backbone.View.extend({
    initialize: function(){
      this.model.sessionModel.on('change', function(){
        // handlng for logging in
      });
    },

    events:{
      "click .signupbtn": "signup",
      "click .loginbtn": "login",
      "click .loginbtn": "logout"
    },

    template: Handlebars.compile(template),

    render: function() {
      // Load Template
      this.$el.html(this.template());
      return this;
    },
    signup: function(e){
      // e.preventDefault();
      var email = this.$el.find('.EmailSignUp').val();
      var username = this.$el.find('.UsernameSignUp').val();
      var password = this.$el.find('.PassSignUp').val();
      var newUser = {
        email: email,
        username: username,
        password: password
      }
      this.model.signup(newUser);
      // this.$el.find('#signUp').modal('toggle');
    },
    login: function(e){
      // e.preventDefault();
      // var email = this.$el.find('.EmailSignUp').val();
      var username = this.$el.find('.UsernameLogin').val();
      var password = this.$el.find('.PassLogin').val();
      var user = {
        // email: email,
        username: username,
        password: password
      }
      this.model.login(user);
      // this.$el.find('#login').modal('toggle');

    },
    logout: function(e){
      // e.preventDefault();
      this.model.logout();
    }
  });

  return NavView;
});
