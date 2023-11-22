import Phaser from 'phaser'
import { MainScene } from './main-scene'
import { calculateGravity } from './helpers/gravity'

const colors = {
  red: '#FF0000',
  white: '#FFFFFF',
  black: '#000000',
  blue: '#0000FF',
  lightBlue: '#ADD8E6',
  hitbox: 0x00FF00,
  background: '#FFFFFF',
}

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: calculateGravity() },
      debug: true,
    },
  },
  scene: MainScene,
  backgroundColor: colors.background,
}

export { config, colors }
