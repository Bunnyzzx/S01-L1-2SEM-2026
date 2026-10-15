class Persona:
    def __init__(self, nome, arcano):
        self.nome = nome
        self.arcano = arcano

    def invocar(self):
        print(f"persona: {self.nome} | arcano: {self.arcano}")


class Aliado:
    def __init__(self, nome, codinome):
        self.nome = nome
        self.codinome = codinome


class Lider:
    def __init__(self, codinome):
        self.codinome = codinome
        self.persona = Persona("arsene", "louco")
        self._equipe = []

    def recrutar(self, aliado: Aliado):
        self._equipe.append(aliado)

    def infiltrar(self, palacio):
        print(f"{self.codinome} invadiu o palacio de {palacio}")
        self.persona.invocar()

        for aliado in self._equipe:
            print(f"aliado: {aliado.nome} | codinome: {aliado.codinome}")


aliado1 = Aliado("ryuji", "skull")
aliado2 = Aliado("ann", "panther")

lider = Lider("joker")
lider.recrutar(aliado1)
lider.recrutar(aliado2)
lider.infiltrar("kamoshida")