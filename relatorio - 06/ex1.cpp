#include <iostream>
#include <string>

using namespace std;

class banda {
public:
    string nome;
    int integrantes;
    float potencia_som;
    int energia;

    void duelar(banda &rival) {
        cout << nome << " esta duelando contra " << rival.nome << endl;
        rival.energia -= potencia_som;
    }
};

int main() {
    banda b1;
    banda b2;

    b1.nome = "abyss";
    b1.integrantes = 5;
    b1.potencia_som = 20;
    b1.energia = 100;

    b2.nome = "nightghost";
    b2.integrantes = 4;
    b2.potencia_som = 15;
    b2.energia = 100;

    b1.duelar(b2);

    cout << b1.nome << ": " << b1.energia << endl;
    cout << b2.nome << ": " << b2.energia << endl;

    return 0;
}