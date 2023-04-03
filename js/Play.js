class Play extends Phaser.Scene{
    constructor(){
        super({
            key:'play'
        })
    }

    create(){
        this.add.text(100,100 ,'Let start with animation')
        //this.wall=this.add.image(200,220 ,'wall')
        //this.wall.setTint(0xdd3333)  //it is used to change the color of the border of the image
        this.ani_wall = this.add.sprite(200,200,'ani_wall') ;
        this.anims.create({
            key:'avatar-moving',
            frames:this.anims.generateFrameNumbers('ani_wall',{
                start: 0,
                end:8
                
            }),
            frameRate: 20,
            repeat: -1
        });
        this.ani_wall.play('avatar-moving');
    }

    upload(){

    }
}
/*
class Play extends Phaser.Scene{
    constructor(){
        super({
            key:'play'
        })
    }

    create(){
        this.add.text(100,100 ,'Let start with animation')
        //this.wall=this.add.image(200,220 ,'wall')
        //this.wall.setTint(0xdd3333)  //it is used to change the color of the border of the image
        this.ani_wall = this.add.sprite(200,200,'ani_wall') ;
        this.anims.create({
            key:'avatar-moving',
            frames:this.anims.generateFrameNumbers('ani_wall',{
                start: 0,
                end:2
                
            }),
            frameRate: 10,
            repeat: -1
        });
        this.ani_wall.play('avatar-moving');
    }

    upload(){

    }
}*/