define([
  'text!templates/NavViewTemplate.html'
], function(template){
  var NavView = Backbone.View.extend({
    initialize: function(){
    },

    events:{
      "click .signupbtn": "signup",
      "click .loginbtn": "login"
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
    },
    login: function(e){
      e.preventDefault();
      // var email = this.$el.find('.EmailSignUp').val();
      var username = this.$el.find('.UsernameLogin').val();
      var password = this.$el.find('.PassLogin').val();
      var user = {
        // email: email,
        username: username,
        password: password
      }
      this.model.login(user);
    }
  });

  return NavView;
});
