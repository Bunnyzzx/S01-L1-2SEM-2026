use std::io;

fn calcular_pontuacao(prova1: f64, prova2: f64, redacao: f64) -> f64 {
    let npt = (prova1 + prova2) / 2.0;
    let pf = npt * 0.6 + redacao * 0.4;

    if pf >= 60.0 {
        println!("candidato aprovado no processo seletivo.");
    } else {
        println!("candidato nao atingiu a pontuacao minima.");
    }

    pf
}

fn main() {
    println!("digite a nota da prova 1:");

    let mut entrada = String::new();
    io::stdin().read_line(&mut entrada).unwrap();
    let prova1: f64 = entrada.trim().parse().unwrap();

    println!("digite a nota da prova 2:");

    let mut entrada = String::new();
    io::stdin().read_line(&mut entrada).unwrap();
    let prova2: f64 = entrada.trim().parse().unwrap();

    println!("digite a nota da redacao:");

    let mut entrada = String::new();
    io::stdin().read_line(&mut entrada).unwrap();
    let redacao: f64 = entrada.trim().parse().unwrap();

    let resultado = calcular_pontuacao(prova1, prova2, redacao);

    println!("pontuacao final: {:.2}", resultado);
}