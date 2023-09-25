import { GameObjects } from "phaser"

export default class Questions8 extends Phaser.Scene {
    background!: Phaser.GameObjects.Image
    questionForm!: Phaser.GameObjects.Image
    text!: Phaser.GameObjects.Text
    answer!: Phaser.GameObjects.Text
    graphic1!: Phaser.GameObjects.Graphics
    graphic2!: Phaser.GameObjects.Graphics
    graphic3!: Phaser.GameObjects.Graphics
    graphic4!: Phaser.GameObjects.Graphics

    constructor() {
        super({ key: 'Question8' })
    }

    create() {
        const cam = this.cameras.main
        this.background = this.add.image(cam.width / 2 - 50, cam.height / 2, 'background')
            .setScale(1.1, 1)

        //Question
        this.text = this.add.text(cam.width / 2, cam.height / 3, "Question8", {
            font: "bold 150px Arial",
            align: "center",
            color: "red",
        }).setOrigin(0.5, 0.5)

        //Answer
        var intervalPosText = [300, 600, 900, 1200]
        var answers = ["A. Answer", "B. Answer", "C. Answer", "D. Answer"]
        var textConfig = {
            font: "bold 100px Arial",
            align: "center",
            color: "red",
        }
        intervalPosText.map((i, j = 0) => {
            this.answer = this.add.text(cam.width / 4, cam.height / 3 + i, answers[j], textConfig);
        })

        //graphic
        var intervalPosGraph = [200, 500, 800, 1100]
        this.graphic1 = this.add.graphics()
        this.graphic2 = this.add.graphics()
        this.graphic3 = this.add.graphics()
        this.graphic4 = this.add.graphics()

        this.graphic1.lineStyle(8, 0xFF0000, 1)
        this.graphic2.lineStyle(8, 0xFF0000, 1)
        this.graphic3.lineStyle(8, 0xFF0000, 1)
        this.graphic4.lineStyle(8, 0xFF0000, 1)

        this.graphic1.strokeRect(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[0], 1600, 300)
        this.graphic2.strokeRect(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[1], 1600, 300)
        this.graphic3.strokeRect(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[2], 1600, 300)
        this.graphic4.strokeRect(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[3], 1600, 300)

        this.graphic1.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Rectangle(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[0], 1600, 300),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            }
        )
        this.graphic2.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Rectangle(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[1], 1600, 300),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            }
        )
        this.graphic3.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Rectangle(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[2], 1600, 300),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            }
        )
        this.graphic4.setInteractive(
            {
                useHandCursor: true,
                hitArea: new Phaser.Geom.Rectangle(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[3], 1600, 300),
                hitAreaCallback: Phaser.Geom.Rectangle.Contains,
            }
        )


        this.graphic1.on('pointerdown', () => {
            this.graphic1.fillStyle(0xFFC0CB, 1) 
            this.graphic1.fillRect(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[0], 1600, 300)
            intervalPosText.map((i, j = 0) => {
                this.answer = this.add.text(cam.width / 4, cam.height / 3 + i, answers[j], textConfig);
            })
            this.time.delayedCall(1000,()=>{this.scene.start('MainScene')})
            
        })
        this.graphic2.on('pointerdown', () => {
            this.graphic2.fillStyle(0xFFC0CB, 1) 
            this.graphic2.fillRect(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[1], 1600, 300)
            intervalPosText.map((i, j = 0) => {
                this.answer = this.add.text(cam.width / 4, cam.height / 3 + i, answers[j], textConfig);
            })
            this.time.delayedCall(1000,()=>{this.scene.start('MainScene')})
        })
        this.graphic3.on('pointerdown', () => {
            this.graphic3.fillStyle(0xFFC0CB, 1) 
            this.graphic3.fillRect(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[2], 1600, 300)
            intervalPosText.map((i, j = 0) => {
                this.answer = this.add.text(cam.width / 4, cam.height / 3 + i, answers[j], textConfig);
            })
            this.time.delayedCall(1000,()=>{this.scene.start('MainScene')})
        })
        this.graphic4.on('pointerdown', () => {
            this.graphic4.fillStyle(0xFFC0CB, 1) 
            this.graphic4.fillRect(cam.width / 4 - 80, cam.height / 3 + intervalPosGraph[3], 1600, 300)
            intervalPosText.map((i, j = 0) => {
                this.answer = this.add.text(cam.width / 4, cam.height / 3 + i, answers[j], textConfig);
            })
            this.time.delayedCall(1000,()=>{this.scene.start('MainScene')})
        })


    }

    update() {
        var intervalPosGraph = [200, 500, 800, 1100]
        const cam = this.cameras.main

    }

}