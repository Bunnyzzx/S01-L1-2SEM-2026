class UsuarioDeNen {
    constructor(nome) {
        this.nome = nome;
    }

    atacar(alvo) {
        console.log(`${this.nome} usou aura contra ${alvo.nome}`);
    }
}

class Intensificador extends UsuarioDeNen {
    atacar(alvo) {
        console.log(`${this.nome} usou um soco reforcado contra ${alvo.nome}`);
    }
}

class Transmutador extends UsuarioDeNen {
    atacar(alvo) {
        console.log(`${this.nome} usou eletricidade contra ${alvo.nome}`);
    }
}

class Materializador extends UsuarioDeNen {
    atacar(alvo) {
        console.log(`${this.nome} usou correntes contra ${alvo.nome}`);
    }
}

class Aranha {
    constructor(nome, numero) {
        this.nome = nome;
        this.numero = numero;
    }
}

class TrupeFantasma {
    #aranhas;

    constructor(cidade, aranhas = []) {
        this.cidade = cidade;
        this.#aranhas = aranhas;
    }

    revelarAranhas() {
        console.log(`cidade: ${this.cidade}`);
        this.#aranhas.forEach(aranha => {
            console.log(`${aranha.numero}: ${aranha.nome}`);
        });
    }

    buscarAranha(numero) {
        return this.#aranhas.find(aranha => aranha.numero === numero);
    }
}

const nobunaga = new Aranha("nobunaga", 1);
const feitan = new Aranha("feitan", 2);

const trupe = new TrupeFantasma("yorkshin", [nobunaga, feitan]);

trupe.revelarAranhas();

const alvo = trupe.buscarAranha(1);

const hunters = [
    new Intensificador("gon"),
    new Transmutador("killua"),
    new Materializador("kurapika")
];

hunters.forEach(hunter => hunter.atacar(alvo));