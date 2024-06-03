import { Engine } from "excalibur";
import { welcomeScene } from "./scenes/welcomeScene";

const game = new Engine({
  width: 1200,
  height: 800,
  canvasElementId: "jogo"
})

game.addScene("bemvindo", new welcomeScene())

game.start().then(() => {
  game.goToScene("bemvindo")
})