
class playerMove extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        super(scene,x,y,texture);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.input.keyboard.on("keydown-W", this.Movey, this);
        scene.input.keyboard.on("keydown-A", this.Movex, this);
        scene.input.keyboard.on("keydown-S", this.Moveyy, this);
        scene.input.keyboard.on("keydown-D", this.Movexx, this);
    }

    Movex(){
        this.body.velocity.x =50;
    }
        Movexx(){
        this.body.velocity.x = -50;
    }
        Movey(){
        this.body.velocity.y = 50;
    }
        Moveyy(){
        this.body.velocity.y = -50;
    }
    
}
export default playerMove;