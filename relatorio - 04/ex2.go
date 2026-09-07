package main

import "fmt"

func main() {
	var venda1, venda2, venda3 int

	fmt.Print("Digite as vendas do 1º trimestre: ")
	fmt.Scan(&venda1)

	fmt.Print("Digite as vendas do 2º trimestre: ")
	fmt.Scan(&venda2)

	fmt.Print("Digite as vendas do 3º trimestre: ")
	fmt.Scan(&venda3)

	total := venda1 + venda2 + venda3

	fmt.Println("Total de vendas:", total, "unidades")

	if total < 100 {
		fmt.Println("Meta mínima anual não atingida!")
	} else {
		switch {
		case total >= 250:
			fmt.Println("Classificação: Categoria Top Seller")
		case total >= 180:
			fmt.Println("Classificação: Categoria Sênior")
		case total >= 100:
			fmt.Println("Classificação: Categoria Pleno")
		}
	}
}