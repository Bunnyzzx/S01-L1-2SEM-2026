class MortoVivo:
    def __init__(self, nome, almas, estus):
        self.nome = nome
        self._almas = almas
        self.__estus = 0
        self.set_estus(estus)

    def get_estus(self):
        return self.__estus

    def set_estus(self, quantidade):
        if 0 <= quantidade <= 10:
            self.__estus = quantidade
        else:
            print("quantidade de estus invalida!")

    def mostrar_status(self):
        return f"morto-vivo {self.nome} | almas: {self._almas} | estus: {self.__estus}"


class Clerigo(MortoVivo):
    def __init__(self, nome, almas, estus, milagre):
        super().__init__(nome, almas, estus)
        self.milagre = milagre

    def mostrar_status(self):
        return f"{super().mostrar_status()} | milagre: {self.milagre}"


clerigo = Clerigo("petrus", 2000, 5, "cura")
print(clerigo.mostrar_status())

clerigo.set_estus(15)
clerigo.set_estus(10)
print(clerigo.mostrar_status())