// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  // initialize: function() {
  //   this.trigger('enqueue');
  // },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>(<a href="" class="enqueue">add to queue</a>)</td>'),

  events: {
    'click': function() {
      this.model.play();
    },
    'click a': function(event) {
      event.preventDefault();
      // debugger;
      this.model.enqueue();
      console.log("click a: this.model " + this.model);
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
