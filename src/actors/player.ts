import { Actor, CollisionType, Color, Engine, Keys, vec } from "excalibur";

export class Player extends Actor {
    // Propriedades do player
    private velocidade: number = 180
    
    
    // Configuração do Player
    constructor() {
        super({
            pos: vec(600, 520),
            width: 32,
            height: 32,
            name: "Jogador",
            color: Color.Red,
            collisionType: CollisionType.Active
        })
    }

    onInitialize(engine: Engine<any>): void {
        // Configurar player para monitorar evento "hold" -> segurar tecla
        engine.input.keyboard.on("hold", (event) => {
            // Detectar qual tecla está pressionada
            switch (event.key) {
                case Keys.Left:
                case Keys.A:
                    // Mover para esquerda
                    // Define a velocidade x para negativa, que significa movimentar o player para a esquerda
                    this.vel.x = -this.velocidade
                    break;

                case Keys.Right:
                case Keys.D:
                    // Mover para direita
                    // Define a velocidade x para positiva, que significa movimentar o player para a direita
                    this.vel.x = this.velocidade
                    break;

                case Keys.Up:
                case Keys.W:
                    // Mover para cima
                    // Define a velocidade y para negativa, que significa movimentar o player para cima
                    this.vel.y = -this.velocidade
                    break;

                case Keys.Down:
                case Keys.S:
                    // Mover para baixo
                    // Define a velocidade y para positiva, que significa movimentar o player para baixo
                    this.vel.y = this.velocidade
                    break;

                default:
                    // Zera a velocidade do Player, PARA a movimentação
                    this.vel.x = 0
                    this.vel.y = 0

                    break;
            }
        })

        // Configura o player para monitorar evento "release" -> soltar
        engine.input.keyboard.on("release", (event) => {
            // Fazer o player parar ao soltar as teclas de movimentação
            // Parar movimentação lateral ao soltar as teclas de movimentação lateral
            if (
                event.key == Keys.A ||
                event.key == Keys.Left ||
                event.key == Keys.D ||
                event.key == Keys.Right
            ) {
                // Zerar velocidade horizontal
                this.vel.x = 0
            }

            // Parar movimentação vertical ao soltar as teclas de movimentação vertical
            if (
                event.key == Keys.W ||
                event.key == Keys.Up ||
                event.key == Keys.S ||
                event.key == Keys.Down
            ) {
                // Zerar velocidade vertical
                this.vel.y = 0
            }
        })
    }

    

}