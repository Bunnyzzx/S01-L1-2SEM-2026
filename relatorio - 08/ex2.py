class HeroiOverwatch:
    def __init__(self, codinome, funcao, frase):
        self.codinome = codinome
        self.funcao = funcao
        self.frase = frase

    def usar_suprema(self):
        print(f"{self.codinome}: {self.frase}")


class HeroiTanque(HeroiOverwatch):
    def usar_suprema(self):
        print(f"{self.codinome} ativou a suprema de tanque!")
        print(self.frase)


class HeroiSuporte(HeroiOverwatch):
    def usar_suprema(self):
        print(f"{self.codinome} ativou a suprema de suporte!")
        print(self.frase)

    def curar_equipe(self):
        print(f"{self.codinome} esta curando a equipe")


herois: list[HeroiOverwatch] = [
    HeroiSuporte("mercy", "suporte", "ninguem vai morrer enquanto eu estiver aqui!"),
    HeroiTanque("orisa", "tanque", "voces nao vao escapar da minha lanca!"),
    HeroiSuporte("ana", "suporte", "voce foi fortalecido, agora vai pra cima!"),
    HeroiSuporte("kiriko", "suporte", "vamos mostrar o caminho da raposa!"),
    HeroiOverwatch("widowmaker", "dano", "podem se esconder, eu vejo todos voces!"),
    HeroiTanque("dva", "tanque", "nerfa isso!"),
    HeroiOverwatch("genji", "dano", "ryujin no ken wo kurae!"),

]

for heroi in herois:
    heroi.usar_suprema()

    if isinstance(heroi, HeroiSuporte):
        heroi.curar_equipe()

    if heroi.codinome == "genji":
        print("penta kill, monster kill, o cara eh bao mesmo, ripo o outro time, gg")

    print()