const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene:  [Boot,Play]
};

const game = new Phaser.Game(config);