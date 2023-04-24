import { Scenes } from "phaser";
import playerMove from "./Player";

var bird = null;
var floor;
var tile;
var platformsTraveled;
class Scene extends Phaser.Scene{
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
        this.Player = new playerMove(this,145,400,"bird");
        this.Floor();
        this.cursors = this.input.keyboard.createCursorKeys();
        platformsTraveled = 0;
        
    }
    
    Floor()
    {
        floor = this.physics.add.image(150,450,"floor1")
        tile = this.physics.add.image(150,350,"floor")
        floor.body.immovable = true;
        tile.body.immovable = true;
        
    }
    
    
    update()
    { 
        this.physics.add.collider(this.Player,floor);
        this.physics.add.collider(this.Player,tile,this.bounceBack,null,this);
        
        if(this.cursors.space.isDown && this.Player.body.touching.down && floor.body.touching.up)
        {
            this.Player.body.velocity.y = -350;
        }
        
        if(platformsTraveled >0 && this.Player.body.touching.down && floor.body.touching.up)
        {
            this.gameOver();
            floor.body.immovable = false;
        }

        this.physics.world.wrap(this.Player, 4);
        
    }
    bounceBack()
    {
        if(this.Player.body.touching.down && tile.body.touching.up)
        {
            this.Player.body.velocity.y = -300;
            platformsTraveled=+1;
        }
        
    }
    gameOver()
    {
        alert("Game Over");
        this.scene.restart(Scenes);
    }

}     

export default Scene;



