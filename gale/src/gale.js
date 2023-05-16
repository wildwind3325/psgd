import Phaser from 'phaser';

import config from './config';

class GaleGame extends Phaser.Game {
  constructor() {
    super(config);
  }
}

export default GaleGame;