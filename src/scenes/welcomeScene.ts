import { Actor, Color, Engine, FadeInOut, Font, Keys, Label, Scene, TextAlign, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class welcomeScene extends Scene {
    textoIniciar?: Label

    // Ao entrar ou sair da cena, utiliza o feito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        // this = Essa classe, ou seja, essa Cena
        this.backgroundColor = Color.Black

        // Configura o objeto para ser a frase de Bem-Vindo
        let fraseBemVindo = new Label({
            text: "Bem vindo ao Portfólio",
            width: 400,
            height: 50,
            // Posição X = metade da tela, Posição Y = 300
            pos: vec(engine.drawWidth / 2, 300), 
            font: new Font({
                color: Color.White,
                size: 40,
                textAlign: TextAlign.Center,
                family: "Anta"
            })
        })

        // Adiciona a frase na cena, tela
        this.add(fraseBemVindo)

        // Configurar Actor do Logo
        let actorLogo = new Actor({
            pos: vec(engine.drawWidth / 2, 430)
        })

        // Utilizar imagem do logo
        let imagemLogo = Resources.Logo.toSprite()

        // Aplicar zoom na imagem - 40% de x, e 40% de y
        imagemLogo.scale = vec(0.4, 0.4)

        // Configurar o actor para usar a imagem
        actorLogo.graphics.add(imagemLogo)

        // Adicionando Actor Logo na tela
        this.add(actorLogo)

        // EXERCICIO - Criação do textoIniciar - Pressione "Enter" para iniciar...
        this.textoIniciar = new Label({
            text: "Pressione \"Enter\" para iniciar...",
            height: 50,
            width: 200,
            pos: vec(engine.halfDrawWidth, 630),
            font: new Font({
                color: Color.White,
                family: "Anta",
                size: 20,
                textAlign: TextAlign.Center
            })
        })

        // Adicionar textoIniciar na tela
        this.add(this.textoIniciar)

        // Configurar para ficar piscando
        this.textoIniciar?.actions.repeatForever( context => {
            context.fade(0, 1000)
            context.fade(1, 1000)
        }) 

        // Monitora o evento de tecla pressionada
        this.input.keyboard.on("press", (event) => {
            // Caso a tecla pressionada for "Enter", deve ir para a próxima cena
            if (event.key == Keys.Enter) {
                // Direciona para a cena Historia
                engine.goToScene("historia")
            }
        })
    }

    onPreUpdate(engine: Engine<any>, delta: number): void {
        // this.textoIniciar?.actions.fade(0, 1000)
        // this.textoIniciar?.actions.fade(1, 1000)
    }

}