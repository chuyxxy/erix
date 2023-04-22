import Phaser from "phaser";
import Scene from "./Scenes/Scenes";
const SHARED_CONFIG ={
  width : 300,
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

new Phaser.Game(config);