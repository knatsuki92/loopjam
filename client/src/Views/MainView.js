define([
  'text!templates/MainViewTemplate.html',
  'Models/MainModel',
  'Models/AppModel',
  'Models/NavModel',
  'Views/NavView',
  'Views/AppView',
  'Views/TrackView',
  'text!templates/UsersTracksViewTemplate.html'
], function(template, AppModel, NavView, AppView, TrackView, UsersTracksTemplate){
  var MainView = Backbone.View.extend({

    initialize: function(){
    },

    events:{
    },

    template: Handlebars.compile(template),

    render: function() {
      // Load Template
      this.$el.html(this.template());

      var sessionModel = this.model.sessionModel;
      var navModel = this.model.navModel;

      // attach navBar
      var userTrackModal = Handlebars.compile(UsersTracksTemplate);
      var navView = new NavView({model: navModel});
      this.$el.find('.navBar').html(navView.render().el);
      this.$el.find('.navBar').find('.users-tracks').html(userTrackModal());

      this.$el.find('#table').bootstrapTable({
        url: '/tracks',
        responseHandler: function(d) {
          for (var i = 0; i < d.length; i++) {
            var trackname = d[i]['trackname'].toString();
            var trackID = d[i]['trackID'].toString();
            d[i]['trackname'] = '<a href="/#/tracks/' + trackID + '">' + trackname + ' </a> ';
          }
          return d;
        }
      });
      return this;
    },
    renderAppView: function(){
      // attach appView
      var appModel = new AppModel();
      var appView = new AppView({model: appModel});
      this.$el.find('.main').html(appView.render().el);

      return this;
    },
    renderTrackView: function(trackView){
      // attach trackView
      this.$el.find('.main').html(trackView.render().el);
      return this;
    }
    
  });

  return MainView;
});
