import { Color, Engine, Scene } from "excalibur";

export class gamificationScene extends Scene {
    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Chartreuse
    }
}