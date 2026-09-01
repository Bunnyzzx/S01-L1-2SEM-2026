use std::io;

fn validar_placa(placa: &str) -> bool {
    let letras = placa.chars().filter(|c| c.is_ascii_uppercase()).count();
    let numeros = placa.chars().filter(|c| c.is_numeric()).count();

    placa.len() >= 7 && letras >= 4 && numeros >= 2
}

fn main() {
    loop {
        println!("digite a placa:");

        let mut placa = String::new();
        io::stdin().read_line(&mut placa).unwrap();

        let placa = placa.trim();

        if validar_placa(placa) {
            println!("placa cadastrada no sistema!");
            break;
        } else {
            println!("placa invalida. tente novamente.");
        }
    }
}