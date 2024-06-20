import { Actor, CollisionType, Color, Engine, Vector } from "excalibur"

export class Npc extends Actor {
    constructor(posicao: Vector, nome: string) {
        super({
            pos: posicao,
            width: 32,
            height: 32,
            name: nome,
            collisionType: CollisionType.Fixed
        })
    }

    onInitialize(engine: Engine<any>): void {
        
    }
}