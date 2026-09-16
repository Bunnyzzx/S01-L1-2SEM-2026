#include <iostream>
using namespace std;

int main() {
    float capacidade, carga = 0, peso;
    int opcao = 0;

    cout << "digite a capacidade maxima do drone: ";
    cin >> capacidade;

    while (opcao != 4) {
        cout << "\n1 - verificar carga";
        cout << "\n2 - carregar pacote";
        cout << "\n3 - descarregar pacote";
        cout << "\n4 - sair";
        cout << "\nescolha uma opcao: ";
        cin >> opcao;

        if (opcao == 1) {
            cout << "carga atual: " << carga << " kg\n";
            cout << "espaco disponivel: " << capacidade - carga << " kg\n";
        }

        if (opcao == 2) {
            cout << "digite o peso do pacote: ";
            cin >> peso;

            if (carga + peso <= capacidade) {
                carga += peso;
                cout << "pacote adicionado com sucesso\n";
            } else {
                cout << "alerta: peso maximo de decolagem excedido\n";
            }
        }

        if (opcao == 3) {
            cout << "digite o peso para descarregar: ";
            cin >> peso;

            if (peso <= carga) {
                carga -= peso;
                cout << "pacote descarregado com sucesso\n";
            } else {
                cout << "peso maior que a carga atual\n";
            }
        }
    }

    cout << "encerrando programa";

    return 0;
}