'use strict';

function LevelSelection() {}
LevelSelection.prototype = {
  create: function() {

    //check out http://phaser.io/docs/2.5.0/Phaser.Button.html
    this.button = this.game.add.button(5, 5, 'buttonlevel1', this.clickListener, this, 0);

    this.button.onInputOver.add(this.over, this);
    this.button.onInputOut.add(this.out, this);
    this.button.onInputUp.add(this.up, this);

  },
  update: function() {

  },

  up: function() {
    console.log('button up', arguments);
  },

  over: function() {
    console.log('button over');
  },

  out: function() {
    console.log('button out');
  },

  clickListener: function() {
    this.game.state.start('shooter');
  }
};
