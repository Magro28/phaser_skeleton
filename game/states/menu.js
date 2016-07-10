'use strict';

function Menu() {}

Menu.prototype = {
  preload: function() {

  },
  create: function() {
    var style = {
      font: '40px Arial',
      fill: '#f00d0d',
      align: 'center'
    };

    this.background = this.game.add.tileSprite(0, 0, 800, 600, 'background0');
    this.background.fixedToCamera = true;

    this.music = this.game.add.audio('titlemusic');
    this.game.sound.setDecodedCallback(this.music, this.startMusic, this);

    this.titleText = this.game.add.text(this.game.world.centerX, 300,
      'Generic Game Title', style);
    this.titleText.anchor.setTo(0.5, 0.5);

    this.instructionsText = this.game.add.text(this.game.world.centerX, 400,
      'click to start', {
        font: '16px Arial',
        fill: '#0000FF',
        align: 'center'
      });
    this.instructionsText.anchor.setTo(0.5, 0.5);

  },
  startMusic: function() {
    this.music.loopFull();
  },
  update: function() {
    this.background.tilePosition.x += 0.1;

    if (this.game.input.activePointer.justPressed()) {
      this.game.state.start('levelSelection');
    }
  }
};
