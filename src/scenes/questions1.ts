import { log } from "console"
import { GameObjects } from "phaser"


export default class Questions1 extends Phaser.Scene {
    background!: Phaser.GameObjects.Image
    buttonHome!: Phaser.GameObjects.Image
    buttonSpinAgain!: Phaser.GameObjects.Image
    buttonRed!: Phaser.GameObjects.Image
    buttonWhite!: Phaser.GameObjects.Image
    buttonCheck!: Phaser.GameObjects.Image
    questionText!: Phaser.GameObjects.Text
    answerText!: Phaser.GameObjects.Text
    answerCheck!: Phaser.GameObjects.Text
    answerRed!: Phaser.GameObjects.Text
    answerWhite!: Phaser.GameObjects.Text
    graphic1!: Phaser.GameObjects.Graphics
    graphic2!: Phaser.GameObjects.Graphics
    graphic3!: Phaser.GameObjects.Graphics
    graphic4!: Phaser.GameObjects.Graphics
    graphic5!: Phaser.GameObjects.Graphics
    graphic6!: Phaser.GameObjects.Graphics
    answer!: boolean
    answerDesc!: boolean

    constructor() {
        super({ key: 'Question1' })
    }

    create() {
        const cam = this.cameras.main
        this.answer = false
        this.answerDesc = false
        this.background = this.add.image(cam.width / 2 - 80, cam.height / 2, 'background')
            .setScale(1.6, 1.5)

        //buttons
        this.buttonRed = this.add.image(cam.width / 4 + 60, cam.height / 2.5, 'buttonred')
            .setOrigin(0.5, 0.5)
            .setScale(1.4)
        this.buttonWhite = this.add.image(cam.width / 1.35 - 50, cam.height / 2.5, 'buttonred')
            .setOrigin(0.5, 0.5)
            .setScale(1.4)
        this.buttonCheck = this.add.image(cam.width / 2, cam.height / 2, 'buttonwhite')
            .setOrigin(0.5, 0.5)
        this.buttonHome = this.add.image(cam.width / 4, cam.height / 1.3, 'buttonhome')
            .setOrigin(0.5, 0.5)
        this.buttonSpinAgain = this.add.image(cam.width / 1.35, cam.height / 1.3, 'buttonspinagain').setOrigin(0.5, 0.5)

        //Question
        this.time.delayedCall(100, () => {

            this.questionText = this.add.text(cam.width / 2, cam.height / 4,
                "(...)  formulasi unik gabungan Zat Besi (Iron) dan\n\
            Vitamin C yang dapat bantu meningkatkan\n\
            penyerapan zat besi 2X Lipat.", {
                font: "bold 140px BebasNeue",
                align: "center",
                color: "black",
            }).setOrigin(0.5, 0.5)
        })

        //Answer
        this.time.delayedCall(100, () => {

            this.answerRed = this.add.text(cam.width / 4 + 60, cam.height / 2.5, 'IRONC',
                {
                    fontFamily: "BebasNeue",
                    fontSize: "120px",
                    align: "center",
                    color: "white",
                })
                .setOrigin(0.5)
        })

        this.time.delayedCall(100, () => {

            this.answerWhite = this.add.text(cam.width / 1.35 - 50, cam.height / 2.5, 'HIGH FIBRE',
                {
                    fontFamily: "BebasNeue",
                    fontSize: "120px",
                    fontStyle: "bold",
                    align: "center",
                    color: "white",
                })
                .setOrigin(0.5)
        })

        this.time.delayedCall(100, () => {

            this.answerCheck = this.add.text(cam.width / 2, cam.height / 2, 'CEK DISINI!',
                {
                    fontFamily: "BebasNeue",
                    fontSize: "100px",
                    fontStyle: "bold",
                    align: "center",
                    color: "black",
                })
                .setOrigin(0.5)
        })

        this.graphic6 = this.add.graphics()
        this.graphic6.fillStyle(0xcccccc, 1)
        this.graphic6.fillRect(300, cam.height / 2 + 200, 2300, 700)
        this.answerText = this.add.text(cam.width / 2, cam.height / 1.6,
            '',
            {
                fontFamily: "BebasNeue",
                fontSize: "110px",
                fontStyle: "bold",
                align: "center",
                color: "black",
            })
            .setOrigin(0.5, 1)


        //button
        this.graphic1 = this.add.graphics()
        this.graphic2 = this.add.graphics()
        this.graphic3 = this.add.graphics()
        this.graphic4 = this.add.graphics()
        this.graphic5 = this.add.graphics()

        // this.graphic1.lineStyle(8, 0xFF0000, 1)
        // this.graphic2.lineStyle(8, 0xFF0000, 1)
        // this.graphic3.lineStyle(8, 0xFF0000, 1)
        // this.graphic4.lineStyle(8, 0xFF0000, 1)
        // this.graphic5.lineStyle(8, 0xFF0000, 1)


        // this.graphic1.strokeRect(cam.width / 4 - 450, cam.height / 2.5 - 138, 1020, 276)
        // this.graphic2.strokeRect(cam.width / 1.35 - 560, cam.height / 2.5 - 138, 1020, 276)
        // this.graphic3.strokeRect(cam.width / 2 - 380, cam.height / 2 - 100, 750, 200)
        // this.graphic4.strokeCircle(cam.width / 4, cam.height / 1.3, 234)
        // this.graphic5.strokeCircle(cam.width / 1.35, cam.height / 1.3, 234)


        this.graphic1.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Rectangle(cam.width / 4 - 450, cam.height / 2.5 - 138, 1020, 276),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            }
        )
        this.graphic2.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Rectangle(cam.width / 1.35 - 560, cam.height / 2.5 - 138, 1020, 276),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            }
        )
        this.graphic3.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Rectangle(cam.width / 2 - 380, cam.height / 2 - 100, 750, 200),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            }
        )
        this.graphic4.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Circle(cam.width / 4, cam.height / 1.3, 234),
                hitAreaCallback: Phaser.Geom.Circle.Contains,
            }
        )
        this.graphic5.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Circle(cam.width / 1.35, cam.height / 1.3, 234),
                hitAreaCallback: Phaser.Geom.Circle.Contains,
            }
        )


        this.graphic1.on('pointerdown', () => {
            this.buttonWhite.setAlpha(0.5)
            this.answer = true
        })
        this.graphic2.on('pointerdown', () => {
            this.buttonRed.setAlpha(0.5)
            this.answer = true
            console.log(this.answer);

        })
        this.graphic3.on('pointerdown', () => {
            if (this.answer == true) {
                this.answerText.setText(
                    'IronC yaitu molar rasio Zat Besi : Vitamin C (2:1)\n\dapat bantu meningkatkan penyerapan\n\zat besi 2X Lipat.'
                )
            }
            console.log(this.answerDesc);
            console.log(this.answerText);

        })
        this.graphic4.on('pointerdown', () => {
            if (this.answer == true) {

                this.scene.start('MainScene')
            }

        })
        this.graphic5.on('pointerdown', () => {
            if (this.answer == true) {

                this.scene.start('MainScene')
            }
        })


    }

    update() {

    }

}