class Pokemon {
    #vida;

    constructor(apelido, tipo, vidaInicial) {
        this.apelido = apelido;
        this.tipo = tipo;
        this.#vida = vidaInicial;
    }

    get vida() {
        return this.#vida;
    }

    sofrerDano(pontos) {
        this.#vida = Math.max(0, this.#vida - pontos);
        console.log(`${this.apelido}: ${this.#vida} de vida`);
    }

    atacar(alvo) {
        console.log(`${this.apelido} usou ataque generico`);
        alvo.sofrerDano(10);
    }
}

class Squirtle extends Pokemon {
    constructor(apelido, vidaInicial) {
        super(apelido, "agua", vidaInicial);
    }

    atacar(alvo) {
        console.log(`${this.apelido} usou jato de agua`);
        alvo.sofrerDano(20);
    }
}

class Bulbasaur extends Pokemon {
    constructor(apelido, vidaInicial) {
        super(apelido, "planta", vidaInicial);
    }

    atacar(alvo) {
        console.log(`${this.apelido} usou chicote de cipo`);
        alvo.sofrerDano(15);
    }
}

const squirtle = new Squirtle("gota", 50);
const bulbasaur = new Bulbasaur("folha", 30);

bulbasaur.atacar(squirtle);
squirtle.atacar(bulbasaur);
squirtle.atacar(bulbasaur);

console.log(`vida do squirtle: ${squirtle.vida}`);
console.log(`vida do bulbasaur: ${bulbasaur.vida}`);