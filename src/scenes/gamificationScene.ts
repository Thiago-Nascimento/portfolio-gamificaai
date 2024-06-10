import { Actor, Color, Engine, Keys, Scene, SceneActivationContext, vec } from "excalibur";
import { Resources } from "../resources";

export class gamificationScene extends Scene {
    elementoHTML?: HTMLElement

    // Método para esmaecer um elemento HTML
    fadeOutElement(elemento: HTMLElement) {
        // Pegar opacidade do elemento HTML
        let opacidade = parseFloat(elemento.style.opacity)

        // Repetir diminuição da opacidade
        setInterval(() => {
            // Se elemento ainda está visivel
            if (opacidade > 0) {
                // Diminuir a opacidade
                opacidade = opacidade - 0.1
    
                // Atualizar a opacidade do elemento
                elemento.style.opacity = opacidade.toString()
            }
        }, 20)        
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.fromHex("#403f4c")

        this.elementoHTML = document.createElement("div") as HTMLElement
        this.elementoHTML.style.opacity = "1"

        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoHTML)

        this.elementoHTML.innerHTML = `<h2>O que é gamificação?</h2>
            <p>Gamificação é a aplicação de elementos típicos de jogos em contextos não lúdicos, com o objetivo de engajar e motivar indivíduos a atingir determinados objetivos. Esta abordagem se utiliza de componentes como pontuação, níveis, recompensas, desafios, e feedback imediato, visando promover comportamentos desejados e aumentar a participação e o comprometimento dos participantes.</p>`

        this.elementoHTML.classList.add("gamificacao")    

        // Carregando imagem
        let spriteLogoGamificaAi = Resources.LogoVertical.toSprite()
        spriteLogoGamificaAi.scale = vec(0.7, 0.7)

        // Criação do Actor para a imagem
        let actorLogoGamificaAi = new Actor({
            pos: vec(300, engine.halfDrawHeight)
        })

        actorLogoGamificaAi.graphics.add(spriteLogoGamificaAi)

        this.add(actorLogoGamificaAi)

        // Configurar a cena para detectar a tecla Enter e ir para a próxima cena
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Enter) {
                this.fadeOutElement(this.elementoHTML!)
                engine.goToScene("exposicao")
            }
        })
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        this.elementoHTML?.remove()
    }
}
