
class playerMove extends Phaser.GameObjects.Sprite{

    constructor(scene, x, y, texture){
        super(scene,x,y,texture);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.input.keyboard.on("keydown-A", this.Movex, this);
        scene.input.keyboard.on("keyup-A", this.zeroMove, this);
        scene.input.keyboard.on("keydown-D", this.Movexx, this);
        scene.input.keyboard.on("keyup-D", this.zeroMove, this);
        this.body.checkCollision.up = false;
        this.body.checkCollision.left = false;
        this.body.checkCollision.right = false;
        this.body.gravity.y = 500;
        //yChange = 0;
    }

    Movex(){
        this.body.velocity.x =-200;
    }
    zeroMove(){
        this.body.velocity.x =0;
    }
    Movexx(){
        this.body.velocity.x =200;
    }
 
}
export default playerMove;