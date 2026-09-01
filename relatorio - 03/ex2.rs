use std::io;

fn acertou_o_alvo(palpite: i32, numero_secreto: i32) -> bool {
    (palpite - numero_secreto).abs() <= 5
}

fn main() {
    let numero_secreto = 13;

    loop {
        println!("digite seu palpite:");

        let mut entrada = String::new();
        io::stdin().read_line(&mut entrada).unwrap();

        let palpite: i32 = entrada.trim().parse().unwrap();

        if acertou_o_alvo(palpite, numero_secreto) {
            let distancia = (palpite - numero_secreto).abs();

            println!("voce acertou!");
            println!("ficou a apenas {} unidades do numero secreto!", distancia);
            break;
        } else {
            println!("voce passou longe! tente novamente.");
        }
    }
}