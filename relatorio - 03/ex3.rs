use std::io;

fn imprimir_terminados_em(digito: i32, limite_inferior: i32, limite_superior: i32) {
    for numero in limite_inferior..=limite_superior {
        if numero % 10 == digito {
            println!("{}", numero);
        }
    }
}

fn main() {
    println!("digite o digito final:");

    let mut entrada = String::new();
    io::stdin().read_line(&mut entrada).unwrap();
    let digito: i32 = entrada.trim().parse().unwrap();

    println!("digite o limite inferior:");

    let mut entrada = String::new();
    io::stdin().read_line(&mut entrada).unwrap();
    let limite_inferior: i32 = entrada.trim().parse().unwrap();

    println!("digite o limite superior:");

    let mut entrada = String::new();
    io::stdin().read_line(&mut entrada).unwrap();
    let limite_superior: i32 = entrada.trim().parse().unwrap();

    imprimir_terminados_em(digito, limite_inferior, limite_superior);
}