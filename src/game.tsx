import 'phaser'
import Phaser, { Game as GameType } from "phaser";
import { useEffect, useState } from 'react';
import PreloadScene from './scenes/preloadScene';
import MainScene from './scenes/MainScene';
import Questions from './scenes/questions1';
import Questions1 from './scenes/questions1';
import Questions2 from './scenes/questions2';
import Questions3 from './scenes/questions3';
import Questions4 from './scenes/questions4';
import Questions5 from './scenes/questions5';
import Questions6 from './scenes/questions6';
import Questions7 from './scenes/questions7';
import Questions8 from './scenes/questions8';

const DEFAULT_WIDTH = 2887
const DEFAULT_HEIGHT = 4882

const Game = () => {
  const [game, setGame] = useState<GameType>()
  useEffect(() => {
    if (!game) {
      const initPhaser = async () => {
        const PhaserGame = new Phaser.Game({
          type: Phaser.CANVAS,
          backgroundColor: '#ffffff',
          scale: {
            parent: 'phaser-game',
            mode: Phaser.Scale.FIT,
            autoCenter: Phaser.Scale.CENTER_BOTH,
            width: DEFAULT_WIDTH,
            height: DEFAULT_HEIGHT
          },
          scene: [
            PreloadScene,
            MainScene,
            Questions1,
            Questions2,
            Questions3,
            Questions4,
            Questions5,
            Questions6,
            Questions7,
            Questions8,
          ],
          physics: {
            default: 'arcade',
            arcade: {
              debug: false,
              gravity: { y: 400 }
            }
          }
        });
        setGame(PhaserGame)
      }
      initPhaser();
    }

  }, [game])
  return <div id="phaser-game" key={"phaser-game"}></div>;
}
export default Game; 