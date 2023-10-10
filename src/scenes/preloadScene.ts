
export default class PreloadScene extends Phaser.Scene {
    loadingBar!: Phaser.GameObjects.Graphics
    progressBar!: Phaser.GameObjects.Graphics
    constructor() {
        super({ key: 'PreloadScene' })
    }

    preload() {
        this.cameras.main.setBackgroundColor(0xdcf3ff)
        this.createLoadingBar()

        this.load.on("progress",
            (value: number) => {
                console.log(value);
                this.progressBar.clear();
                this.progressBar.fillStyle(0xff0000, 1);
                this.progressBar.fillRect(
                    this.cameras.main.width / 4 - 2,
                    this.cameras.main.height / 2 - 18,
                    (this.cameras.main.width / 2) * value,
                    40
                );
            });

        this.load.on("fileprogress",
            (file: any) => {

                // console.log(file.src);

            })

        this.load.on("complete",
            () => {
                this.progressBar.destroy();
                this.loadingBar.destroy();
                console.log('complete');

            });
        this.add.text(this.cameras.main.width / 3.8, this.cameras.main.height / 2.5, `Loading...`,
            { color: '#257ca3', fontSize: '24px', fontStyle: 'bold' });
        this.load.image('background', 'assets/img/Background.png')
        this.load.image('wheel', 'assets/img/Wheel.png')
        this.load.image('wheel8', 'assets/img/spin8.png')
        this.load.image('pointer', 'assets/img/Pin.png')
        this.load.image('buttonspin', 'assets/img/Button.png')
        this.load.image('buttonhome', 'assets/img/Home-button.png')
        this.load.image('buttonspinagain', 'assets/img/Spin-again.png')
        this.load.image('buttonred', 'assets/img/Button-merah.png')
        this.load.image('buttonwhite', 'assets/img/button-putih.png')

    }

    create() {
        //   this.scene.start('Question1')
        this.scene.start('MainScene')

        /**
         * This is how you would dynamically import the mainScene class (with code splitting),
         * add the mainScene to the Scene Manager
         * and start the scene.
         * The name of the chunk would be 'mainScene.chunk.js
         * Find more about code splitting here: https://webpack.js.org/guides/code-splitting/
         */
        // let someCondition = true
        // if (someCondition)
        //   import(/* webpackChunkName: "mainScene" */ './mainScene').then(mainScene => {
        //     this.scene.add('MainScene', mainScene.default, true)
        //   })
        // else console.log('The mainScene class will not even be loaded by the browser')
    }
    private createLoadingBar() {
        this.loadingBar = this.add.graphics()
        this.loadingBar.fillStyle(0x257ca3, 1);
        this.loadingBar.fillRect(
            this.cameras.main.width / 4 - 2,
            this.cameras.main.height / 2 - 18,
            this.cameras.main.width / 2 + 4,
            40
        );
        this.progressBar = this.add.graphics();
    }
}
