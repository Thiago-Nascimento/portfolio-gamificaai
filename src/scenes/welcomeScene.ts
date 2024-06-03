import { Color, Engine, Font, Label, Scene, TextAlign, vec } from "excalibur";

export class welcomeScene extends Scene {

    onInitialize(engine: Engine<any>): void {
        // this = Essa classe, ou seja, essa Cena
        this.backgroundColor = Color.Gray

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
                textAlign: TextAlign.Center
            })
        })

        // Adiciona a frase na cena, tela
        this.add(fraseBemVindo)
    }

}