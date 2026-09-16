#include <iostream>
using namespace std;

float calcular_confiabilidade_sistema(float probabilidades[], int tamanho) {
    float total = 1;

    for (int i = 0; i < tamanho; i++) {
        total *= probabilidades[i];
    }

    return total;
}

int main() {
    int n;
    float probabilidades[100];

    cout << "digite a quantidade de componentes: ";
    cin >> n;

    for (int i = 0; i < n; i++) {
        cout << "digite a probabilidade do componente " << i + 1 << ": ";
        cin >> probabilidades[i];
    }

    float total = calcular_confiabilidade_sistema(probabilidades, n);

    cout << "confiabilidade total: " << total;

    return 0;
}