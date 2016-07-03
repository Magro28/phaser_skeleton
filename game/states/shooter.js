'use strict';

//Schaut euch das Invaders Beispiel an um eine Idee zu bekommen
//http://phaser.io/examples/v2/games/invaders

function Shooter() {}

var player;
var weapon;
var cursors;
var fireButton;

Shooter.prototype = {
  create: function() {
    //sets the player object with a sprite from the tileset
    player = this.game.add.sprite(400, 300, 'player', 1);
    player.smoothed = false;
    this.game.physics.arcade.enable(player);

    //setting player animations
    player.animations.add('flying', [0, 1, 2, 3], 10, true);
    player.body.collideWorldBounds = true;

    //  Creates 30 bullets, using the 'bullet' graphic
    weapon = this.game.add.weapon(30, 'bullet');
    //  The bullet will be automatically killed when it leaves the world bounds
    weapon.bulletKillType = Phaser.Weapon.KILL_WORLD_BOUNDS;
    //  The speed at which the bullet is fired
    weapon.bulletSpeed = 600;
    //  Speed-up the rate of fire, allowing them to shoot 1 bullet every 60ms
    weapon.fireRate = 100;

    player.anchor.set(0.5);


    //  Tell the Weapon to track the 'player' Sprite
    //  With no offsets from the position
    weapon.trackSprite(player, 0, 0, false);


    cursors = this.game.input.keyboard.createCursorKeys();
    fireButton = this.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
  },
  update: function() {

    player.animations.play('flying');

    if (cursors.up.isDown) {
      player.body.velocity.y = -200;
    } else if (cursors.down.isDown) {
      player.body.velocity.y = 200;
    } else {
      player.body.velocity.y = 0;
    }

    if (cursors.left.isDown) {
      player.body.velocity.x = -200;
    } else if (cursors.right.isDown) {
      player.body.velocity.x = 200;
    } else {
      player.body.velocity.x = 0;
    }

    if (fireButton.isDown) {
      weapon.fire();

    }

    this.game.world.wrap(player, 16);
  },
};
