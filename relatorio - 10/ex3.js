class FichaDeCriatura {
    constructor(criatura, nivelDePerigo) {
        this.criatura = criatura;
        this.nivelDePerigo = nivelDePerigo;
    }

    descrever() {
        return `${this.criatura}: perigo ${this.nivelDePerigo}`;
    }
}

class DiarioMisterioso {
    #fichas = [];

    constructor(numero) {
        this.numero = numero;
    }

    anotar(criatura, nivelDePerigo) {
        this.#fichas.push(new FichaDeCriatura(criatura, nivelDePerigo));
    }

    exibirFichas() {
        console.log(`diario: ${this.numero}`);
        this.#fichas.forEach(ficha => console.log(ficha.descrever()));
    }
}

class Funcionario {
    constructor(nome, cargo) {
        this.nome = nome;
        this.cargo = cargo;
    }
}

class CabanaDoMisterio {
    #funcionarios = [];

    constructor(dono) {
        this.dono = dono;
    }

    contratar(funcionario) {
        this.#funcionarios.push(funcionario);
    }

    abrirAsPortas() {
        console.log(`dono: ${this.dono}`);
        this.#funcionarios.forEach(funcionario => {
            console.log(`${funcionario.nome}: ${funcionario.cargo}`);
        });
    }
}

const diario = new DiarioMisterioso(3);

diario.anotar("gnomo", 2);
diario.anotar("zumbi", 5);
diario.exibirFichas();

const soos = new Funcionario("soos", "zelador");
const wendy = new Funcionario("wendy", "atendente");

const cabana = new CabanaDoMisterio("stan");

cabana.contratar(soos);
cabana.contratar(wendy);
cabana.abrirAsPortas();