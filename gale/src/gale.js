import Phaser from 'phaser';

import MainScene from './scene/main';

class GaleGame extends Phaser.Game {
  constructor() {
    super({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      physics: {
        default: 'arcade',
        arcade: {
          gravity: { y: 200 }
        }
      },
      scene: [MainScene]
    });
  }
}

export default GaleGame;