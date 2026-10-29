class Pistola {
    constructor(modelo) {
        this.modelo = modelo;
    }
}

class AgenteProtocolo {
    #pistola;

    constructor(codinome, modeloDaPistola) {
        this.codinome = codinome;
        this.#pistola = new Pistola(modeloDaPistola);
    }

    usarHabilidade() {
        throw new Error("a habilidade precisa ser implementada");
    }

    entrarEmCombate() {
        console.log(
            `${this.codinome}: ${this.#pistola.modelo}, ${this.usarHabilidade()}`
        );
    }
}

class Controlador extends AgenteProtocolo {
    usarHabilidade() {
        return "lancou uma fumaca";
    }
}

class Iniciador extends AgenteProtocolo {
    usarHabilidade() {
        return "revelou os inimigos";
    }
}

class Duelista extends AgenteProtocolo {
    usarHabilidade() {
        return "avancou contra os inimigos";
    }
}

class Esquadrao {
    #agentes;

    constructor(nome, agentes) {
        this.nome = nome;
        this.#agentes = agentes;
    }

    iniciarPartida() {
        console.log(`esquadrao: ${this.nome}`);
        this.#agentes.forEach(agente => agente.entrarEmCombate());
    }

    listarControladores() {
        return this.#agentes.filter(agente => agente instanceof Controlador);
    }
}

const omen = new Controlador("omen", "ghost");
const brimstone = new Controlador("brimstone", "classic");
const sova = new Iniciador("sova", "sheriff");
const jett = new Duelista("jett", "frenzy");

const esquadrao = new Esquadrao("time alfa", [omen, brimstone, sova, jett]);

esquadrao.iniciarPartida();

esquadrao.listarControladores().forEach(agente => {
    console.log(agente.codinome);
});

const agente = new AgenteProtocolo("teste", "classic");