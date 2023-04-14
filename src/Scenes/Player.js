
class playerMove{

    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        this.scene = scene;
        scene.add.existing(this);
        scene.physics.add.existing(this);
        scene.input.keyboard.on("keydown-W", this.Move, this);
        scene.input.keyboard.on("keydown-A", this.Move, this);
        scene.input.keyboard.on("keydown-S", this.Move, this);
        scene.input.keyboard.on("keydown-D", this.Move, this);
    }

    Move(){
        this.body.velocity.y* velocity.x;
    }
    
}
export default playerMove;