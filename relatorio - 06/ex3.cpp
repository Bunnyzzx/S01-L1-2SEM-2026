#include <iostream>
#include <string>

using namespace std;

class membroinatel {
public:
    string nome;

    void seapresentar() {
        cout << "sou um membro da comunidade inatel: " << nome << endl;
    }
};

class aluno : public membroinatel {
public:
    string curso;

    void seapresentar() {
        cout << "meu nome e " << nome << " e estudo no curso de " << curso << endl;
    }
};

class professor : public membroinatel {
public:
    string disciplina;

    void seapresentar() {
        cout << "meu nome e " << nome << " e leciono a disciplina de " << disciplina << endl;
    }
};

int main() {
    aluno a;
    professor p;

    a.nome = "caio";
    a.curso = "engenharia de software";

    p.nome = "pedro";
    p.disciplina = "paradigmas";

    a.seapresentar();
    p.seapresentar();

    return 0;
}