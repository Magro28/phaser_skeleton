'use strict';

//global variables
window.onload = function() {
  var game = new Phaser.Game(800, 600, Phaser.AUTO, 'sfn-game');

  // Game States
  game.state.add('boot', Boot);
  game.state.add('gameover', GameOver);
  game.state.add('menu', Menu);
  game.state.add('levelSelection', LevelSelection);
  game.state.add('shooter', Shooter);
  game.state.add('preload', Preload);


  game.state.start('boot');
};
