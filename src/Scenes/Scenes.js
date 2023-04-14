import playerMove from "./Player";

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
        this.load.image("color", "assets/color.jpg");
    }
      
    create () {
        this.add.image(0, 0, "color").setOrigin(0);
        this.Player = new playerMove(this,150,150,"bird");
    }
}     

export default Scene;



