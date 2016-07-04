'use strict';

function LevelSelection() {}
LevelSelection.prototype = {
  create: function() {


    this.button = this.game.add.button(5, 5, 'buttonlevel1', this.clickListener, this, 0);

    this.button.onInputOver.add(this.over, this);
    this.button.onInputOut.add(this.out, this);
    this.button.onInputUp.add(this.up, this);
    // this.sprite = this.game.add.sprite(5, 5, 'buttonlevel1');
    // this.sprite.inputEnabled = true;
    //
    // this.sprite.events.onInputDown.add(this.clickListener, this);
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
