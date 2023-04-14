import Phaser from "phaser";
import Scene from "./Scenes/Scenes";
import playerMove from "./Scenes/Player";
const SHARED_CONFIG ={

  width : 800,
  height: 450,
}

const config = {
  type: Phaser.AUTO,
  ...SHARED_CONFIG,
  physics: {
  default: "arcade",
  arcade: {
    debug:false,
  }
  },
  scene:[new Scene(SHARED_CONFIG)]
};

var bird = null; 
new Phaser.Game(config);
