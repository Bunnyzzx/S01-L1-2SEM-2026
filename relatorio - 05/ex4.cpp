#include <iostream>
using namespace std;

int main() {
    int matriz[5][5] = {};
    int opcao = 0;
    int linha, coluna;

    while (opcao != 3) {
        cout << "\n1 - ativar celula";
        cout << "\n2 - ver matriz";
        cout << "\n3 - sair";
        cout << "\nescolha uma opcao: ";
        cin >> opcao;

        if (opcao == 1) {
            cout << "digite a linha: ";
            cin >> linha;

            cout << "digite a coluna: ";
            cin >> coluna;

            if (matriz[linha][coluna] == 0) {
                matriz[linha][coluna] = 1;
                cout << "celula ativada com sucesso\n";
            } else {
                cout << "celula ja esta ativa\n";
            }
        }

        if (opcao == 2) {
            for (int i = 0; i < 5; i++) {
                for (int j = 0; j < 5; j++) {
                    cout << "[" << matriz[i][j] << "] ";
                }
                cout << endl;
            }
        }
    }

    int ativas = 0;

    for (int i = 0; i < 5; i++) {
        for (int j = 0; j < 5; j++) {
            if (matriz[i][j] == 1) {
                ativas++;
            }
        }
    }

    int inativas = 25 - ativas;
    float percentual = ativas * 100.0 / 25;

    cout << "\ncelulas ativas: " << ativas;
    cout << "\ncelulas inativas: " << inativas;
    cout << "\npercentual em operacao: " << percentual << "%";

    return 0;
}