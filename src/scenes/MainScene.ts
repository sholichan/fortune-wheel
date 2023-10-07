
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
        this.slices = 8
        this.sliceName = ['1','2', '3', '4', '5', '6', '7', '8']
        this.cameras.main.setBackgroundColor('blue')

        this.background = this.add.image(cam.width / 2 - 50, cam.height / 2, 'background')
            .setScale(1.1, 1)
        this.wheel = this.add.image(cam.width / 2, cam.height / 2.3, 'wheel8')
        this.pointer = this.add.image(cam.width / 2, cam.height / 2.3 - 20, 'pointer')
        this.buttonSpin = this.add.image(cam.width / 2, cam.height / 1.5 - 20, 'buttonspin')
        this.graphic = this.add.graphics()
        this.graphic.setInteractive({
            useHandCursor: true,
            hitArea: new Phaser.Geom.Rectangle(cam.width / 2-300, cam.height / 1.5 - 110, 600, 165),
            hitAreaCallback: Phaser.Geom.Rectangle.Contains,
        })
        this.graphic.on('pointerdown',this.spin,this)

    }

    spin() {
        const cam = this.cameras.main

        if (this.canSpin) {
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
                      this.scene.start(openScene)

                }
            })
            console.log(`Question${this.sliceName[this.prize]}`);
            console.log(openScene);

        }

    }
}