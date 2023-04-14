import playerMove from "./Scenes/Player";

var bird = null;
class Scene extends Phaser.Scene{

    constructor(config){
        super();
        this.config = config;
        this.Player = null;
    }

    update(){
    }

    preload () {
        this.load.image("bird", "assets/bird.png");
        this.load.image("Moon-night", "assets/Moon-night.jpg");
    }
      
    create () {
        this.add.image(0, 0, "Moon-night").setOrigin(0);
        this.Player = new playerMove(this,150,150,"bird");
    }
}     

export default Scene;



