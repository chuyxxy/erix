import Phaser from "phaser";
import Scene from "./Scenes/Scenes";
const SHARED_CONFIG ={

  width : 800,
  height: 600,
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
