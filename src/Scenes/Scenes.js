import playerMove from "./Player";

var bird = null;
//var tiles;
var floor;
class Scene extends Phaser.Scene{
    //player;
    constructor(config){
        super();
        this.config = config;
        this.Player = null;
    }
    
    preload () {
        this.load.image("bird", "assets/bird.png");
        this.load.image("color", "assets/color.jpg");
        this.load.image("floor", "assets/floor.png");
        this.load.image("floor1","assets/floor1.png")
        
    }
    
    create () {
        this.add.image(0, 0, "color").setOrigin(0);
        this.Player = new playerMove(this,100,150,"bird");
        this.Floor();
        // floor.FloorPos();
        // floor.scale = 6;
        //this.platformCreate();
        //this,this.platformCreate();
        
        //this.physics.add.collider(this.Player,tiles,this.GameOver,null,this);
        
        this.cameraYMin = 99999;
		//this.tileYMin = 99999;
        //platformCreate(){}
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    Floor()
    {
        floor = this.physics.add.image(150,450,"floor1")
        floor.body.immovable = true;
        
    }
    
    Platforms()
    {
        this.platforms = this.add.group();
        this.body.enableBody = true;
    }
    update()
    {
        this.physics.add.collider(this.Player,floor);
        
        if(this.cursors.space.isDown && this.Player.body.touching.down && floor.body.touching.up)
        {
            this.Player.body.velocity.y = -300;
        }
         /* if(this.Player.body.touching.down && this.platforms.body.touching.up)
          {
              this.Player.body.velocity.y = -300;
          }*/
        
        //this.world.setBounds( 0, -this.Player.yChange, this.world.width, this.game.height + this.Player.yChange );
        // this.cameraYMin = Math.min( this.cameraYMin, this.body.y - this.scene.height + 130 );
        //this.camera.y = this.cameraYMin;
        
    }

}     

export default Scene;



