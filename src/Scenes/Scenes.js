const bird = null;

class Scene extends Phaser.Scene{

    constructor(config){
        super();
        this.config = config;
        this.bird = null;
    }

    
    preload () {
        this.load.image("bird", "assets/bird.png");
        this.load.image("Moon-night", "assets/Moon-night.jpg");
    }
      
    create () {
        this.add.image(0, 0, "Moon-night").setOrigin(0);

        this.bird = this.add.sprite(100, this.config.height/2,"bird")
    }
}     

export default Scene;



