
export default class MainScene extends Phaser.Scene {
    background!: Phaser.GameObjects.Image
    wheel!: Phaser.GameObjects.Image
    pointer!: Phaser.GameObjects.Image
    buttonSpin!: Phaser.GameObjects.Image
    canSpin!: boolean
    slices!: number
    sliceName: any
    prize!: any
    prizeText: any
    click: any
    graphic!:Phaser.GameObjects.Graphics

    constructor() {
        super({ key: 'MainScene' })
    }

    create() {
        this.canSpin = true

        const cam = this.cameras.main
        this.slices = 10
        this.sliceName = ['2', '3', '4', '5', '6', '7', '8', '9', '10','1']
        this.cameras.main.setBackgroundColor('blue')

        this.background = this.add.image(cam.width / 2 - 50, cam.height / 2, 'background')
            .setScale(1.1, 1)
        this.wheel = this.add.image(cam.width / 2, cam.height / 2.3, 'wheel')
        this.pointer = this.add.image(cam.width / 2, cam.height / 2.3 - 20, 'pointer')
        this.buttonSpin = this.add.image(cam.width / 2, cam.height / 1.5 - 20, 'buttonspin')
        this.graphic = this.add.graphics()
        // this.graphic.lineStyle(8, 0xFF0000, 1)
        // this.graphic.strokeRect(cam.width / 2-300, cam.height / 1.5 - 110, 600, 165)
        this.graphic.setInteractive({
            useHandCursor: true,
            hitArea: new Phaser.Geom.Rectangle(cam.width / 2-300, cam.height / 1.5 - 110, 600, 165),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
        })
        this.graphic.on('pointerdown',this.spin,this)
        // this.prizeText = this.add.text(cam.width / 2, cam.width / 3, "Click to Spin", {
        //     font: "bold 200px Arial",
        //     align: "center",
        //     color: "black",
        // });
        // this.prizeText.setOrigin(0.5, 0.5)

        // this.input.on(, this.spin, this)

    }

    spin() {
        const cam = this.cameras.main

        if (this.canSpin) {
            // this.prizeText.setText("");
            var round = Phaser.Math.Between(4, 6)
            var multiDegrees = Phaser.Math.Between(0, 9)
            var degrees = 36*multiDegrees
            this.prize = this.slices - 1 - Math.floor(degrees / (360 / this.slices))
            this.canSpin = false
            var openScene = `Question${this.sliceName[this.prize]}`
            this.tweens.add({
                targets: [this.wheel],
                angle: 360 * round + degrees,
                duration: 3000,
                ease: 'Cubic.easeOut',
                callbackScope: this,
                onComplete: () => {
                    // this.prizeText.setText(this.sliceName[this.prize])
                    // .setColor(this.sliceName[this.prize])
                      this.scene.start(openScene)

                    // this.canSpin = true
                }
            })
            console.log(`Question${this.sliceName[this.prize]}`);
            console.log(openScene);

        }

    }
}