// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    var collection = this;
    this.on('add', function(arraySongs) {
      if(this.length === 1) {
        this.playFirst();
      }
    });
  },

  playFirst: function(){
    if(this.length > 0) {
      this.at(0).play();
      this.shift();
    }
  }
  // enQueue: function(songsArray) {
  //   _.each(songsArray, function(song) {
  //     collection.push(song);
  //   });
  // }


  // this.add('add', addSong)
  // addSong: function

  // SongQueue.on('add', function(song){
  //   playFirst();

  // });
  // this.on(this.collection, 'add', function() {

  // });
});


// var ships = new Backbone.Collection;

// ships.on("add", function(ship) {
//   alert("Ahoy " + ship.get("name") + "!");
// });

// ships.add([
//   {name: "Flying Dutchman"},
//   {name: "Black Pearl"}
// ]);