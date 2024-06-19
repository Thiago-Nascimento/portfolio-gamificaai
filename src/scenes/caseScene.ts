import { Actor, Color, Engine, FadeInOut, Keys, Scene, SceneActivationContext, Sprite, Transition, vec } from "excalibur";
import { Resources } from "../resources";

export class caseScene extends Scene {
    private objetoInteracao: any
    private elementoTexto?: HTMLElement
    private actorEmpresa?: Actor

    private listaImagens?: Sprite[]
    
    onTransition(direction: "in" | "out"): Transition | undefined {
        return new FadeInOut({
            direction: direction,
            color: Color.Black,
            duration: 1000
        })
    }

    onInitialize(engine: Engine<any>): void {
        this.backgroundColor = Color.Gray

        // Criar elemento com a descrição do case
        this.elementoTexto = document.createElement("div") as HTMLElement
        this.elementoTexto.classList.add("texto-case")

        // Adicionar o elemento ao container game
        let containerGame = document.querySelector(".container-game")
        containerGame?.appendChild(this.elementoTexto)

        // Ao pressionar Esc voltar para a exposição
        this.input.keyboard.on("press", (event) => {
            if (event.key == Keys.Esc) {
                engine.goToScene("exposicao")
            }
        })

        // Criar actor para receber a imagem
        this.actorEmpresa = new Actor({
            pos: vec(engine.drawWidth - 300, engine.halfDrawHeight - 50)
        })

        // Carregar imagens das empresas
        let imagemEmpresaXYZ = Resources.LogoXYZ.toSprite()
        let imagemEmpresaABC = Resources.LogoABC.toSprite()
        let imagemEmpresaFastMart = Resources.LogoFastMart.toSprite()

        this.listaImagens = [imagemEmpresaXYZ, imagemEmpresaABC, imagemEmpresaFastMart]        
    }

    onActivate(context: SceneActivationContext<unknown>): void {
        // Faz a caixa de texto aparecer ao chegar na cena
        this.elementoTexto!.style.opacity = "1"
        
        // Receber os dados passados pela cena anterior
        this.objetoInteracao = context.data

        if (this.objetoInteracao.nomeDaMesa == "mesa_stand_a") {
            // Mesa A detectada
            this.elementoTexto!.innerHTML = `<h2>XYZ Tech - Transformação Digital e Capacitação na Tecnologia</h2>
            <p>A empresa enfrentava dificuldades na adoção de novas tecnologias pelos funcionários, resultando em baixa eficiência e resistência às mudanças.</p>
            <p>A XYZ Tech Solutions implementou uma plataforma de treinamento gamificada, onde os funcionários ganhavam pontos e badges ao completar módulos de treinamento sobre novas tecnologias. Eles podiam ver seu progresso em um leaderboard, incentivando uma competição saudável.</p>            
            `

            // Inserir o sprite no actor da mesa A
            this.actorEmpresa?.graphics.add(this.listaImagens![0])

            // Mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)
        }

        if (this.objetoInteracao.nomeDaMesa == "mesa_stand_b") {
            // Mesa B detectada
            this.elementoTexto!.innerHTML = `<h2>ABC Finance - Incentivo à Cultura de Inovação</h2>
            <p>A empresa queria incentivar os funcionários a proporem ideias inovadoras para melhorar processos e produtos, mas havia pouca participação.
            <p>ABC Finance criou um programa chamado "InovaABC" onde os funcionários podiam submeter ideias e ganhar pontos. As ideias eram votadas pelos colegas e avaliadas por um comitê. Os funcionários com as melhores ideias ganhavam prêmios e reconhecimento trimestral.
            `

            // Inserir o sprite no actor da mesa A
            this.actorEmpresa?.graphics.add(this.listaImagens![1])

            // Mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)
        }

        if (this.objetoInteracao.nomeDaMesa == "mesa_stand_c") {
            // Mesa C detectada
            this.elementoTexto!.innerHTML = `<h2>FastMart - Melhoria na Experiência do Cliente</h2>
            <p>A empresa de varejo enfrentava problemas com o atendimento ao cliente, resultando em baixa satisfação e retenção de clientes.
            <p>FastMart lançou uma aplicação interna onde os atendentes ganhavam pontos ao fornecer um excelente atendimento ao cliente, baseado em avaliações dos próprios clientes e supervisores. Os melhores atendentes eram destacados no mural da empresa e recebiam recompensas.
            `

            // Inserir o sprite no actor da mesa A
            this.actorEmpresa?.graphics.add(this.listaImagens![2])

            // Mudar o zoom da imagem
            this.actorEmpresa!.graphics.current!.scale = vec(0.2, 0.2)
        }

        // Adiciona o actor da imagem na tela
        this.add(this.actorEmpresa!)
        
    }

    onDeactivate(context: SceneActivationContext<undefined>): void {
        // Faz a caixa de texto desaparecer ao mudar de cena
        this.elementoTexto!.style.opacity = "0"
    }
}