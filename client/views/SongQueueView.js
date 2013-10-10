// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

//  tagName: "table",
  initialize: function() {
    // debugger;
    var songQueue = new SongQueue();
    this.collection = songQueue;
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
    // console.log(this);
    // console.log('initializes SQV');
  },

  render: function() {
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // // see http://api.jquery.com/detach/
    this.$el.children().detach();
    console.log("rendering SongQueueView");

    return this.$el.html('<th>SongQueue</th>').append(
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
