'use strict';

function LevelSelection() {}
LevelSelection.prototype = {
  create: function() {

    this.sprite = this.game.add.sprite(5, 5, 'buttonlevel1');
    this.sprite.inputEnabled = true;

    this.sprite.events.onInputDown.add(this.clickListener, this);
  },
  update: function() {

  },
  clickListener: function() {
    this.game.state.start('shooter');
  }
};
