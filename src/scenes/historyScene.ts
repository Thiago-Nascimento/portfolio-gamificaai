import { Color, Engine, FadeInOut, Scene, Transition } from "excalibur";

export class historyScene extends Scene {
    // Ao entrar ou sair da cena, utiliza o feito de transição lenta
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }
    
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Red
    }
}