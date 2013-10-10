// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // console.log('initialize SongQueue');
    var collection = this;
    this.on('add', function(song) {
      if(this.length === 1) {
        this.playFirst();
      }
    });
    this.on('ended', function(song) {
      this.shift();
      if (this.length>0) {
        this.playFirst();
      }
    });
    this.on('dequeue', function(song) {
      this.remove();
    });
    this.on('change', function()  {
      this.view.render();
    });
  },

  playFirst: function(){
    if(this.length > 0) {
      this.at(0).play();
    }
  },

  render: function() {
    console.log('rendering SongQueue');
  }

});

/*

  events: {
    'click #enqueue': "enqueue"
  },

    this.on('click', 'a', function(event) {
      event.preventDefault();
      console.log(this);
    });

  enqueue: function(song) {
    this.model.add(song);
    console.log(song);
    console.log(this.model);
  },


*/