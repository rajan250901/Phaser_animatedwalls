class Boot extends Phaser.Scene{
    constructor(){
        super({key:'boot'});
    }

    preload(){
        this.load.spritesheet('ani_wall', 'images/animate_wall.png', {
             frameWidth: 32, 
             frameHeight: 32,
              endFrame: 8
             });
        this.load.on('complete',()=>{
            this.scene.start('play');
        })
    }

    create(){
       
    }
    update(){
      
    }
}
