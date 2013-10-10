// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    console.log("initializing SongQueueEntryView");
    this.on('add', function() {
      this.render();
    });
  },

  enqueue: function(song) {
    this.model.add(song);
    console.log(song);
    console.log(this.model);
  },

  render: function() {
    console.log("rendering entry view");
    return this.$el.html(this.template(this.model.attributes));
  }

});
