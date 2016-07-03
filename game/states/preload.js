'use strict';

function Preload() {
  this.asset = null;
  this.ready = false;
}

Preload.prototype = {
  preload: function() {
    this.asset = this.add.sprite(this.width / 2, this.height / 2,
      'preloader');
    this.asset.anchor.setTo(0.5, 0.5);

    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);
    this.load.setPreloadSprite(this.asset);
    this.load.image('micromata', 'assets/img/micromata.png');
    this.load.image('sfnlogo', 'assets/img/sfnlogo.png');
    this.load.spritesheet('player', 'assets/img/ships/UFO.png', 32, 32, 4);
    this.load.image('bullet', 'assets/img/shmup-bullet.png');
    this.load.image('buttonlevel1', 'assets/img/button.png');

  },
  create: function() {
    this.asset.cropEnabled = false;
  },
  update: function() {
    if (!!this.ready) {
      this.game.state.start('menu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};
